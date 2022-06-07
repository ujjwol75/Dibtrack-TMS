import React, { useState } from 'react'
import {
    PlusCircleIcon,
    BookmarkIcon,
    StatusOnlineIcon,
    CalendarIcon,
    FlagIcon
    } from "@heroicons/react/solid";
import SidePopUp from '../../Reusable/SidePopUp/SidePopUp';
import SpaceTable from './SpaceTable';

type Props = {}

const Space = (props: Props) => {
    const [popUp, setpopUp] = useState(false)
    const showPop= ()=>{
            setpopUp(!popUp)
            console.log('press')
    }
  return (
   
    <>
   
        <div className='flex justify-between relative'>
          <SpaceTable/>
          <div className='w-[3rem] h-6   border-gray-200 text-center'>
              <PlusCircleIcon className='h-6 w-6 mb-1 inline-block cursor-pointer' onClick={()=>showPop()}/>
            </div>
            <div className='absolute right-4 top-9'>

        { popUp && <SidePopUp popUp = {popUp} showPop ={showPop} />}
          </div>

        </div>
        
    </>
  )
}

export default Space