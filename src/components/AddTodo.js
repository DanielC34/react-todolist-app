// Import necessary libraries and dependencies
import React, { useState } from 'react';

// Import the 'useDispatch' hook from 'react-redux' to access the Redux store's dispatch function
import { useDispatch } from "react-redux";

// Import the 'addTask' action creator from the 'taskSlice' Redux slice
import { addTask } from "../redux/taskSlice";

// Define the 'AddTodo' component
const AddTodo = () => {
    // Initialize a state variable 'value' using useState to manage the input field's value
	const [value, setValue] = useState('');

    // Access the 'dispatch' function from the Redux store
	const dispatch = useDispatch();

    // Define a function 'onSubmit' to handle form submission
	const onSubmit = (event) => {
        // Prevent the default form submission behavior
		event.preventDefault();

        // Check if the input value is empty or only contains whitespace
		if (value.trim().length === 0) {
            // Display an alert if the input is empty
			alert("Enter a task before adding !!");
            
            // Clear the input field by resetting the 'value' state
			setValue("");
            
            // Exit the function to prevent further execution
			return;
		}

        // Dispatch the 'addTask' action with the task description as payload
		dispatch(
			addTask({
				task: value
			})
		);

        // Clear the input field by resetting the 'value' state
		setValue("");
	};

    // Render the component's UI
	return (
		<div className="add-todo">
            {/* Input field for entering a new task */}
			<input
				type="text"
				className="task-input"
				placeholder="Add task"
				value={value}
                // Update the 'value' state when the input changes
				onChange={(event) => setValue(event.target.value)}
			></input>

            {/* Button to submit the new task */}
			<button
                className="task-button"
                // Call the 'onSubmit' function when the button is clicked
				onClick={onSubmit}
			>
				Save
			</button>
		</div>
	);
};

// Export the 'AddTodo' component
export default AddTodo;
