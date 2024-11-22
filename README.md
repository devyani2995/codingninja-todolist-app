# TodoList App
Simple todo app built with the React framework.

## Features

- **Add a Todo**: Users can add new tasks to their todo list by entering the task in the input field.
- **Update a Todo**: Existing tasks can be edited by clicking the edit icon.
- **Delete a Todo**: Tasks can be removed from the list by clicking the delete icon.
- **Real-time Notifications**: The app provides feedback to the user through toast notifications (success or error messages) when tasks are added, updated, or deleted.
- **Loading Indicator**: A loader appears when data is being fetched from the API.

## Tech Stack

- **React**: The UI is built using React functional components.
- **React Hooks**: `useState`, `useEffect`, and `useRef` hooks are used to manage component state and lifecycle.
- **CSS Modules**: Modular CSS is used to scope styles to specific components.
- **React Toastify**: Used for displaying notifications to the user.
- **React Icons**: Icons for edit and delete actions are used from the `react-icons` library.

## Steps to Install and Run

1. **Clone the repository**:
   git clone https://github.com/devyani2995/codingninja-todolist-app.git
   cd codingninja-todolist-app

2. **Install dependencies**:
   npm install

3. **Start the development server**:
   npm start

4. Open your browser and navigate to http://localhost:3000 to view the app.

## Available Scripts

- **npm start**: Runs the app in development mode.
- **npm build**: Builds the app for production.
- **npm test**: Runs tests (if added).
- **npm eject**: Ejects the app from Create React App.

## Hosted URL: https://codingninja-todolist-app.netlify.app/