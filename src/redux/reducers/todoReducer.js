import {
  ADD_TODO,
  MARK_TODO_COMPLETE,
  EDIT_TODO,
  DELETE_TODO,
} from '../redux/actionTypes'; // Update the path to actionTypes.js

// Define the initial state for your todo list
const initialState = {
  todo: [
    // Sample todo items with initial properties
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Eat bread', completed: true },
    { id: 3, text: 'Go to the gym', completed: true },
    { id: 4, text: 'Go to the movies', completed: false },
    { id: 5, text: 'Go to the park', completed: true },
    { id: 6, text: 'Go to the beach', completed: false },
  ],
};

// Define the todoReducer, which handles actions related to the todo list
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // When the action type is 'ADD_TODO', create a new state object
      return {
        ...state,
        // Update the 'todo' array by adding a new todo item
        todo: [
          ...state.todo,
          {
            id: action.payload.id,
            text: action.payload.title, // Use 'title' from the payload
            completed: action.payload.completed,
          },
        ],
      };
    case MARK_TODO_COMPLETE:
      // When the action type is 'MARK_TODO_COMPLETE', create a new state object
      return {
        ...state,
        // Update the 'todo' array by toggling the 'completed' property
        todo: state.todo.map((todo) => {
          if (todo.id === action.payload) {
            // If the todo item matches the action payload, toggle 'completed'
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    case EDIT_TODO:
      // When the action type is 'EDIT_TODO', create a new state object
      return {
        ...state,
        // Update the 'todo' array by mapping and editing the todo item with matching id
        todo: state.todo.map((todo) => {
          if (todo.id === action.payload.id) {
            // If the todo item matches the action payload id, update 'text'
            return {
              ...todo,
              text: action.payload.title, // Use 'title' from the payload
            };
          }
          return todo;
        }),
      };
    case DELETE_TODO:
      // When the action type is 'DELETE_TODO', create a new state object
      return {
        ...state,
        // Update the 'todo' array by filtering out the todo item with matching id
        todo: state.todo.filter((todo) => todo.id !== action.payload),
      };
    default:
      // If the action type doesn't match any defined cases, return the current state
      return state;
  }
};
