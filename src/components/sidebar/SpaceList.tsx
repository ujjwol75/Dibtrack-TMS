import { Menu } from '@headlessui/react'
import { DotsHorizontalIcon } from '@heroicons/react/outline'
import { ChevronLeftIcon, PlusIcon, UserAddIcon } from '@heroicons/react/solid'
import React from 'react'
import CircleUserIcon from '../../Reusable/CircleUserIcon'
import SpaceDropdown from './SpaceDropdown'
import SpacePlusTab from './SpacePlusTab'
import { Disclosure } from '@headlessui/react'
import SpaceChild from '../Space/SpaceChild'
const  spaces = [
    'space1' , 
    'space2',
    'space3'
]

type Props = {}

const SpaceList = (props: Props) => {
  return (
    
    <div className='flex flex-col'>
      
        {spaces.map((space) => (
          <Disclosure>
          <>
          <Disclosure.Button>
           <div className='flex flex-row hover:bg-bgsearchbar justify-between p-1 spaceitem'>
                <div className='flex flex-row justify-center items-center'>
                   <ChevronLeftIcon className='h-3 w-3 text-gray-400 mr-2' />
                   <CircleUserIcon size = "xs"/>
                   <span className='ml-2 text-xs'>{space}</span>
                </div>
                <div className='flex flex-row justify-center items-center text-gray-400 threeicons invisible'>
                    <Menu>
                        <Menu.Button>
                        <DotsHorizontalIcon className='h-6 w-5 mr-2 hover:text-blue-500'/>
                        </Menu.Button>
                        <Menu.Items>
                            <SpaceDropdown/>
                      </Menu.Items>
                    </Menu>
                    
                    <Menu>
                        <Menu.Button>
                        <PlusIcon className = "h-4 w-4 mr-2 hover:text-blue-500" />
                        </Menu.Button>
                        <Menu.Items>
                          <SpacePlusTab />
                        </Menu.Items>
                    </Menu>
                    
                    <UserAddIcon className='h-4 w-4 mr-2 hover:text-blue-500'/>
                </div>
           </div> 
           </Disclosure.Button>
           <Disclosure.Panel>
             <SpaceChild />
           </Disclosure.Panel>
           </>
           </Disclosure>
        ))}
        
    </div>
  )
}

export default SpaceList