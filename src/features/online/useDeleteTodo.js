import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../../services/apiTodos";
import toast from "react-hot-toast";

export function useDeleteTodo(){

    const queryClient = useQueryClient();

    const {mutate:deletetodo,isLoading:isDeleting}= useMutation({
        mutationFn:deleteTodo,
        onSuccess:()=>
        {
            toast.success("Deleted successfully from the database")
            queryClient.invalidateQueries({queryKey:['todos']})
        },
        onError:(err)=> toast.error(err.message)
    })

    return {isDeleting,deletetodo}
}