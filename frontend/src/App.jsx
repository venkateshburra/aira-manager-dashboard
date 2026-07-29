import { useEffect, useState } from "react";

const API = "http://localhost:3000/api/task";

function App() {
  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Get All Tasks

  const getTasks = async () => {
    try {
      setLoading(true);

      const response = await fetch(API);

      const data = await response.json();

      if (data.success) {
        setTasks(data.data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  // Add Task

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(API, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title,
          description,
          status,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setTitle("");
        setDescription("");
        setStatus("pending");

        getTasks();
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to create task");
    } finally {
      setLoading(false);
    }
  };

  // Delete Task

  const deleteTask = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete?"
    );

    if (!confirmDelete) return;

    try {
      await fetch(`${API}/${id}`, {
        method: "DELETE",
      });

      getTasks();
    } catch (err) {
      alert("Delete failed");
    }
  };

  // Edit Task

  const editTask = async (task) => {
    const newTitle = window.prompt("Title", task.title);

    if (newTitle === null) return;

    const newDescription = window.prompt(
      "Description",
      task.description
    );

    if (newDescription === null) return;

    const newStatus = window.prompt(
      "Status (pending, in_progress, completed)",
      task.status
    );

    if (newStatus === null) return;

    try {
      await fetch(`${API}/${task._id}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title: newTitle,
          description: newDescription,
          status: newStatus,
        }),
      });

      getTasks();
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Task Manager</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <br />

        <div>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <br />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pending</option>

          <option value="in_progress">
            In Progress
          </option>

          <option value="completed">
            Completed
          </option>
        </select>

        <br />
        <br />

        <button>Add Task</button>
      </form>

      <br />

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table>
        <thead>
          <tr>
            <th>Title</th>

            <th>Description</th>

            <th>Status</th>

            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="4">No Tasks</td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr key={task._id}>
                <td>{task.title}</td>

                <td>{task.description}</td>

                <td>{task.status}</td>

                <td>
                  <button
                    onClick={() => editTask(task)}
                  >
                    Edit
                  </button>

                  {" "}

                  <button
                    onClick={() =>
                      deleteTask(task._id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;