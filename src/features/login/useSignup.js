import { useMutation } from "@tanstack/react-query";
import { signup as signupApi} from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup(){

    const {mutate:signup,isLoading} = useMutation({
        mutationFn:signupApi,
        onSuccess:(user)=>{
           console.log(user);
           toast.success("Account registered successfully")
        },
        onError: (error) => {
       console.log(error);
       toast.error(error.message || "Failed to register");
  },
    })
    return {signup,isLoading}
}