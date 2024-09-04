"use client"
import SideBar from '@/components/side-bar/SideBar'
import { SignOutButton, useUser } from '@clerk/nextjs'
import React from 'react'

const Dashbaord = () => {
    const { user } = useUser()
  return (
    <>
      <SideBar></SideBar>
    </>
  )
}

export default Dashbaord