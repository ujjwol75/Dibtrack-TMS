import { Popover } from '@headlessui/react'
import { ViewListIcon, ViewBoardsIcon, CalendarIcon, AdjustmentsIcon, MenuAlt1Icon, TableIcon, MapIcon, PencilIcon, TrendingUpIcon, NewspaperIcon, ChatIcon, CodeIcon, MenuAlt4Icon } from '@heroicons/react/solid'
import React from 'react'


type Props = {}

const View = (props: Props) => {
  return (
    <>
      <Popover.Panel className="view bg-white absolute z-10 border mt-10 w-96 p-4">
        <div className="grid grid-cols-1">
            <div>
                <span className='text-gray-400'>TASK VIEWS</span>
            </div>
            <div className='flex flex-row items-center py-2'>
                <span><ViewListIcon className='h-5 w-5'/></span>
                <span>List</span>
            </div>
            <div className='flex flex-row items-center py-2'>
                <span><ViewBoardsIcon className='h-5 w-5'/></span>
                <span>Boards</span>
            </div>
            <div className='flex flex-row items-center py-2'>
                <span><CalendarIcon className='h-5 w-5'/></span>
                <span>Calender</span>
            </div>
            <hr/>
            <div className='flex flex-row items-center py-2'>
                <span><AdjustmentsIcon className='h-5 w-5'/></span>
                <span>Gantt</span>
            </div>
            <div className='flex flex-row items-center py-2'>
                <span><MenuAlt1Icon className='h-5 w-5'/></span>
                <span>TimeLine</span>
            </div>
            <div className='flex flex-row items-center py-2'>
                <span><ViewBoardsIcon className='h-5 w-5'/></span>
                <span>Box</span>
            </div>
            <div className='flex flex-row items-center py-2'>
                <span><TableIcon className='h-5 w-5'/></span>
                <span>Table</span>
            </div>
            <div className='flex flex-row items-center py-2'>
                <span><MapIcon className='h-5 w-5'/></span>
                <span>Mind Map</span>
            </div>
            <div className='flex flex-row items-center py-2'>
                <span><PencilIcon className='h-5 w-5'/></span>
                <span>Workload</span>
            </div>
            <div className='flex flex-row items-center py-2'>
                <span><TrendingUpIcon className='h-5 w-5'/></span>
                <span>Activity</span>
            </div>
            <div className='flex flex-row items-center py-2'>
                <span><MapIcon className='h-5 w-5'/></span>
                <span>Map</span>
            </div>
            <div className='py-2'>
                <span className='text-gray-400'>PAGE VIEWS</span>
            </div>
            <div className='flex flex-row items-center py-2'>
                <span><ViewBoardsIcon className='h-5 w-5'/></span>
                <span>Whiteboard</span>
            </div>
            <div className='flex flex-row items-center py-2'>
                <span><NewspaperIcon className='h-5 w-5'/></span>
                <span>DOC</span>
            </div>
            <div className='flex flex-row items-center py-2'>
                <span><ChatIcon className='h-5 w-5'/></span>
                <span>Chat</span>
            </div>
            <div className='flex flex-row items-center py-2'>
                <span><CodeIcon className='h-5 w-5'/></span>
                <span>Embed</span>
            </div>
            <div className='flex flex-row items-center py-2'>
                <span><MenuAlt4Icon className='h-5 w-5'/></span>
                <span>Form</span>
            </div>
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </>
  )
}

export default View