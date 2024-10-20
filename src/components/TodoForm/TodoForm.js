import { useEffect, useRef } from "react";

// Importing CSS module for styling TodoForm component
import styles from "./TodoForm.module.css";

const TodoForm = ({ addTodo, updateTodo, isEdit }) => {
    // using useRef hook for inputs
    const title = useRef();

    // For checking whether it is editing stage or not
    useEffect(() => {
        title.current.value = isEdit.edit ? isEdit.task.title : "";
    }, [isEdit]);

    // Function to handle form submission for adding a new todo item
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(title.current.value);
        title.current.value = "";
    };
    return (
        <div>
            {/* Form element containing the input field and submit button */}
            <form onSubmit={handleSubmit}>
                {/* The input field to type a new task */}
                <input
                    ref={title}
                    type="text"
                    placeholder="Write your task..."
                    className={styles.formInput}
                    required
                />
                {isEdit.edit ? (
                    // Button to update a new task
                    <button
                        type="button"
                        onClick={() => {
                            const task = isEdit.task;
                            task.title = title.current.value;
                            updateTodo(task, false);
                        }}
                    >
                        Update
                    </button>
                ) : (
                    // Button to submit a new task
                    <button type="submit">Create Todo</button>
                )}
            </form>
        </div>
    )
}

export default TodoForm;