"use client"
import { AllHabit } from '@/components/pages/all-habits/AllHabits'
import { Areas } from '@/components/pages/areas/Areas'
import { Statistics } from '@/components/pages/statistics/Statistics'
import SideBar from '@/components/side-bar/SideBar'
import { menuItemType } from '@/types/MenuItemType'
import { useGlobalContextProvider } from '@/utils/contextApi'
import { SignOutButton, useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'

const Dashbaord = () => {
  const { menuItemsObject} = useGlobalContextProvider()
  const { menuItems} = menuItemsObject;

  const [selectMenu , setSelectMenu] = useState<menuItemType|null>(null)
  let selectComponent = null;

  useEffect(() => {
    menuItems.map((singleItems)=> {
      if(singleItems.isSelected) {
        setSelectMenu(singleItems)
      }
    })
  } ,[menuItems])

  switch (selectMenu?.name) {
    case "All Habits":
      selectComponent = <AllHabit/>
      break;
    case "Areas":
      selectComponent = <Areas/>
      break;
    case "Statistics":
      selectComponent = <Statistics/>
      break;
    case "All Areas":
      break;

  }
  return (
    <>
      <div className='flex bg-slate-50'>
        <SideBar/>
       {selectComponent}
      </div>
    </>
  )
}

export default Dashbaord