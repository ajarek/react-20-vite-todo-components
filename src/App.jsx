import React from "react"
import "./App.css"
import {Button} from "./components/Button/Button"
import { Form } from "./components/Form/Form"
import { List } from "./components/List/List"
export class App extends React.Component {
  state = {
    newTaskText: "",
    tasks:[],
    infoItems:'',
    arrIsCompleted:[]
  }
  toggleItem = (id) => {
    const newElements = this.state.tasks
    newElements.forEach((element) => {
      if (element.id === id) {
        element.isCompleted = !element.isCompleted
        this.setState({ tasks: newElements })
      }
    })
  }

  editItem = (id) => {
    const newElements = this.state.tasks
    newElements.forEach((element) => {
      if (element.id === id) {
        this.setState({ newTaskText: element.text })
        this.deleteItem(element.id)
      }
    })
  }

  deleteItem = (id) => {
    const newElements = this.state.tasks.filter((element) => element.id != id)

    this.setState({ tasks: newElements })
  }

  onNewTaskTextChange = (e) => {
    this.setState({ newTaskText: e.target.value })
  }

  addNewTask = (e) => {
    e.preventDefault()
    if (!this.state.newTaskText) {
      return
    }
    const newTask = {
      id: String(Date.now()),
      text: this.state.newTaskText,
      isCompleted:false,
    }
    this.setState({ tasks: [newTask, ...this.state.tasks] })
    this.state.newTaskText = ""
  }
  changeInfo=()=>{
   this.state.infoItems=`${this.state.arrIsCompleted.length} of ${this.state.tasks.length} tasks done`
  }
 
//localStorage
componentDidMount () {
  const tasksRaw = localStorage.getItem('tasks')
  const tasks = JSON.parse(tasksRaw) || []
  this.setState(() => ({ tasks }))
 
}
  componentDidUpdate () {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    
}

  render() {
   
    this.state.arrIsCompleted= this.state.tasks.filter(el=>el.isCompleted===true)
    this.changeInfo()
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
                onChange={() => this.toggleItem(el.id)}
                id={el.id}
                key={index}
                btnEdit={() => this.editItem(el.id)}
                btnDelete={() => this.deleteItem(el.id)}
              >
                {el.text}
              </List>
            ))}
          </ul>
          <div className="row-info">                   
          <div className="info"
          >{this.state.infoItems}
            <span
            style={{ width:`${this.state.arrIsCompleted.length/this.state.tasks.length*100}%`}}
            ></span>
            </div>
          <Button
          className={" btn-remove-checked"}
          >Remove checked ❌</Button>
          </div>
        </div>
      </div>
    )
  }
}
export default App
