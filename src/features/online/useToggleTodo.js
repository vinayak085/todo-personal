import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleTodo } from "../../services/apiTodos";
import toast from "react-hot-toast";

export function useToggleTodo(){

    const queryClient = useQueryClient();

    const {mutate:toggletodo,isLoading:isToggling} = useMutation({
        mutationFn:toggleTodo,
        onSuccess: ()=> {
            toast.success("toggled")
            queryClient.invalidateQueries({queryKey:['todos']})
        }
    })
    return {isToggling,toggletodo}
}