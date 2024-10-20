
import { useEffect, useState } from "react";
// Importing the required components (TodoForm and TodoList) 
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
// Importing the main CSS file for styling
import './index.css';
// toast notification
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from "react-toastify";
// Importing loader component 
import Loader from "./components/Loader/Loader";
// Importing API handler functions (for add, delete, update, and fetch tasks)
import { addTaskHandler, deleteTaskHandler, fetchTodo, updateTaskHandler } from "./api/api";

function App() {
  // Loading state
  const [isLoading, setisLoading] = useState(true);
  // State to manage the list of todo items
  const [todos, setTodo] = useState([]);
  // editing state
  const [isEdit, setisEdit] = useState({
    edit: false,
    task: {},
  });

  // Setting up the userId
  const userId = 1;

  // For adding a new todo item
  async function addTodo(title) {
    const data = await addTaskHandler(title, userId);
    if (data.success) {
      setTodo([data.data, ...todos]);
      toast.success("Task added succesfully");
    } else {
      toast.error(data.message);
    }
  }

  // For deleting a todo item
  async function deleteTodo(id) {
    const result = await deleteTaskHandler(id);
    if (result.success) {
      const todo = todos.filter((data) => {
        return data.id !== id;
      });
      setTodo(todo);
      toast.success("Task deleted succesfully");
    } else {
      toast.error(result.message);
    }
  }

  //For updating a todo item
  async function updateTodo(task, requested) {
    if (requested) {
      setisEdit({
        edit: true,
        task,
      });
      return;
    }
    const data = await updateTaskHandler(task);
    if (data.success) {
      toast.success("Task updated succesfully")
    } else {
      toast.error(data.message);
    }
    setisEdit({
      edit: false,
      task: {},
    });
  }

  //Fetching data from an api when the page gets first loaded
  useEffect(() => {
    async function fetchData() {
      const data = await fetchTodo();
      // If the API call is successful, stop the loading state and update the todo list
      if (data.success) {
        setisLoading(false);
        setTodo(data.data) // Updating the state with the fetched data
      } else {
        // If the API call fails, stop the loading state and display toast error message
        setisLoading(false);
        toast.error(data.message);
      }
    }
    fetchData();
  }, [])

  return (
    //  Main container div
    <div className="main-container">
      {/* Heading of the page */}
      <h1>Todo App</h1>
      {/* Rendering the TodoForm component for adding a new tasks  */}
      <TodoForm
        addTodo={addTodo}
        isEdit={isEdit}
        updateTodo={updateTodo}
      />

      {/* If `isLoading` is true, render the Loader component  */}
      {isLoading ? (
        <Loader />
      ) :
        // If `isLoading` is false, render the TodoList component to display the list of tasks
        (
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        )}

      {/* For showing toast notification message */}
      <ToastContainer />
    </div>
  );
}

export default App;
