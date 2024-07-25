import React from 'react'

const NavBar = () => {
  return (
    <div className='flex flex-row justify-between w-[90%] m-auto pt-4 items-center text-xl'>
        {/* Logo & Name */}
        {/* ..................................................................... */}
        <div>
            <p className='font-semibold'>To do <span className='text-[#4f46e5]'>List</span></p>
        </div>

        {/* Sign up / Login Button */}
        {/* ..................................................................... */}
        <div className='flex gap-2'>
            <button className='bg-[#4f46e5] hover:bg-[#6366f1] focus:ring-2 focus:ring-[#4338ca] font-medium rounded-lg text-white text-sm px-5 py-2.5 me-2 mb-2 shadow-md shadow-indigo-200'>Sign In</button>
            <button className='text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-2 focus:ring-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 shadow-md shadow-indigo-100'>Sign Up</button>
        </div>
    </div>
  )
}

export default NavBar