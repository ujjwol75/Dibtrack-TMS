import { CheckIcon, IdentificationIcon, CalendarIcon, FlagIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'

type Props = {
    
}

const EditTodo = (props: Props) => {
    
    const[userInput,setUserInput] = useState('')
        return (
        <>
            <div className='flex w-[93.333333%] mx-auto h-8 justify-between p-3 shadow-sm mt-1 bg-white  items-center '>
                <div className='flex space-x-2'>
                    <CheckIcon className='w-6 h-6 text-sm text-gray-400 font-light ' />
                    <input className='text-sm text-gray-400 font-light mx-2 w-[52rem] outline-none' value={userInput} onChange={(e)=>{setUserInput(e.target.value)}}/>
                </div>

                <div className='flex  w-[16rem] space-x-1  '>
                    <IdentificationIcon className='ml-[7rem] h-6 w-6 text-sm text-gray-400 font-light  cursor-pointer hover:text-blue-400' />
                    <CalendarIcon className=' h-6 w-6 text-sm text-gray-400 font-light  cursor-pointer hover:text-blue-400' />
                    <FlagIcon className=' h-6 w-6 text-sm text-gray-400 font-light cursor-pointer hover:text-blue-400 ' />
                    <FlagIcon className=' h-6 w-6 text-sm text-gray-400 font-light  cursor-pointer hover:text-blue-400' />
                    <p className='bg-blue-600 px-1 rounded-md cursor-pointer '>Save</p>
                </div>
            </div>
        </>
    )
}

export default EditTodo