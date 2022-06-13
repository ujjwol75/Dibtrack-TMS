import React, { useState } from 'react'
import { CalendarIcon, FlagIcon, AtSymbolIcon, InformationCircleIcon } from '@heroicons/react/solid'
import Work from './Work/Work'
import Tasks from '../dashboard/Tasks'
import Task_popover from '../dashboard/Task_popover'

type Props = {}

const HomeDib = (props: Props) => {
  const [task, setTask] = useState(false)
  return (
    <>
      <div className='relative'>
        <div className="h-[3.5rem] w-full border-b-2 border-gray-200  flex justify-between">
          <div className="flex ">


            <p className="p-2 my-auto">Home </p>

          </div>
          <div className="flex">
            <div>
              <p className="p-4 my-auto"><FlagIcon className='h-6 w-6 inline-block mb-2' /> Calender</p>

            </div>
            <div>
              <p className="p-4 my-auto"><CalendarIcon className='h-6 w-6 inline-block mb-2' /> Calender</p>

            </div>
            <div>
              <p className="p-4 my-auto"><AtSymbolIcon className='h-6 w-6 inline-block mb-2' /> Calender</p>

            </div>


          </div>

        </div>
        <div className='w-full  flex '>
          {/* left */}
          <div className='w-3/5 p-4 flex-col border-r-2  border-gray-200'>
            <div>
              <p className='text-2xl '>LineUp<InformationCircleIcon className='w-4 h-4 inline-block text-gray-400 ' /><span className='text-gray-400 text-lg ml-1'>(0)</span></p>
            </div>
            <div className='flex justify-center w-full my-6 mx-4 bg-slate-100 p-1'>
              <div className="border-dashed w-full border-2 border-gray-600 hover:border-blue-400 flex justify-center p-2">
                <p className='text-xs text-gray-400'>+ Add Your Most Important task</p>
              </div>
            </div>
            <div>
              <p className='text-2xl '>Trending<InformationCircleIcon className='w-4 h-4 inline-block text-gray-400 ' /><span className='text-gray-400 text-lg ml-1'>(0)</span></p>
            </div>
            <div className='flex justify-center w-full my-4 mx-4  p-1'>
              <div className="w-full border-2 border-gray-400  flex justify-center p-2">
                <p className='text-xs text-gray-400'>+ Add Your Most Important task</p>
              </div>
            </div>

            <Work />

          </div>

          {/* right */}
          <div className='w-2/5 p-4'>ffsdfdfffa</div>

        </div>
        <div className='absolute button-1 right-0'>

          <Task_popover />
        </div>
      </div>
    </>
  )
}

export default HomeDib