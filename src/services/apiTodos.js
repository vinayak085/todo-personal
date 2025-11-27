import supabase, { supabaseurl } from "./supabase";

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

export async function addTodo({ description, image, id, completed }) {
  const { data: { user }} = await supabase.auth.getUser();

  completed = completed ?? false;

  // detect if image is a URL
  const hasImagePath = image?.startsWith?.(supabaseurl);

  const imageName =
    !hasImagePath && image
      ? `${Math.random()}-${image.name}`.replaceAll("/", "")
      : null;

  const imagePath = hasImagePath
    ? image
    : image
    ? `${supabaseurl}/storage/v1/object/public/todo-images/${imageName}`
    : null;

  const todoData = {
    description,
    completed,
    image: imagePath,
    user_id: user.id,
  };

  let query = supabase.from("todos");

  // CREATE
  if (!id) {
    const { data, error } = await query
      .insert([todoData])
      .select()
      .single(); 
      
    if (error) {
      console.error(error);
      throw new Error("Todo could not be inserted");
    }

    // upload image only after insert
    if (!hasImagePath && image) {
      const { error: storageError } = await supabase.storage
        .from("todo-images")
        .upload(imageName, image);

      if (storageError) {
        console.error(storageError);
        throw new Error("Image upload failed");
      }
    }

    return data;
  }

  // UPDATE
  if (id) {
    const { data, error } = await query
      .update(todoData)
      .eq("id", id)
      .select()
      .single();   // only once

    if (error) {
      console.error(error);
      throw new Error("Todo could not be updated");
    }

    if (!hasImagePath && image) {
      const { error: storageError } = await supabase.storage
        .from("todo-images")
        .upload(imageName, image);

      if (storageError) {
        console.error(storageError);
        throw new Error("Image upload failed");
      }
    }

    return data;
  }
}

    // const {data,error} = await supabase
    // .from('todos')
    // .insert([{ description }])
    // .select()

    // if(error)
    // {
    //     console.error(error)
    //     throw new Error("todos could not be added")
    // }

    // return data;
  

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