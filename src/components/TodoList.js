// Import React and necessary dependencies
import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem'; // Import TodoItem component
import { markTodoCompleteAction, editTodoAction, deleteTodoAction } from '../redux/actions'; // Import Redux actions

// Define a functional component named TodoListComponent
function TodoListComponent(props) {
    // Destructure props to access todos, markTodoCompleteAction, editTodoAction, and deleteTodoAction
    const { todos, markTodoCompleteAction, editTodoAction, deleteTodoAction } = props;

    // Render the TodoListComponent
    return (
        <div>
            <h1>Todo List</h1>
            
            <ul>
                {/* Map over the 'todos' array and create a TodoItem component for each todo */}
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        markAsComplete={markTodoCompleteAction} 
                        editTodo={editTodoAction} 
                        deleteTodo={deleteTodoAction} 
                    />
                ))}
            </ul>
        </div>
    );
}

// Map the Redux state (specifically, 'todos') to props
const mapStateToProps = (state) => ({
    todos: state.todos, // Assuming 'todos' is the name of the slice of state in your store
});

// Map Redux actions (markTodoCompleteAction, editTodoAction, deleteTodoAction) to props
const mapDispatchToProps = {
    markTodoCompleteAction, // Map the action creator for marking a todo as complete
    editTodoAction, // Map the action creator for editing a todo
    deleteTodoAction, // Map the action creator for deleting a todo
};

// Connect the component to the Redux store using mapStateToProps and mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);
