import supabase from "./supabase";

export async function getFilter({userId,search="",filter="all"}) {
  let query = supabase
  .from("todos")
  .select('*')
  .eq("user_id",userId)
  .order("created_at",{ascending:false});

  if (filter === "completed") query = query.eq("completed",true);
  if (filter === "pending") query = query.eq("completed",false);

  if (search.trim() !=="") query = query.ilike("description",`%${search}%`);

  const {data,error} = await query;

  if(error) {
    throw new Error("todo could not be loaded..");
  }

    return data;
}