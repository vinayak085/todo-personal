import React from 'react'

function Button({children}) {
  return (
    <button className='bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>{children}</button>
  )
}

export default Button