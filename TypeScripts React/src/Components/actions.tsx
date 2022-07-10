


import axios,{AxiosResponse} from "axios";

interface InputTodo{
    name: string;
    isCompleted: boolean;
};

export type TodoOp={
    id:Number;
    name:String;
    isCompleted:boolean;
}



export const getTodo = async ()=>{
   try{
    let res:AxiosResponse<TodoOp[]> = await axios.get("http://localhost:8080/todo")
    return res.data //[]
   }
   catch(er){
    console.log(er)
   }
}

export const postTodo = async (newTodo:InputTodo) => {

    let res:AxiosResponse<TodoOp> = await axios.post("http://localhost:808080/todo",newTodo)
    return res.data

}
