import { SignIn, SignUp } from '@clerk/nextjs';
import React from 'react'

const SignInPage = () => {
 
  const defaultColor = '#4f46e5';
  const gradientColor = `linear-gradient(to bottom, ${defaultColor}, #c7d2fe`
  return (
    <div 
    style={{background: gradientColor}}
    className='flex justify-center items-center flex-col gap-10 w-full h-screen'
    >
        <SignUp/>
    </div>
  )
}

export default SignInPage