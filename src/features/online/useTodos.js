import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../services/apiTodos";


export function useTodos(){

    const {isLoading,data:todos} = useQuery({
        queryKey:['todos'],
        queryFn:getTodos,
    });

    return {isLoading,todos}
}