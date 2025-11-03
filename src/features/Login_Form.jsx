// import { useState } from "react";
import Button from "../ui/Button"

function Login_Form() {

  // const [isLoading,setIsLoading] = useState(false);

//  if(!isLoading) return 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white border-gray-200 rounded-md shadow-md p-8 w-[350px]">       
       <h1 className="text-2xl font-semibold mb-10">Login into your account</h1>

        <form>
          <input className="input" placeholder="Email Address" id="email"/>
          <input className="input" placeholder="Password" id="password"/>

          <Button>Login</Button>
        </form>
      </div>
    </div>
  )
}

export default Login_Form