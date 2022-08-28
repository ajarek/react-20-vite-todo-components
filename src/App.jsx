import React from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";
export class App extends React.Component {
  state = {
    newTaskText: "",
    tasks: [
      { id: "1661554536940", text: "Zrobić pranie", isCompleted: false },
      { id: "1661554534484", text: "Naucz się React", isCompleted: false },
      { id: "1661554529189", text: "Zrobić zakupy", isCompleted: false },
    ],
  };
  toggleChange = (id) => {
    const newElements = this.state.tasks;
    newElements.forEach((element) => {
      if (element.id === id) {
        element.isCompleted = !element.isCompleted;
        this.setState({ tasks: newElements });
      }
    });
  };

  editItem = (id) => {
    const newElements = this.state.tasks;
    newElements.forEach((element) => {
      if (element.id === id) {
        this.setState({ newTaskText: element.text });
        this.deleteItem(element.id);
      }
    });
  };

  deleteItem = (id) => {
    const newElements = this.state.tasks.filter((element) => element.id != id);

    this.setState({ tasks: newElements });
  };

  onNewTaskTextChange = (e) => {
    this.setState({ newTaskText: e.target.value });
  };

  addNewTask = (e) => {
    e.preventDefault();
    if (!this.state.newTaskText) {
      return;
    }
    const newTask = {
      id: String(Date.now()),
      text: this.state.newTaskText,
      isCompleted: this.state.isChecked,
    };
    this.setState({ tasks: [newTask, ...this.state.tasks] });
    this.state.newTaskText = "";
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>TODOLIST</h1>
          <Form
            className={"form"}
            newTaskText={this.state.newTaskText}
            addNewTask={this.addNewTask}
            onChange={this.onNewTaskTextChange}
          />
          <ul style={{ width: "100%" }}>
            {this.state.tasks.map((el, index) => (
              <List
                checked={el.isCompleted}
                className={`li ${el.isCompleted ? "completed" : ""}`}
                onChange={() => this.toggleChange(el.id)}
                id={el.id}
                key={index}
                btnEdit={() => this.editItem(el.id)}
                btnDelete={() => this.deleteItem(el.id)}
              >
                {el.text}
              </List>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
