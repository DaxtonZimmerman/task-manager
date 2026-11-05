import { useState } from "react";
import Header from "./Header.jsx";
import TaskInput from "./TaskInput.jsx";
import TaskList from "./TaskList.jsx";
import Stats from "./Stats.jsx";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  }

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  }

  return (
    <main>
      <Header />
      <TaskInput onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
      <Stats tasks={tasks} />
    </main>
  );
}