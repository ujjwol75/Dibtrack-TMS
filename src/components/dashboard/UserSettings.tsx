import { ClipboardCopyIcon, DotsHorizontalIcon, DuplicateIcon } from '@heroicons/react/solid'
import React from 'react'
import { Menu } from '@headlessui/react'
type Props = {
  id:number
}

const UserSettings = ({id}: Props) => {
  return (
    <div>
        <Menu>
            <Menu.Button>
            <DotsHorizontalIcon className="h-6 w-6 text-gray-400 hover:text-btncolor" />
            </Menu.Button>
            <Menu.Items >
                <div className = "h-[40px] w-[200px] shadow shadow-lg absolute px-4 py-[12px] bg-white opacity-100 rounded-md right-2">
                <Menu.Item>
                    <span className='text-sm flex flex-row cursor-pointer ' onClick={() => navigator.clipboard.writeText(id.toString())}>
                        <DuplicateIcon className='h-5 w-5 text-gray-500 mr-3' />
                        <p>
                        copy Member Id</p> 
                        
                        </span>
                </Menu.Item>
                </div>
               
            </Menu.Items>
        </Menu>
        
    </div>
  )
}

export default UserSettings