import { useMutation, useQueryClient } from "@tanstack/react-query";
import {  useNavigate } from "react-router-dom";
import { login as loginApi} from "../../services/apiAuth";
import toast from "react-hot-toast";

 
export function useLogin(){

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {mutate:login,isLoading} = useMutation({
      mutationFn:({email,password})=>loginApi({
        email,password}),
        onSuccess:(user)=>
      {
        toast.success("successfully entered ")
        queryClient.setQueryData(["user"],user);
        navigate('/main',{replace:true});
      },
      onError:(err)=>{
        console.log(err);
        toast.error("invalid credentials")
      }
    })

    return {isLoading,login}
}