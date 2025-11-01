
function Login_Form() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white border-gray-200 rounded-md shadow-md p-8 w-[350px]">       
       <h1 className="text-2xl font-semibold ">Login into your account</h1>

        <form>
          <input className="border border-gray-300 bg-gray-50 rounded-sm shadow-sm px-5 py-3" placeholder="Email Address" id="email"/>
          <input className="border border-gray-300 bg-gray-50 rounded-sm shadow-sm px-5 py-3" placeholder="Password" id="password"/>
        </form>

      </div>
    </div>
  )
}

export default Login_Form