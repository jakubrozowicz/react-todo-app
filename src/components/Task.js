import React from "react";
import "./Task.css";

const Task = (props) => {
  const { text, date, id, active, important, finishDate } = props.task;

  const style = {
    color: "red",
  };

  if (active) {
    return (
      <div className="task">
        <p>
          {<strong style={important ? style : null}>{text}</strong>} - zrobić
          do: {date}
          <button
            onClick={() => props.change(id)}
            className="taskBtn taskBtnCheck"
          >
            &#10003;
          </button>
          <button
            onClick={() => props.delete(id)}
            className="taskBtn taskBtnDelete"
          >
            &#10005;
          </button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();

    return (
      <div className="task">
        <p>
          <strong>{text}</strong>
          <em> - (zrobić do: {date})</em>
          <br />
          Data i godzina wykonania: <span>{finish}</span>
          <button
            onClick={() => props.delete(id)}
            className="taskBtn taskBtnDelete"
          >
            &#10005;
          </button>
        </p>
      </div>
    );
  }
};

export default Task;
