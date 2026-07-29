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
