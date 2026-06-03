const STORAGE_KEY = "kanban_tasks";

export const loadTasks = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  console.log("Загрузка:", data);
  return data ? JSON.parse(data) : [];
};

export const saveTasks = (tasks) => {
    console.log("Сохранение:", tasks);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};