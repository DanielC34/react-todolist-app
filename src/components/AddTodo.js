import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../redux/actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: '', // Initialize the input field value
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter your task"
          value={this.state.todoText}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTodo}>Add</button>
      </div>
    );
  }

  // Define event handler for input change
  handleInputChange = (e) => {
    this.setState({ todoText: e.target.value });
  };

  // Define event handler for adding a todo
  handleAddTodo = () => {
    // Get the todo text from the input field
    const todo = this.state.todoText;

    // Dispatch an action to add the todo to the Redux store
    this.props.addTodoAction(todo);

    // Clear the input field after adding the todo
    this.setState({ todoText: '' });
  };
}

const mapStateToProps = (state) => {
  return {
    // Map any relevant state to props here (if needed)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoAction: (title) => dispatch(addTodoAction(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
