import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

// Define action types as constants
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const DELETE_TODO = 'DELETE_TODO';

class TodoList extends Component {
  constructor(props) {
    super(props);

    // Initialize component state to manage the new todo text
    this.state = {
      newTodoText: '',
    };
  }

  // Function to handle adding a new todo
  handleAddTodo = () => {
    const { newTodoText } = this.state;

    // Checking if the input is not empty (whitespace trimmed)
    if (newTodoText.trim() !== '') {
      // Dispatching the 'ADD_TODO' action with the new todo text
      this.props.dispatch({
        type: ADD_TODO,
        payload: {
          title: newTodoText, // Pass the title in the payload
          description: '', // Add the relevant description here
          deadline: '', // Add the relevant deadline here
        },
      });
      // Clear the input field by resetting the state
      this.setState({ newTodoText: '' });
    }
  };

  // Function to handle marking a todo as complete
  handleToggleTodo = (id) => {
    // Dispatch the 'TOGGLE_TODO' action with the todo's ID
    this.props.dispatch({
      type: TOGGLE_TODO,
      payload: {
        id,
      },
    });
  };

  // Function to handle editing a todo
  handleEditTodo = (id, newText) => {
    // Dispatch the 'EDIT_TODO' action with the todo's ID and new text
    this.props.dispatch({
      type: EDIT_TODO,
      payload: {
        id,
        title: newText, // Pass the edited title in the payload
      },
    });
  };

  // Function to handle deleting a todo
  handleDeleteTodo = (id) => {
    // Dispatch the 'DELETE_TODO' action with the todo's ID
    this.props.dispatch({
      type: DELETE_TODO,
      payload: {
        id,
      },
    });
  };

  // Render method to display the component's UI
  render() {
    const { todos } = this.props;
    const { newTodoText } = this.state;

    return (
      <div className="todo-list">
        <h2>Todo List</h2>
        <div className="todo-input">
          <input
            type="text"
            placeholder="Add a new task"
            value={newTodoText}
            onChange={(e) => this.setState({ newTodoText: e.target.value })}
          />
          <button onClick={this.handleAddTodo}>Add</button>
        </div>
        <ul>
          {/* Map through the 'todos' array and render 'TodoItem' components */}
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={this.handleToggleTodo}
              onEdit={this.handleEditTodo}
              onDelete={this.handleDeleteTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

// Map the Redux state to props, specifically the 'todos' array
const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
