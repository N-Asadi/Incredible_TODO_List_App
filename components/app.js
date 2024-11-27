import { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

export default function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]); // Initial state

  const addTask = (taskText) => {
    // Normalize the case of tasks for comparison
    const taskExists = tasks.some(
      (task) => task.toLowerCase() === taskText.toLowerCase()
    );

    if (taskExists) {
      alert("Task already exists!"); // Notify the user if the task is a duplicate
      return;
    }

    setTasks([...tasks, taskText]); // Add the task if it's not a duplicate
  };
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>My Tasks</h1>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </div>
  );
}
