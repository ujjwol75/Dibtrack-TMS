import React from 'react'
import { Menu } from '@headlessui/react'
import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid'
import CircleUserIcon from '../../Reusable/CircleUserIcon'

type Props = {
    user:any
}

const ProfileDropdown = ({user}: Props) => {
  return (
    <>
       <Menu>
           <Menu.Button>
           <div className='flex flex-row hover:bg-bgsearchbar w-[60px]'>
                  <span className='p-1'>{user.name}</span>
                  <ChevronDownIcon className='h-6 w-6 text-gray-500 mt-1' />
             </div>
               
           </Menu.Button>
           <Menu.Items>
           <div className =" h-[300px] w-[285px] absolute bg-white opacity-100 shadow-lg z-100">
               <Menu.Item>
                   <>
                   
                   <div className='w-full relative border-b border-gray-300' >
                       <input type = "text" className='bg-white w-full py-2 px-2 pl-20 focus:outline-none'  placeholder='search'/>
                           
                           
                            <SearchIcon className='h-4 w-5 absolute left-4 bottom-3' />

                       
                   </div>

                   <div className="flex flex-row bg-bgsearchbar px-2 py-2">
                       <CircleUserIcon size = "xs" />
                       <span className='ml-3'>me</span>
                   </div>

                </>
                    
                </Menu.Item>   
            </div> 
            </Menu.Items>
       </Menu>
    </>
  )
}

export default ProfileDropdown