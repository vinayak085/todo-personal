import React from 'react'

function Button({type="button",children}) {
  return (
    <button type={type} className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">{children}</button>
  )
}

export default Button