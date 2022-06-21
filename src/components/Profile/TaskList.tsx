import { FlagIcon , ClockIcon, UsersIcon, TrashIcon } from '@heroicons/react/outline'
import { CheckIcon  } from '@heroicons/react/solid'
import React, { useState } from 'react'

type Props = {}

const TaskList = (props: Props) => {
  const [displayIcons,setDisplayIcons] = useState<boolean>(true);
  return (
    <div className=' mt-[40px] py-1 ml-4 mr-5 shadow-lg rounded-md h-auto bg-white 
     outline-black border  border-gray-300 hover:bg-bgsearchbar'>

       <div className="flex flex-row px-2 justify-between"
        onMouseOver={() => setDisplayIcons(true)}
        onMouseLeave = {() => setDisplayIcons(false)}
       >
           <div className='flex flex-row space-x-2 items-center' title = "set to closed items-center">
             <CheckIcon className='h-5 w-5 text-gray-400'/>
             
              <div className="flex flex-col space-y-1 text-xs">
                <div className="flex flex-row space-x-2 text-[11px]">
                <span className='hover:text-btncolor'>google is big</span>
                <span>/</span>
                <span className='hover:text-btncolor'>list</span>
                </div>
                
                <span>task name</span>
              </div>
             <div>
 
             </div>
           </div>
          {displayIcons && (
                 <div className='flex flex-row space-x-3 items-center text-txtcolor'>
                 <span title = "set priority"><FlagIcon className='h-5 w-5' /></span>
                 <span title =" Change Date"><ClockIcon className='h-5 w-5'/></span>
                 <span title = "Delegate"><UsersIcon className='h-5 w-5'/></span>
                 <span title = "Delete"> <TrashIcon className='h-5 w-5 hover:text-red-500' /></span>
            </div>
          )}
          
       </div>
        
    </div>
  )
}

export default TaskList