import React from 'react'
import './App.css'
import {Form} from './components/Form/Form'
export class App extends React.Component {
  state={
    newTaskText:'',
    tasks:[],
  }
  onNewTaskTextChange = (e) => {
   this.setState({newTaskText:e.target.value})
  }

   addNewTask=(e)=>{
   e.preventDefault()
   if(!this.state.newTaskText){
    return
   }
   const newTask={
    id:String(Date.now()),
    text:this.state.newTaskText,
    isCompleted:false
   }
   this.setState({tasks:this.state.tasks.push(newTask)})
   console.log(this.state.tasks);
  }
  render(){

  return (
    <div className="App">
      <div className="container">
      <h1>TODOLIST</h1>
     <Form
     className={'form'}
     newTaskText={this.state.newTaskText}
     addNewTask={this.addNewTask}
     onChange={this.onNewTaskTextChange}
     />
      </div>
    </div>
  )
}
}
export default App
