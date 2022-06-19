import {Popover} from '@headlessui/react'
import {ChevronRightIcon} from '@heroicons/react/solid'
import React from 'react'

type Props = {}

const Show = (props: Props) => {
  return (
    <>
      <Popover.Panel className="absolute shadow-2xl bg-white show z-10 border w-60 p-4">
        <div className="grid grid-cols-1">
          <div className='text-left'>
            <span className='text-gray-500'>SHOW</span>
          </div>
          <div className='flex flex-row text-left py-2 justify-between items-center'>
            <span>Columns</span>
            <span><ChevronRightIcon className='h-5 w-5'/></span>
          </div>
          <div className='flex flex-row text-left justify-between items-center'>
            <span>Task locations</span>
            <span></span>
          </div>
          <div className='flex flex-row text-left py-2 justify-between items-center'>
            <span>Subtasks parent names</span>
            <span></span>
          </div>
          <hr/>
          <div className='flex flex-row text-left py-2 justify-between items-center'>
            <span>Closed task</span>
            <span></span>
          </div>
          <div className='flex flex-row text-left py-2 justify-between items-center'>
            <span>Closed Subtasks</span>
            <span></span>
          </div>
          <div className='flex flex-row text-left py-2 justify-between items-center'>
            <span>Tasks in multiple List</span>
            <span></span>
          </div>
          <hr/>
          <div className='flex flex-row text-left py-2 justify-between items-center'>
            <span>Empty status</span>
            <span></span>
          </div>
          <div className='flex flex-row text-left py-2 justify-between items-center'>
            <span>Auto-wrap</span>
            <span></span>
          </div>
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </>
  )
}

export default Show