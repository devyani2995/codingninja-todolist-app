// Importing CSS module for styling TodoList component
import styles from "./TodoList.module.css";

// Importing react-icons for edit and delete todo item
import { BiSolidEditAlt } from "react-icons/bi";
import { FaTrashCan } from "react-icons/fa6";

// TodoList component to display list of todo items
const TodoList = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <div className={styles.container}>
            {/* Mapping over todos array to display each todo items */}
            {todos.map((todo) => {
                return (
                    <div key={todo.id} className={styles.task}>
                        {/* Displaying the title of the todo */}
                        <h4>{todo.title}</h4>
                        {/* Container for the icons (edit and delete) */}
                        <div className={styles.iconContainer}>
                            {/* Edit icon to update the todo*/}
                            <div style={{ color: "#FF6D71" }}>
                                <BiSolidEditAlt onClick={() => updateTodo(todo, true)} />
                            </div>
                            
                            {/* Delete icon to delete the todo*/}
                            <div>
                                <FaTrashCan onClick={() => { deleteTodo(todo.id) }} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList;