import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
  };

  return (
    <div className="container">
      <h1>Task Basic</h1>
      <form onSubmit={submitHandler}>
        {/* <label>Enter a task</label> */}
        <input
          type="text"
          value={task}
          placeholder='Enter a task'
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">ADD TASK</button>
      </form>

      <div className="task-container">
        {tasks.map((item, index) => (
          <div key={index} className="task-card">
            {item}
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
