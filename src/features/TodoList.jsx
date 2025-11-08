import { useState } from "react"
import Button from "../ui/Button";
import { useLocaleStorage } from "../hooks/useLocaleStorage";

function TodoList() {  

// const [todos,setTodos] = useState([]);

const [description,setDescription] = useState("")

const [todos,setTodos] = useLocaleStorage([],'todos');

 function onhandleAdd(todo){
  if(!todo.description) return;
  
  setTodos((todos)=>[...todos,todo])
 }

function onhandleDelete(id){
  setTodos((todos)=>todos.filter((todo)=>todo.id !==id))
}

 function onhandleSubmit(e){

   e.preventDefault();
  const clean = description.trim();
   if(!clean.trim()) return;

  const newItem = {id:Date.now(),description:clean}
  onhandleAdd(newItem)
  setDescription("")
 }


  return (
    <>
    <div>
     <h1 className="text-center
    bg-[#f4a226]
    font-monotone
    uppercase
    font-normal
    py-6
    mb-30

    text-4xl   
    sm:text-6xl    
    md:text-7xl        
    lg:text-[8rem]      

    tracking-[-2px]
    [word-spacing:6px] 
    sm:[word-spacing:14px]
    lg:[word-spacing:30px]">Offline TODO</h1> 
          <form onSubmit={onhandleSubmit}>

         <div className="flex items-center gap-3 w-full max-w-xl mx-auto mt-10 px-4">
            <input placeholder="Type what you want to do" value={description} onChange={(e)=>setDescription(e.target.value)}
            className="w-100 border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
              <button className="bg-yellow-400 text-white font-bold px-5 py-2 rounded-md hover:bg-yellow-500 transition cursor-pointer" onClick={onhandleAdd}>
                Add
              </button>
            </div>
            </form>
               
            <ul className="max-w-xl py-10 mx-auto mt-20 font-bold flex flex-wrap gap-10 px-4">
             {todos.map((todo)=>
             <li key={todo.id}>
              <span>{todo.description}</span>             
              <button onClick={()=>onhandleDelete(todo.id)} className="cursor-pointer">❌</button>
             </li>
            )}
            </ul>
        </div>
        </>
  )

}
export default TodoList