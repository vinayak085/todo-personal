import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../../services/apiTodos";
import toast from "react-hot-toast";

export function useAddTodo(){

    const queryClient = useQueryClient();
    
    const {mutate:addtodo,isLoading:isAdding} = useMutation({
        mutationFn:addTodo,
        onSuccess:()=>
        {
            toast.success("Added successfully in the database")
            queryClient.invalidateQueries({queryKey:['todos']})
        },
        onError:(err)=> toast.error(err.message)
    })

    return {isAdding,addtodo}
}