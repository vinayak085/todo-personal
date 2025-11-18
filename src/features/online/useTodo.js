import { useQuery } from "@tanstack/react-query";
import { getFilter } from "../../services/apiTodo";
import { useUser } from "../login/useUser";

export function useTodo({search="",filter="all"}){

    const { user } = useUser();

    const {isLoading,data:todo} = useQuery({
        queryKey:["todos",search,filter],
        queryFn:()=>getFilter({
            userId:user.id,
            search,
            filter
        })
    })
    return {isLoading,todo}
}