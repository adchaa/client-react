import { useEffect, useState } from "react";
import List from "./components/List";

function App() {
  async function AddTaskToServer() {
    const b = {
      name: task,
    };
    console.log(b);
    const res = await fetch("http://127.0.0.1:3800/task", {
      method: "POST",
      body: JSON.stringify(b),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status == 200) {
      const t = await res.json();
      setTasks([...tasks, t]);
    }
  }
  async function fetchAllTasks() {
    const res = await fetch("http://127.0.0.1:3800/task");
    const json = await res.json();
    setTasks(json);
  }
  useEffect(() => {
    fetchAllTasks();
  }, []);

  function addTask() {
    console.log(task);
    AddTaskToServer();
  }
  function deleteTask(i) {
    let newTasks = tasks.filter((_, index) => index != i);
    setTasks(newTasks);
  }
  let [tasks, setTasks] = useState([]);
  let [task, setTask] = useState("");
  return (
    <div>
      <h1>TODO</h1>
      <input type="text" onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>ADD</button>
      <List deleteTask={deleteTask} tasks={tasks} />
    </div>
  );
}

export default App;
