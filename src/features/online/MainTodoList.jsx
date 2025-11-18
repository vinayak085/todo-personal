import { useState } from "react";
import { HiArrowRightOnRectangle, HiTrash } from "react-icons/hi2";
import { useAddTodo } from "./useAddTodo";
import { useDeleteTodo } from "./useDeleteTodo";
import { useToggleTodo } from "./useToggleTodo";
import { useLogout } from "../login/useLogout";
import { useTodo } from "./useTodo";

// import { useTodos } from "./useTodos";
function MainTodoList() {

  const [search,setSearch] = useState("")
  const [filter,setFilter] = useState("all")   

   const {todo:todos = [] , isLoading} = useTodo({search,filter})
  //  const {todos=[],isLoading} = useTodos()

   const {isAdding,addtodo} = useAddTodo();
   const {isToggling,toggletodo} = useToggleTodo();
   const {isDeleting,deletetodo} = useDeleteTodo();
   const {logout,isLoading:isLoggingout} = useLogout();
     
    const [description,setDescription] = useState("") 
    
    function onhandleSubmit(e){
        
        e.preventDefault();
        const clean = description.trim();
        if(!clean.trim()) return;
        
        addtodo(
          {description:clean,completed:false},
          {
            onSuccess:()=>setDescription("")
          }
        )
    
    }
    

   if (isLoading) return <p>Loading...</p>;

const completedCount = todos.filter((t)=>t.completed).length;
const total = todos.length;
const percentage = total === 0 ? 0 : Math.round((completedCount / total) * 100);

return (

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //*whole todo list css and thier functionality is above
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
     <>
     {/* Navbar and their css  */}
 
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-amber-200 p-6">
  {/* Header */}
  <h1
    className="text-center 
      bg-gradient-to-r from-amber-400 to-yellow-500 
      text-white 
      font-monoton 
      uppercase 
      tracking-[4px] 
      py-8 
      rounded-xl 
      shadow-lg 
      text-4xl 
      sm:text-6xl 
      md:text-7xl 
      lg:text-[8rem] 
      transition-all 
      duration-300 
      hover:scale-[1.02]
    ">
    TODO
  </h1>

  <button 
   onClick={()=>logout()}
    disabled={isLoggingout}
    className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-md disabled:opacity-50"
    >{isLoggingout ? "logging" : <HiArrowRightOnRectangle/>}</button>


    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
     
     <input
      type="text"
      placeholder="search todos..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      className="w-full sm:w-72 px-4 py-3 rounded-lg shadow-md border border-gray-300 
      focus:ring-4 focus:ring-amber-300 focus:outline-none 
      text-gray-700 placeholder:text-gray-400 transition"
      />

      <select
      value={filter}
      onChange={(e)=>setFilter(e.target.value)}
      className="px-4 py-3 rounded-lg shadow-md border border-gray-300 
      bg-white text-gray-700 focus:ring-4 focus:ring-amber-300 transition"
      >
       <option value="all">All</option>
       <option value="completed">Completed</option>
       <option value="pending">Pending</option>

      </select>

    </div>


  {/* Form */}
  <form onSubmit={onhandleSubmit} className="mt-10">
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl mx-auto">
      <input
        placeholder="Type what you want to do..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 
        focus:outline-none focus:ring-4 focus:ring-amber-300 shadow-sm 
        placeholder:text-gray-400 transition-all duration-200"
      />
      <button
        type="submit"
        disabled={isAdding}
        className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-semibold px-6 py-3 
        rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
      >
        {isAdding ? "Adding" : "Add"}
      </button>
    </div>
  </form>

  {/* Todo List */}
  <ul
    className="list-none w-11/12 max-w-5xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mt-16"
  >
    {todos.map((todo) => (
      <li
        key={todo.id}
        className="flex items-center justify-between bg-white rounded-xl shadow-md px-5 py-4 hover:shadow-lg transition-shadow duration-200"
      >
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={todo.completed}
            disabled={isToggling}
            onChange={() => toggletodo(todo)}
            className="w-5 h-5 accent-amber-400 cursor-pointer"
          />
          <span
            className={`text-lg ${
              todo.completed ? "line-through text-gray-400" : "text-gray-800"
            } transition-colors`}
          >
            {todo.description}
           
          </span>
        </div>


        <button
          disabled={isDeleting}
          onClick={() => deletetodo(todo.id)}
          className="text-red-500 hover:text-red-600 text-xl cursor-pointer transition-transform hover:scale-110"
        >
          <HiTrash />
        </button>
      </li>
    ))}
  </ul>

  {/* Statistics */}
  <div className="mt-20 mx-auto w-fit bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-bold py-6 px-10 rounded-full shadow-lg text-center text-xl">
    <h1>
      {percentage === 0
        ? `Make your todo now (${percentage}%)`
        : percentage < 50
        ? `You're not done yet (${percentage}%)`
        : percentage < 100
        ? `Almost there! (${percentage}%)`
        : `Completed successfully (${percentage}%)`}
    </h1>
  </div>
</div>
         </>
   )
}

export default MainTodoList