import supabase from "./supabase";

export async function getTodos() {

  let {data,error} = await supabase
  .from('todos')
  .select('*')
       
  if(error)
  {
    console.error(error)
    throw new Error("todos could not be loaded..")
  }

  return data;
}

export async function addTodo({description}){
    const {data,error} = await supabase
    .from('todos')
    .insert([{ description }])
    .select()

    if(error)
    {
        console.error(error)
        throw new Error("todos could not be added")
    }

    return data;
}

export async function deleteTodo(id){
    const {error} = await supabase
    .from('todos')
    .delete()
    .eq('id',id)

    if(error)
    {
     console.error(error)
     throw new Error("can't delete may there is an error")
    }
}

export async function toggleTodo(todo){
    const {error} = await supabase
    .from('todos')
    .update({completed:!todo.completed})
    .eq('id',todo.id)

    if(error)
    {
      console.error(error)
      throw new Error("not updating the todo")
    }
}