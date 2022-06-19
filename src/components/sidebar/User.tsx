import React from 'react'
import {QuestionMarkCircleIcon, UserAddIcon} from "@heroicons/react/solid";
import UserModal from './UserModal';

type Props = {}

const User = (props: Props) => {
  return (
    <div className="h-[50px] border  w-full overflow-hidden  border-gray-300  bg-white opacity-100  p-1">
      <div className="flex flex-row justify-between cursor-pointer">
        <UserModal/>
        <div className="flex flex-row text-xs mt-2 text-gray-500">
          <UserAddIcon className='bg-bgsearchbar text-red h-4 w-4 mr-2'/>
          <p className='bg-bgsearchbar mr-2'>upgrade</p>
          <QuestionMarkCircleIcon className='h-5 w-5 hover:text-gray-700'/>
        </div>
      </div>

    </div>
  )
}

export default User