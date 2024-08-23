"use client"
import { SignOutButton, useUser } from '@clerk/nextjs'
import React from 'react'

const Dashbaord = () => {
    const { user } = useUser()
  return (
    <div>
        Hello , {user?.lastName} <SignOutButton>Sign out</SignOutButton>
    </div>
  )
}

export default Dashbaord