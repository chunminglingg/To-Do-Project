import React from 'react'
import { Button } from '../button'

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
            <Button>Sign In</Button>
            <Button colorScheme='Secondary'>Sign Up</Button>
        </div>
    </div>
  )
}

export default NavBar