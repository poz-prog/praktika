import { useState } from "react";
import "./App.css";
import { useTasks } from "./hooks/useTasks";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const {
    tasks,
    addTask,
    deleteTask,
    moveTask,
  } = useTasks();

  const handleAddTask = () => {
    addTask(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="app">

      <header className="header">
        <h1>Трекер задач</h1>

        <input
          type="text"
          placeholder="Название задачи"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Описание задачи"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={handleAddTask}>
          Добавить задачу
        </button>
      </header>

      <main className="board">

        {/* К выполнению */}

        <div className="column">
          <h2>К выполнению</h2>

          {tasks
            .filter((task) => task.status === "todo")
            .map((task) => (
              <div key={task.id} className="task-card">
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <small>{task.createdAt}</small>

                <div className="task-actions">
                  <button
                    onClick={() => moveTask(task.id, "inprogress")}
                  >
                    →
                  </button>

                  <button
                    onClick={() => deleteTask(task.id)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* В работе */}
        <div className="column">
          <h2>В работе</h2>

          {tasks
            .filter((task) => task.status === "inprogress")
            .map((task) => (
              <div key={task.id} className="task-card">
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <small>{task.createdAt}</small>

                <div className="task-actions">
                  <button
                    onClick={() => moveTask(task.id, "todo")}
                  >
                    ←
                  </button>
                  
                  <button
                    onClick={() => moveTask(task.id, "done")}
                  >
                    →
                  </button>

                  <button
                    onClick={() => deleteTask(task.id)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Готово */}

        <div className="column">
          <h2>Готово</h2>

          {tasks
            .filter((task) => task.status === "done")
            .map((task) => (
              <div key={task.id} className="task-card">
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <small>{task.createdAt}</small>

                <div className="task-actions">
                  <button
                    onClick={() => moveTask(task.id, "inprogress")}
                  >
                    ←
                  </button>

                  <button
                    onClick={() => deleteTask(task.id)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
        </div>

      </main>

    </div>
  );
}

export default App;