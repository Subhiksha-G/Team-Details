import { useEffect, useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState("");
  const [newTask, setNewTask] = useState(() => {
    const save = localStorage.getItem("");
    return save ? JSON.parse(save) : [];
  });

  useEffect(() => {
    localStorage.setItem("", JSON.stringify(newTask));
    console.log("Hi");
  }, [newTask]);

  function addTask() {
    if (tasks) {
        setNewTask([...newTask, tasks]); 
        setTasks("");
    } else {
        alert("Please enter your task");
    }
  }

  function deleteTask(index) {
    setNewTask(newTask.filter((item, indexValue) => indexValue !== index));
  }
  return (
    <>
      <h1>Todo App using useEffect</h1>
      <input
        type="text"
        placeholder="Type your task"
        value={tasks}
        onChange={(event) => setTasks(event.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {newTask.map((item, index) => (
            <li key={index}>
                {item}
                <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
        ))}
      </ul>
    </>
  );
}
