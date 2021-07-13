import React from "react";
import Task from "./Task";

function TodoTasks({tasks, dispatch}) {
  return (
    <div>
      <Task tasks={tasks} dispatch={dispatch}/>
    </div>
  );
}

export default TodoTasks;