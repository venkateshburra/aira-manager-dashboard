<<<<<<< HEAD
# Task Manager

A simple Full Stack Task Manager application built using **React, Node.js, Express.js, and MongoDB**. The application supports basic CRUD operations for managing tasks.

## Tech Stack

- React.js
- Node.js
- Express.js
- MongoDB
- Mongoose
- Fetch API

## Features

- Add Task
- View All Tasks
- Edit Task
- Delete Task
- Loading & Error Handling

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/task` | Get all tasks |
| POST | `/api/task` | Create a task |
| PUT | `/api/task/:id` | Update a task |
| DELETE | `/api/task/:id` | Delete a task |

## Project Flow

1. User creates a task using the form.
2. React sends requests using the Fetch API.
3. Express handles the request and performs CRUD operations.
4. MongoDB stores and retrieves task data.
5. React updates the UI with the latest task list.

## Setup

### Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URL=your_mongodb_connection_string
PORT=3000
```

Run the server:

```bash
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Author

**Venkatesh Burra**
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
>>>>>>> 0a5f49a (Initial dashboard implementation)
