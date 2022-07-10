
import './App.css'
import { Button } from './Components/Button'
import { FaBeer } from 'react-icons/fa';
import { Todo } from './Components/TodoInput';
import { TodoList } from './Components/TodoList';


import {getTodo,postTodo} from './Components/actions'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {TodoOp} from "./Components/actions"


function App() {


  const [todo,setTodo] = useState<TodoOp[]>([])
  

  useEffect(() =>{

    //getTodo().then((todo) => {setTodo([...todo])})

  },[])

 

    const handleAdd = (value:string) => {
      // console.log(value)
      postTodo({
        name:value,
        isCompleted:false,
      }).then((e)=>{
        setTodo([...todo,e])
      })

      

    }

    


  return (
    <div className="App">
     <br />
     <br />

     <Button color='red' leftIcon={<FaBeer/>} rightIcon={<FaBeer/>}>Button</Button>
     <br />

{/* 
     <Button color='blue' leftIcon={<FaBeer/>}>Button</Button>
     <br />
     */}

     <Todo handleAdd={handleAdd}/>
     <TodoList todo={todo}/>

     
    </div>
  )
}

export default App
