import {Popover} from '@headlessui/react'
import {CheckIcon} from '@heroicons/react/solid'
import React from 'react'

type Props = {
  element: any
}

const DropUp = (props: Props) => {
  return (
    <>
      <Popover className="relative">
        <Popover.Button className='px-2  text-sm  '>{props.element}</Popover.Button>
        <Popover.Panel className="absolute z-11 w-[12rem] bg-white top-[-12rem] left-[-6rem] shadow-lg ">
          <div className='flex-col mt-2 space-y-2 p-1 '>
            <p className='cursor-pointer text-sm px-2'><CheckIcon className='h-5 w-5 inline-block mr-1'/>Upload file
            </p>
            <p className='cursor-pointer text-sm px-2'><CheckIcon className='h-5 w-5 inline-block mr-1'/>Dropbox</p>
            <p className='cursor-pointer text-sm px-2'><CheckIcon className='h-5 w-5 inline-block mr-1'/>oneDrive</p>
            <p className='cursor-pointer text-sm px-2'><CheckIcon className='h-5 w-5 inline-block mr-1'/>Box</p>
            <p className='cursor-pointer text-sm px-2'><CheckIcon className='h-5 w-5 inline-block mr-1'/>Google Pulse
            </p>
            <p className='cursor-pointer text-sm px-2'><CheckIcon className='h-5 w-5 inline-block mr-1'/>New Google
              Doc</p>
          </div>
          <img src="/solutions.jpg" alt=""/>
        </Popover.Panel>
      </Popover>
    </>
  )
}

export default DropUp