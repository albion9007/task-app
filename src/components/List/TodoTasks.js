import React from "react";
import Task from "./Task";

function TodoTasks({dispatch}) {
  return (
    <div>
      <Task dispatch={dispatch}/>
    </div>
  );
}

export default TodoTasks;