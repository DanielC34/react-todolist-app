// Import necessary libraries and dependencies
import React from 'react';

// Import the 'useDispatch' hook from 'react-redux' to access the Redux store's dispatch function
import { useDispatch } from "react-redux";

// Import the 'deleteTask' action creator from the 'taskSlice' Redux slice
import { deleteTask } from "../redux/taskSlice";

// Define the 'TodoItem' component
const TodoItem = ({ id, title }) => {
    // Access the 'dispatch' function from the Redux store
	const dispatch = useDispatch();

    // Define a function 'removeTask' to handle task deletion
	const removeTask = () => {
		// Dispatch the 'deleteTask' action with the task's id as payload
		dispatch(
			deleteTask({
				id: id
			})
		)
	}

    // Render the component's UI
	return (
		<li className="task-item">
			<div>
				{title}
			</div>
			<div>
                {/* Button to delete the task when clicked */}
				<button
                    className="remove-task-button"
                    onClick={() => {
                        removeTask();
                    }}
                >
                    Delete
                </button>
			</div>
		</li>
	);
};

// Export the 'TodoItem' component
export default TodoItem;
