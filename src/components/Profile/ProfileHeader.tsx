import {PencilIcon} from '@heroicons/react/solid'
import React, {useState} from 'react'
import CircleUserIcon from '../../Reusable/CircleUserIcon'
import ProfileDropdown from './ProfileDropdown'
import {currentTime} from '../../utils/formattedTime'

type Props = {
  user: any
}


const ProfileHeader = ({user}: Props) => {
  const [enable, setEnable] = useState<boolean>(false)
  


  return (
    <div>
      <div className="flex flex-row w-full h-[100px]  px-2 justify-between">
        <div className='flex flex-row'>
          <div className='flex justify-center items-center '>
            <CircleUserIcon size="lg"/>
          </div>
          <div className='ml-2 justify-center items-center mt-5'>
            <ProfileDropdown user={user}/>
            <div className='flex flex-row mt-2  text-xs text-gray-400'>
              <span className=' adddescription hover:bg-bgsearchbar'>
               {enable ? (
                 <input
                   type="text"
                   className="focus:outline-none p-1 bg-white hover:bg-bgsearchbar"
                   placeholder='add description'
                 />
               ) : (
                 <input
                   type="text"
                   className="focus:outline-none p-1 bg-white hover:bg-bgsearchbar"
                   placeholder='add description . . .'
                   disabled
                 />
               )}
                <PencilIcon
                  className='edit h-3 w-3 text-gray-300 absolute right-2 bottom-2 cursor-pointer invisible'
                  onClick={() => setEnable(true)}/>
              </span>
              <p className='ml-2 text-gray-500'>{user.email}</p>
              <p className='ml-4 text-gray-500'>{currentTime()}</p>
            </div>
          </div>
        </div>
        <div className='flex jutify-cener items-center'>
           <span className='text-green-400 text-sm bg-bgsearchbar px-2 py-1 rounded'>
               online
           </span>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader