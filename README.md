# Typescripts

boolean
string
number
array
null
undefined
function
arguments
optional arguments
defualt value
void
custom types
Composition
Inheritahce // interface



npm create vite --template react-ts ts-todo

import axios, { AxiosResponse } from 'axios';
// import React, { useEffect, useState } from 'react';
// import {v4 as uuid} from 'uuid' //npm --save-dev @types/uuid


// type todostype={
//   title:string,
//   id:string,
//   status:boolean
// }

// export const Todos = () => {
//   const [text,setText] =useState("")
//   const [todos,setTodos]=useState<todostype[]>([])

// useEffect(() => {
//   getData()
// },[])

//   const getData=()=> {
//     axios.get("http://localhost:8080/todos").then((res:AxiosResponse<todostype[]>) => {
//       const {data} = res
//       setTodos(data)
//     })
//   }
//   return (
//     <div>
//       <input value={text} onChange={(e)=> setText(e.target.value)}/>

//       <button onClick={()=>{
//         const payload = {title:text, status:false}
//         //setTodos([...todos,payload])
//         axios.post("http://localhost:8080/todos",payload).then(getData)
//       }}>ADD TODOS</button>

//       {todos.map((t)=> <div key={t.id}>{t.title} - {t.status? "done" : "not done"}</div>)}
//     </div>
//   )
// }
