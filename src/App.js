import { useState } from "react";
import DisplayTasks from "./components/DisplayTasks";
import FormInputTask from "./components/FormInputTask";

function App() {
  const [task, setTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <FormInputTask setTask = { setTask } />
      <DisplayTasks task = { task } tasks = { tasks } setTasks = { setTasks } />
    </>
  );
}

export default App;
