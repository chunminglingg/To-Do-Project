import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

import React from 'react'

const HabitsContainerTop = () => {
  return (
    <div className='p-3 flex justify-between items-center'>
        <div className='flex gap-4 items-center'>
            <div>
                <h2 className='font-bold text-lg'>Sunday</h2>
                <span className='font-light text-[12px]'>12 May 2024</span>
            </div>
            {/* ------- */}
            <div className='flex gap-1 ml-4'>
                <div className='text-[#4f46e5] cursor-pointer'>
                    <ArrowCircleLeftOutlinedIcon/>
                </div>
                <div className='text-[#4f46e5] cursor-pointer'>
                    <ArrowCircleRightOutlinedIcon/>
                </div>
            </div>
            {/* ------- */}
        </div>
        {/* ----Button--- */}
        <button className='flex gap-2 p-3 items-center bg-[#4f46e5] text-white rounded-md text-sm'>
            <FontAwesomeIcon icon={faPlus}/>
            <span>New Habit</span>
        </button>
    </div>
  )
}

export default HabitsContainerTop