import React from "react";
import Task from "./Task";

function TodoTasks({tasks, dispatch}) {
  return (
    <div>
        {tasks.map((item) => (
      <Task  key={item.id} dispatch={dispatch}/>))}
    </div>
  );
}

export default TodoTasks;