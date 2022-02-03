import React from "react";

function Task({text, category,onDeleteTask}) {
  // function handleDelete(event){
  //   event.target.parentNode.remove();
  // }
  function handleClick() {
    onDeleteTask(text);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" 
      onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
