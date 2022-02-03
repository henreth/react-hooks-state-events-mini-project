import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({categories, onSubmit}) {
  const [newTask, setNewTask] = useState('');
  const [newTaskCategory,setNewTaskCategory] = useState('All');

  function handleNewTaskChange(event) {
    setNewTask(event.target.value);
  }

  function handleNewTaskCategoryChange(event) {
    setNewTaskCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let formData= {
      id: uuid(),
      text:newTask,
      category:newTaskCategory,
    }
    onSubmit(formData);
  }

  return (
    <form 
      className="new-task-form"
      onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={newTask}
          onChange={handleNewTaskChange} />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={newTaskCategory}
          onChange={handleNewTaskCategoryChange}>
          {categories.map((category,index) => (
            <option 
              key = {category}
              value={category}
              >{category}</option> ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
