import React, { useState } from 'react';
import {SearchIcon} from '@heroicons/react/solid'
import CalendarRightBar from './CalendarRightBar';

type Props = {}

const Tasks = (props: Props) => {
    const [hide, setHide] = useState(false)

    function handleHide(){
        setHide(true)
    }
  return (
      !hide ? (
      <>
      <div className='flex flex-col'>
        <div className='flex flex-row w-[12rem] text-center justify-between m-8'>
                <div><h1>Tasks</h1></div>
                <div className='flex flex-row'>
                    <SearchIcon className='w-5 hover:bg-gray-300 mr-3 text-gray-500 hover:text-red-600 cursor-pointer'/>
                    <p className='hover:bg-gray-300 text-gray-500 hover:text-red-600 cursor-pointer' onClick={handleHide}>Hide</p>
                </div>
                
        </div>
        <div className='flex flex-row m-3'>
            <p className='text-sm mr-3'>Unscheduled</p>
            <p className='text-sm'>Overdue</p>
        </div>
        <hr />

        <div className='flex flex-row justify-between m-3'>
            <p className='text-sm'>Sort by Status</p>
            <p className='text-sm'>0 tasks</p>
        </div>
        </div>
      </> ) : <CalendarRightBar />

  )
}


export default Tasks