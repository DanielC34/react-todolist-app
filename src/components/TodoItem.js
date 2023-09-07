import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markTodoComplete, editTodo, deleteTodo } from '../redux/actions';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    // Initialize the component's state with isEditing set to false
    // and updatedTitle set to the title of the passed-in todo item.
    this.state = {
      isEditing: false,
      updatedTitle: this.props.todo.title,
    };
  }

  // Function to toggle the 'isEditing' state when called.
  handleEditToggle = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  // Function to update the 'updatedTitle' state when the input field value changes.
  handleTitleChange = (e) => {
    this.setState({ updatedTitle: e.target.value });
  };

  // Function to handle the submission of edited todo item.
  handleEditSubmit = () => {
    const { todo, editTodo } = this.props;
    // Call the 'editTodo' action with the todo ID and the updated title.
    editTodo(todo.id, this.state.updatedTitle);
    // Set 'isEditing' back to false after submission.
    this.setState({ isEditing: false });
  };

  render() {
    const { todo, markTodoComplete, deleteTodo } = this.props;
    const { isEditing, updatedTitle } = this.state;

    return (
      <div className="todo-item">
        {isEditing ? (
          <div className="edit-todo">
            <input
              type="text"
              value={updatedTitle}
              onChange={this.handleTitleChange}
            />
            <button onClick={this.handleEditSubmit}>Save</button>
          </div>
        ) : (
          <div className={`todo ${todo.completed ? 'completed' : ''}`}>
            <span>{todo.title}</span>
            <div className="actions">
              <button onClick={() => markTodoComplete(todo.id)}>
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={this.handleEditToggle}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

// Defines the actions to be used as props for this component.
const mapDispatchToProps = {
  markTodoComplete,
  editTodo,
  deleteTodo,
};

// Connect the component to the Redux store, providing it with the specified actions.
export default connect(null, mapDispatchToProps)(TodoItem);
