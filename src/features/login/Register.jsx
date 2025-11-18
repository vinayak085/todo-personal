import { useForm } from "react-hook-form"
import { useSignup } from "./useSignup"
import { Link } from "react-router-dom";


function Register() {

const {register,reset,handleSubmit: rhfHandleSubmit, formState: { errors }} = useForm();
const {signup,isLoading} = useSignup();

function onSubmit({email,password}){
 signup({email,password},{
  onSettled:reset(),
 })  
}

  return (

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


    <div className="flex-1 flex justify-center items-center bg-white">
      <div className="w-full max-w-sm px-6 py-10">
        <h2 className="text-2xl font-semibold text-gray-900">Register your account</h2>
        <p className="text-gray-500 mb-6">Please enter your detail</p>

    <form className="space-y-4" onSubmit={rhfHandleSubmit(onSubmit)}>

          <div>
          {/* For email purpose  */}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Add your email..
            </label>
            <input type="email"
            {...register('email',{required: "this field is required",
              pattern:{
                value:/\S+@\S+\.\S+/,
                message:"please provide valid email"
              }
            })}
            className="w-full border border-gray-300 rounded-b-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            </div>

             {/*For Password ui and that logic  */}
             <div>
             <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input type="password"
             {...register('password',{required : "This field is required",
             minLength:{
             value:8,
             message:"Password needs a minimum 8 charcters"
         }
        })}
            className="w-full border border-gray-300 rounded-b-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

             <p className="text-sm text-blue-500">
               Have an account?
                  <Link
                  to="/"
                  className="text-blue-700 font-semibold hover:underline ml-1"
                  >
                  Login
                  </Link>

              </p>

            <button
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition mt-10"
             disabled={isLoading}>{isLoading ? "creating.." : "Register"}</button>
     </div>
            </form>
            </div>
            </div>
            </div>
  )
}

export default Register