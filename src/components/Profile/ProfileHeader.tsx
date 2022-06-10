import { ChevronUpIcon, UserCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import CircleUserIcon from '../../Reusable/CircleUserIcon'

type Props = {}

const ProfileHeader = (props: Props) => {
  return (
    <div>
       <div className="flex flex-row w-full h-[100px] shadow px-3 ">
           <div className='flex justify-center items-center '>
               <CircleUserIcon size = "lg" />
           </div>
           <div className='ml-2 flex justify-center items-center'>
               <div className='flex flex-row'>
                  <span>punya dahal</span>
                  <ChevronUpIcon className='h-5 w-5 text-gray-500' />
               </div>
               <div></div>
           </div>
           <div></div>
       </div>
    </div>
  )
}

export default ProfileHeader