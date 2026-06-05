import { useState, useEffect } from "react";
import { loadTasks, saveTasks } from "../utils/localStorage";
export function useTasks() {
    const [tasks, setTasks] = useState(() => loadTasks());

  useEffect(() => {        // Сохранение при изменении задач
    saveTasks(tasks);
  }, [tasks]);

const addTask = (title, description) => {   // Создание задачи
  if (!title.trim()) {
    return;
  }

  const newTask = {
    id: Date.now(),
    title,
    description,
    status: "todo",
    createdAt: new Date().toLocaleString(),
  };

  setTasks((prev) => [newTask, ...prev]);
};

  const deleteTask = (id) => {            // Удаление задачи
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const moveTask = (id, newStatus) => {  // Изменения статуса задачи
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, status: newStatus }
          : task
      )
    );
  };

  return {
    tasks,
    addTask,
    deleteTask,
    moveTask,
    setTasks,
  };
}