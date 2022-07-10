import React, { useState } from 'react'
import { Button } from './Button'

type TodoProp = {

  handleAdd:Function;
}



export const Todo = ({handleAdd}:TodoProp) => {
//console.log('handleAdd:', handleAdd)
//handleAdd("data")

    const [data,setData] = useState("")


    const clickHandler =()=>{
      console.log("here")
      handleAdd(data)
    }



  return (
    <div>

        <input type="text" placeholder='Type Here...' onChange={(e)=>setData(e.target.value)}/>
        <Button color="red" onClick={clickHandler}>Add</Button>
        <button onClick={clickHandler}>add</button>

    </div>
  )
}
