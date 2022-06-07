import React, { Fragment, useState } from 'react';
import {MenuAlt2Icon} from '@heroicons/react/solid';
import Tasks from './Tasks';


type Props = {}



const CalendarRightBar = (props: Props) => {
  const [openTask, setOpenTask] = useState(false)

  function handleBar(){
    setOpenTask(true)
    
  }
  return (
    !openTask ? (
    <div className='flex flex-col'>

        <div className='m-8'><MenuAlt2Icon className='w-7 cursor-pointer' onClick={handleBar}/></div>
        <div className='-rotate-90 mt-4 mb-2'>Unscheduled</div>
        <div className='-rotate-90 mt-6 '>0</div>
        
        <div className='-rotate-90 mt-8'>Overdue</div>
        <div className='-rotate-90 mt-4'>2</div>

        
    </div> ) : <Tasks />
  )
}

export default CalendarRightBar