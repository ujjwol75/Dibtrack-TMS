import { Popover } from '@headlessui/react'
import { DesktopComputerIcon, EyeOffIcon, StarIcon } from '@heroicons/react/solid'
import React from 'react'

type Props = {}

const SpacePopup = (props: Props) => {
  return (
    <>
      <Popover.Panel className="absolute z-10 bg-white border w-60 p-4 font-normal top-12">
        <div className="grid grid-cols-1">
          <div className='flex flex-row items-center p-2'>
            <span className='pr-4'><DesktopComputerIcon className='h-5 w-5'/></span>
            <span>Automations</span>
          </div>
          <div className='flex flex-row items-center p-2'>
            <span className='pr-4'><EyeOffIcon className='h-5 w-5'/></span>
            <span>Hide in my sidebar</span>
          </div>
          <div className='flex flex-row items-center p-2'>
            <span className='pr-4'><StarIcon className='h-5 w-5'/></span>
            <span>Favourite</span>
          </div>
          <hr/>
                              
          <span className='p-2 pt-4'><i>Limited permission</i></span>
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </>
  )
}

export default SpacePopup