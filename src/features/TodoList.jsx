import { useState } from "react"
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
  
  const newItem = {id:Date.now(),description:clean,completed:false}
  onhandleAdd(newItem)
  setDescription("")
}

function onhandletoggleitems(id){
  setTodos((todos)=>
  todos.map((todo)=>
  todo.id === id ? {...todo,completed:!todo.completed} : todo
  ))
}

 function onhandleClearList(){
   const confirmed = window.confirm("Are you sure you want to delete this...")

   if(confirmed) setTodos([])
 }

 const completedCount = todos.filter((t)=>t.completed).length;
 const total = todos.length;
 const percentage = total === 0 ? 0 : Math.round((completedCount / total) * 100);

  return (

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*whole todo list css and thier functionality is above
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    <>
    {/* Navbar and their css  */}

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
    lg:[word-spacing:30px]"> Offline TODO</h1> 
        

       {/* Form whenever user click this the todo will going to submit and shows in the "ui"    */}

          <form onSubmit={onhandleSubmit}>
         <div className="flex items-center gap-3 w-full max-w-xl mx-auto mt-10 px-4">
            <input placeholder="Type what you want to do" value={description} onChange={(e)=>setDescription(e.target.value)}
            className="w-100 border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
              <button
              type="submit" 
              className="bg-yellow-400 text-white font-bold px-5 py-2 rounded-md hover:bg-yellow-500 transition cursor-pointer" 
              onClick={onhandleAdd}>
                Add
              </button>
            </div>
            </form>


            {/* //* This part is comes whenever the form is submitted and all the css of above part   */}

            <ul className=" list-none w-4/5 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 justify-center content-start mt-20">
             {todos.map((todo)=>
             <li key={todo.id}
             >
              <input type="checkbox" 
              checked={todo.completed}
              onChange={()=>onhandletoggleitems(todo.id)}/>
              <span className={todo.completed ? "line-through opacity-45": ""}>{todo.description}</span>             
              <button onClick={()=>onhandleDelete(todo.id)} className="cursor-pointer">❌</button>
             </li>
            )}
            </ul>


            {/* //* It shows logic above todo and their statastics */}
            
            <div className="mt-90 mx-10 font-bold py-[3.2rem] bg-amber-400 text-center">
            <h1> {percentage === 0 ? `make your todo now ${percentage}` : percentage < 50 ? `you are not done yet ${percentage}`: percentage < 100 ? `you are almost there ${percentage}` : `completed successfully ${percentage}`} %</h1>
            </div>
        </div>
        </>
  )
}

export default TodoList