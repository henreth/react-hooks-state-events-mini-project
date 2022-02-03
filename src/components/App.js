import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks,setTasks] = useState(TASKS);
  const [category,setCategories] = useState('All');

  function handleDeleteTask(deletedTaskText) {
      setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
    let len = tasks.length
    console.log(tasks)
  }

  const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={category} 
        onSelectCategory={setCategories}/>
      <NewTaskForm 
        categories ={CATEGORIES}
        onSubmit= {handleTaskFormSubmit}/>
      <TaskList 
        tasks={visibleTasks} 
        onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
