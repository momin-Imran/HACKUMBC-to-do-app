import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]); //initial state will be an array for task list
  const [newTask, setNewTask] = useState(""); //initial state will be an empty string for every new task

  //declaring all functions next
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((tasks) => [...tasks, newTask]); //adding new task to the list
      setNewTask(""); //clearing the input field after adding the task
    }
  }

  function deleteTask(index) {
    const filterTasks = tasks.filter((task, i) => i !== index);
    setTasks(filterTasks);
  }

  return (
    <div className="container">
      <h1>✔️To-Do-List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          placeholder="Enter a new task"
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
