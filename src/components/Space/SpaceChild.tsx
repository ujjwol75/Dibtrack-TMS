import { DotsCircleHorizontalIcon, DotsHorizontalIcon } from '@heroicons/react/solid'
import React from 'react'
import { Menu } from '@headlessui/react'
import SpaceDropdown from '../sidebar/SpaceDropdown'

type Props = {
  spaceChildren?:any
}

const SpaceChild = (props: Props) => {
  const {spaceChildren} = props
  return (
    <div className='flex flex-col ml-4 justify-between hover:bg-bgsearchbar p-1'>
      {spaceChildren?.map((item: any) => (
        <div className="flex flex-row  p-1 justify-between">
        <div className="flex flex-row  p-1">
            <DotsCircleHorizontalIcon className='h-3 w-3 text-gray-500 mt-1'/>
            <span className='ml-2 text-sm text-txtcolor'>{item?.name}</span>
        </div>
        <div>
            <Menu>
                <Menu.Button>
                <DotsHorizontalIcon className='h-6 w-5 mr-2 hover:text-blue-500 '/>
                </Menu.Button>
                <Menu.Items>
                <SpaceDropdown/>
                </Menu.Items>
            </Menu>
        
        </div>
        </div>
      ))}
    </div>
  )
}

export default SpaceChild