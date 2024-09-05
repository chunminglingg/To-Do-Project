import React from 'react'
import HabitsContainerTop from './HabitContainers/HabitsContainerTop'
import HabitsConatinerMiddle from './HabitContainers/HabitsContainerMiddle'


const HabitsContainer = () => {
  return (
    <div className='mt-5 bg-white rounded-md p-5 flex flex-col gap-3'>
       <HabitsContainerTop/>
       <HabitsConatinerMiddle/>
    </div>
  )
}

export default HabitsContainer