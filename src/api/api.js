const url = "https://jsonplaceholder.typicode.com/todos";

//Fetching all todos from an API
export const fetchTodo = async () => {
  let data = [];
  try {
    const responce = await fetch(url);

    data = await responce.json();
    return {
      data,
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

//For creating a new todo item
export const addTaskHandler = async (title, userId) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title,
        userId,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

// For deleting a todo item
export const deleteTaskHandler = async (id) => {
  try {
    await fetch(url + `/${id}`, {
      method: "DELETE",
    });
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

// For updating a todo item
export const updateTaskHandler = async (item) => {
  try {
    const response = await fetch(url + `/${item.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: item.id,
        title: item.title,
        userId: item.userId,
        completed: item.completed
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};