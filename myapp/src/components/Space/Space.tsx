import React, { useState } from 'react'
import {
    PlusCircleIcon,
    BookmarkIcon,
    StatusOnlineIcon,
    CalendarIcon,
    FlagIcon
    } from "@heroicons/react/solid";
import SidePopUp from '../../Reusable/SidePopUp/SidePopUp';

type Props = {}

const Space = (props: Props) => {
    const [popUp, setpopUp] = useState(false)
    const showPop= ()=>{
            setpopUp(!popUp)
            console.log('press')
    }
  return (
    // [64.5rem]
    <>
    <div className='flex w-full h-7  border-y-2 border-r-2  border-gray-200 mt-4 space justify-between relative '>
          <div className='w-[64.5rem] h-7 flex'>

            <div className='w-[3rem] h-6   border-r-2 border-gray-200 text-center'>
              <span className='text-gray-400 text-center'>#</span>
            </div>
            <div className='w-[10rem] h-6   border-r-2 border-gray-200'>
              <BookmarkIcon className='h-4 w-4 inline-block '/><span className='text-gray-400 text-sm ml-1'>TASK NAME</span>
            </div>
            <div className='w-[10rem] h-6   border-r-2 border-gray-200'>
              <StatusOnlineIcon className='h-4 w-4 inline-block ml-1 '/>
            <span className='text-gray-400 text-sm ml-2'>STATUS</span>
            </div>
            <div className='w-[10rem] h-6   border-r-2 border-gray-200'>
            <CalendarIcon className='h-4 w-4 inline-block ml-1 '/>
            <span className='text-gray-400 text-sm ml-2'>DUE DATE</span>
            </div>
            <div className='w-[10rem] h-6   border-r-2 border-gray-200'>
              <FlagIcon className='h-4 w-4 inline-block ml-1 '/>
            <span className='text-gray-400 text-sm ml-2'>PRIORITY</span>
            </div>
            


          </div>
          <div className=''>
            <div className='w-[3rem] h-6   border-l-2 border-gray-200 text-center'>
              <PlusCircleIcon className='h-6 w-6 mb-1 inline-block cursor-pointer' onClick={()=>showPop()}/>
            </div>
          </div>
          <div className='absolute right-0 top-9'>

        { popUp && <SidePopUp popUp = {popUp} showPop ={showPop} />}
          </div>
        </div>
        {/* <SidePopUp/> */}
        
    </>
  )
}

export default Space