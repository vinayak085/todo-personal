// import { useState } from "react";
// import { useNavigate } from "react-router-dom"
import Button from "../ui/Button"

function Login_Form() {

  // const [isLoading,setIsLoading] = useState(false);

//  if(!isLoading) return 

//  const navigate = useNavigate();
   
 

  return (

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* I have made this using next if nothing is work
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

    // <div className="flex items-center justify-center min-h-screen bg-gray-50">
    //   <div className="bg-white border-gray-200 rounded-md shadow-md p-8 w-[350px]">       
    //    <h1 className="text-2xl font-semibold mb-10">Login into your account</h1>

    //     <form>
    //       <input className="input" placeholder="Email Address" id="email"/>
    //       <input className="input" placeholder="Password" id="password"/>

    //       <Button>Login</Button>
    //     </form>
    //   </div>
    // </div>


    <div className="min-h-screen flex flex-col md:flex-row">
  {/* left section area */}
      <div className="bg-yellow-400 flex flex-col justify-center items-center py-6 md:py-0 md:w-1/2">
        <h1 className="text-3xl font-bold text-black flex items-center">
          Todo<span className="text-white">List</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-1 fill-black"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </h1>
      </div>

    {/* right section area (form area) */}
     <div className="flex-1 flex justify-center items-center bg-white">
      <div className="w-full max-w-sm px-6 py-10">
        <h2 className="text-2xl font-semibold text-gray-900">Welcome Back</h2>
        <p className="text-gray-500 mb-6">Please enter your detail</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input type="email"
            className="w-full border border-gray-300 rounded-b-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            </div>
             
             <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input type="password"
            className="w-full border border-gray-300 rounded-b-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            </div>

            <Button type="submit">Sign in</Button>
            <button className="w-full bg-white text-black py-0 rounded-md justify-center items-center gap-2 hover:bg-gray-500 transition cursor-pointer">
             <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              sign in with google 
            </button>

            <button className="w-full bg-white text-black py-2 rounded-md hover:bg-yellow-500 transition cursor-pointer">
              Guest mode</button>

        </form>
      </div>
     </div>
    </div>
  )
}

export default Login_Form