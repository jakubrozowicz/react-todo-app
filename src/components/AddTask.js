import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    value: "",
    date: this.minDate,
    checked: false,
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleValue = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleClick = () => {
    const { value, date, checked } = this.state;
    if (value.length > 2) {
      this.props.add(value, checked, date);
      this.setState({
        value: "",
        date: this.minDate,
        checked: false,
      });
    } else alert("Zadanie musi zawierać co najmniej 3 znaki");
  };

  render() {
    const { value, date, checked } = this.state;
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31"; //koniec następnego roku (2024-12-31)

    return (
      <div className="container">
        <div className="form">
          <h2>Dodaj zadanie do zrobienia:</h2>
          <div>
            <input
              type="text"
              placeholder="Dodaj zadanie"
              value={value}
              onChange={this.handleValue}
            />
            <input
              type="checkbox"
              checked={checked}
              id="important"
              onChange={this.handleCheckbox}
            />
            <label htmlFor="important">Priorytet</label>
          </div>
          <label htmlFor="date">Do kiedy zrobić</label>
          <input
            type="date"
            id="date"
            value={date}
            min={date}
            max={maxDate}
            onChange={this.handleDate}
          />
          <button onClick={this.handleClick} className="btnAddTask">
            Dodaj zadanie
          </button>
        </div>
      </div>
    );
  }
}

export default AddTask;
