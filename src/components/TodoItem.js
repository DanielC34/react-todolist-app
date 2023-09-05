import React from 'react';
import { connect } from 'react-redux';

function TodoItem({ title, completed }) {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={completed} readOnly />
      <span className="title">{title}</span>
      <button className="edit-button">Edit</button>
      <button className="delete-button">Delete</button>
    </div>
  );
}

export default TodoItem;
