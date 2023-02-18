import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 0;
  state = {
    tasks: [],
  };

  handleDelete = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);

    this.setState({
      tasks: tasks,
    });
  };

  handleChangeStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks: tasks,
    });
  };

  addTask = (value, important, date) => {
    const task = {
      id: this.counter,
      text: value,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    };
    this.counter++;
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          change={this.handleChangeStatus}
          delete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
