import React from "react";
import "./TaskList.css";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active === true);
  const done = props.tasks.filter((task) => task.active !== true);

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      change={props.change}
      delete={props.delete}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      change={props.change}
      delete={props.delete}
    />
  ));

  return (
    <>
      <div className="tasksActive">
        <h2>Zadania do zrobienia:</h2>
        <div>
          {activeTasks.length < 1 ? (
            <span className="emptyTasks">Brak zadań do wykonania</span>
          ) : (
            activeTasks
          )}
        </div>
      </div>

      <div className="tasksDone">
        <h2>
          Zadania wykonane: <em>({doneTasks.length})</em>
        </h2>
        <div>{doneTasks}</div>
      </div>
    </>
  );
};

export default TaskList;
