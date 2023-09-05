import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from '../../redux/reducers/todoReducer'; 



const AddTodo = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoTitle.trim() !== '') {
      // Dispatch the ADD_TODO action with the todo title
      dispatch({
        type: ADD_TODO,
        payload: {
          title: todoTitle,
          description: '', // Add the relevant description here
          deadline: '', // Add the relevant deadline here
        },
      });

      // Clear the input field
      setTodoTitle('');
    }
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task.."
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTodo;
