import React from 'react'
import './App.css'
import {Form} from './components/Form/Form'
import {List} from './components/List/List'
export class App extends React.Component {
  state={
    newTaskText:'',
    tasks:[
      {id: '1661554536940', text: 'lis', isCompleted: false},
      {id: '1661554534484', text: 'lew', isCompleted: false},
      {id: '1661554529189', text: 'kot', isCompleted: false}
    ],
  }
  deleteItem=(e)=>{
   const liElement=e.target.parentElement.parentElement
   const liElementIndex=this.state.tasks.findIndex(el=>el.id==liElement.id)
   this.state.tasks.splice(liElementIndex,1)
   liElement.remove()
   console.log(this.state.tasks);
  
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
   this.setState({tasks:[newTask, ...this.state.tasks]})
   this.state.newTaskText=''
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
     <ul
     style={{width: '100%'}}
     >
      {this.state.tasks.map((el,index)=>        
      <List
      id={el.id}
      key={index}
      className={ el.isCompleted?'koks':'li' } 
      btnDelete={this.deleteItem}
      >
        {el.text}
        
      </List>
     
      )}
    
    </ul>
     
      
      </div>
    </div>
  )
}
}
export default App
