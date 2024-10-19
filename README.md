# Task Manager

A simple and intuitive Task Manager application built with React. This application allows users to manage their tasks efficiently by adding, editing, deleting, and sorting tasks based on priority. Users can also search for tasks using keywords.

## Features

- **Add New Task**: Users can create new tasks with a title, description, and priority level.
- **Edit Task**: Users can modify existing tasks.
- **Delete Task**: Users can remove tasks that are no longer needed.
- **Toggle Completion**: Users can mark tasks as completed or not completed.
- **Search Functionality**: Users can search tasks by title or description.
- **Sorting**: Users can sort tasks based on priority (high, medium, low).

## Functions

The application uses the following functions to manage tasks:

- **`addTask(newTask)`**: 
  - Adds a new task to the list. 
  - Creates a task object with a unique ID, sets the completed status to false, and updates the tasks and sorted tasks state.
  
- **`updateTask(updatedTask)`**: 
  - Updates an existing task in the list.
  - Maps through the current tasks and replaces the task with the updated task, then updates the state for both tasks and sorted tasks.

- **`deleteTask(taskId)`**: 
  - Removes a task from the list based on its ID.
  - Filters out the task from both the tasks and sorted tasks arrays.

- **`toggleComplete(taskId)`**: 
  - Toggles the completion status of a task.
  - Maps through the tasks and updates the completed property of the task with the given ID.

- **`sortTasks(priority)`**: 
  - Sorts the tasks based on the specified priority.
  - Uses a custom sorting function that sorts tasks by their priority order defined in the `priorityOrder` object.

- **`handleEditTask(task)`**: 
  - Prepares the application for editing a task.
  - Sets the editing task state and opens the edit dialog.

- **`handleSearch(query)`**: 
  - Filters the tasks based on the search query.
  - Updates the sorted tasks state with tasks that match the title or description based on the search input.

## Technologies Used

- React
- JavaScript
- HTML/CSS
- Local Storage for data persistence


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

