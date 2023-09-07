// Import any necessary action types
import {
  ADD_TODO,
  MARK_TODO_COMPLETE,
  EDIT_TODO,
  DELETE_TODO,
} from './actionTypes';

// Action creator to add a new todo
export const addTodoAction = (title) => {
  // Generate a unique ID for the new todo (you can use a library like 'uuid' for this)
  const id = generateUniqueId();
  
  // Return an action object with the type and payload (new todo object)
  return {
    type: ADD_TODO,
    payload: {
      id,
      title,
      completed: false, // Set the initial completion status to false
    },
  };
};

// Action creator to mark a todo as complete or incomplete
export const markTodoCompleteAction = (id) => {
  // Return an action object with the type and payload (the todo ID)
  return {
    type: MARK_TODO_COMPLETE,
    payload: id,
  };
};

// Action creator to edit the title of a todo
export const editTodoAction = (id, updatedTitle) => {
  // Return an action object with the type, payload (todo ID), and the updated title
  return {
    type: EDIT_TODO,
    payload: {
      id,
      title: updatedTitle,
    },
  };
};

// Action creator to delete a todo
export const deleteTodoAction = (id) => {
  // Return an action object with the type and payload (the todo ID)
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

// Utility function to generate a unique ID for new todos (you can use a library for this)
function generateUniqueId() {
  const timestamp = Date.now().toString(); // Get the current timestamp as a string
  const randomNum = Math.random().toString().slice(2, 8); // Generate a random number and extract 6 digits
  return timestamp + randomNum; // Combine the timestamp and random number to create a unique ID
}
