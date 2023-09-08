// Import necessary libraries and dependencies
import React from 'react';

// Import the 'TodoItem' component
import TodoItem from './TodoItem';

// Import the 'useSelector' hook from 'react-redux' to access the Redux store
import { useSelector } from "react-redux";

// Define the 'TodoList' component
const TodoList = () => {
    // Use the 'useSelector' hook to retrieve the 'tasks' state from the Redux store
    const todos = useSelector((state) => {
        return state.tasks;
    });

    // Render the component's UI
    return (
        <ul className="tasks-list">
            {/* Map over the 'todos' array and render 'TodoItem' components for each task */}
            {todos.map((todo) => (
                <TodoItem
                    // Pass task properties (id, title, completed) as props to 'TodoItem'
                    id={todo.id}
                    title={todo.name}
                    completed={todo.status}
                />
            ))}
        </ul>
    );
};

// Export the 'TodoList' component
export default TodoList;
