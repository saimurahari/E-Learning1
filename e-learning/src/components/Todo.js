import React,{useState} from 'react'
import TodoList from './TodoList'
import Nav from './nav';
import './css/Todo.css';

function Todo(){
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);
  
  const changeHandler = e =>{
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index) => index !==indexValue)
    setTodos(newTodos)
  }

  return(
    <div>
    <Nav />
      
        <div className = "card">
          <div className = "card-body">
            <h1>To Do List</h1>
            <center>
            <form onSubmit={submitHandler} className="formtodo">
              <input type = "text" name = "task" id ="text" value = {task} onChange={changeHandler} placeholder="TodoList" required/>
              <input type = "submit" value="+" id = "add" name = "Add"/>
              

            </form>
            </center>
            <TodoList todolist = {todos} deleteHandler = {deleteHandler}/>
          </div>
          </div>
      
    </div>
  )
}
export default Todo;
