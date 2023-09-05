import { createStore } from 'redux';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

const initialState = {
  todos: [
    {
      id: 1,
      title: 'Buy groceries',
      description: 'Milk, eggs, bread, and cheese',
      deadline: '2023-09-07',
      completed: false,
    },
    {
      id: 2,
      title: 'Finish project',
      description: 'Complete all the remaining tasks',
      deadline: '2023-09-10',
      completed: false,
    },
    {
      id: 3,
      title: 'Go for a holiday',
      description: 'Reside in Nassau, Bahamas',
      deadline: '2023-10-12',
      completed: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // Handle ADD_TODO action
      if (!action.payload.title || !action.payload.description || !action.payload.deadline) {
        return state; // Validation failed, return the current state
      }

      const newTodo = {
        id: state.todos.length + 1,
        title: action.payload.title,
        description: action.payload.description,
        deadline: action.payload.deadline,
        completed: false,
      };

      return {
        ...state,
        todos: [...state.todos, newTodo],
      };

    case TOGGLE_TODO:
      // Handle TOGGLE_TODO action
      const updatedTodosToggle = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );

      return {
        ...state,
        todos: updatedTodosToggle,
      };

    case EDIT_TODO:
      // Handle EDIT_TODO action
      const updatedTodosEdit = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              title: action.payload.title || todo.title,
              description: action.payload.description || todo.description,
              deadline: action.payload.deadline || todo.deadline,
            }
          : todo
      );

      return {
        ...state,
        todos: updatedTodosEdit,
      };

    case DELETE_TODO:
      // Handle DELETE_TODO action
      const updatedTodosDelete = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );

      return {
        ...state,
        todos: updatedTodosDelete,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;