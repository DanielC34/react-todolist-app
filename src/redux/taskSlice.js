// Import the 'createSlice' function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice called 'tasksSlice'
export const tasksSlice = createSlice({
    // Specify the name of the slice (used in the Redux store)
    name: "tasks",

    // Define the initial state for this slice (an empty array)
    initialState: [],

    // Define the reducers for this slice
    reducers: {
        // 'addTask' reducer: This function is responsible for adding a new task to the state
        addTask: (state, action) => {
            // Create a new task object with a unique ID and name from the action payload
            const newTask = {
                id: new Date(), // Using the current date as a unique ID (this can be improved)
                name: action.payload.task, // Extract the task name from the action payload
            };

            // Mutate the state by pushing the new task into the 'tasks' array
            state.push(newTask);
        },

        // 'deleteTask' reducer: This function is responsible for deleting a task from the state
        deleteTask: (state, action) => {
            // Use the 'filter' method to create a new array with tasks that don't match the provided ID
            return state.filter((item) => item.id !== action.payload.id);
        },
    },
});

// Export the 'addTask' and 'deleteTask' actions from the slice
export const { addTask, deleteTask } = tasksSlice.actions;

// Export the reducer function from the slice
export default tasksSlice.reducer;
