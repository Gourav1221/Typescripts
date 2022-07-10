
import React from 'react'
import { TodoOp } from './actions';

interface TodoLists{
    todo:TodoOp[]
}



export const TodoList = ({todo}:TodoLists) => {

  return (
    <div>

    {todo.map((e:TodoOp) =>{
        return <div key={e.id}>
            <h1>{e.name}</h1>
            <h2>{e.isCompleted ? 'Completed' : 'not completed'}</h2>
               
        </div>
    })}
       

    </div>
  )
}
