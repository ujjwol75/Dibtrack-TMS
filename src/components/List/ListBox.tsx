import React, { Children } from 'react'
import {
  
    InformationCircleIcon,
    CheckIcon,
    ArrowCircleUpIcon
} from "@heroicons/react/solid";
import {
    ArrowCircleDownIcon,
   
    
} from "@heroicons/react/outline";

type Props = {
    children: any
}

const ListBox = (props: Props) => {
    return (
        <>
            <div className='w-[73rem] shadow-2xl h-[12.75rem] m-auto p-2 '>

                <div className='flex justify-between'>
                    <div className='flex '>
                        <ArrowCircleDownIcon className='w-5 h-5 text-sm text-gray-400 font-light mx-2' />
                        <span >List</span>
                        <InformationCircleIcon className='w-4 h-4 m-1 text-sm text-gray-400 font-light mx-2' />
                        <div className='flex'>
                            <div><p className='text-sm text-gray-400 font-light mx-2'>+NEW TASK</p></div>
                            <div><p className='text-sm text-gray-400 font-light mx-2'>ADD DISCRIPTION</p></div>
                            <div><p className='text-sm text-gray-400 font-light mx-2'>ADD COMMENT</p></div>

                        </div>
                    </div>
                    <div>
                        <div className='flex'> <CheckIcon className='w-5 h-5 text-sm text-gray-400 font-light mx-2' /> <p className='text-sm text-gray-400 font-light mx-2'>ADD COMMENT</p> </div>
                    </div>

                </div>
                <hr />


                <div className='mt-[3.25rem] bg-red-600 w-[96.333333%] h-5 mx-auto flex'>
                    <div>
                    <ArrowCircleDownIcon className='w-5 h-5 text-sm text-gray-400 font-light mx-2' />
                    </div>
                    <div className='flex-col'>
                        <div className='flex'>
                            <div className='p-1 bg-gray-600'> <p className='text-sm text-gray-400 font-light '>TO DO</p> </div>
                            <div className='flex'><p className='text-sm text-gray-400 font-light mx-2'>Task</p>< ArrowCircleUpIcon className='w-4 h-4 text-blue-400' /></div>
                        </div>

                    </div>

                </div>


            </div>

        </>
    )
}

export default ListBox