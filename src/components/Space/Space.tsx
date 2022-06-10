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
import MidBox from '../../Reusable/BoxLayout/MidBox';

type Props = {}

const Space = (props: Props) => {
    const [popUp, setpopUp] = useState(false)
    const[box,setbox] = useState(false)
    const showPop= ()=>{
            setpopUp(!popUp)
            console.log('press')
    }
  return (
   
    <>
   
        <div className='flex justify-between relative h-screen'>
          <SpaceTable/>
          <div className='w-[3rem] h-6   border-gray-200 text-center'>
              <PlusCircleIcon className='h-6 w-6 mb-1 inline-block cursor-pointer' onClick={()=>showPop()}/>
            </div>
            <div className='absolute right-4 top-9'>

        { popUp && <SidePopUp  showPop ={setpopUp} popUp = {popUp} setbox ={setbox} box ={box}/>}
          </div>
        <div className='absolute right-[6rem] top-[6.5rem]'>

        { box && <MidBox  setBox={setbox} /> }
        </div>

        </div>
        
        
    </>
  )
}

export default Space