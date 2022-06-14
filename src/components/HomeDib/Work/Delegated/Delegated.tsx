import React from 'react'
import {ArrowDownIcon} from '@heroicons/react/solid'

type Props = {}

const Delegated = (props: Props) => {
    return (
        <>
            <div className='flex-col'>
                <div className='flex justify-between'>
                    <div><span>Delecated</span></div>
                    <div><span className='text-gray-400'> <ArrowDownIcon className='inline-block w-4 h-4 '/> Date create</span></div>

                </div>

                <div className='w-full border-2 border-gray-200 p-6 text-center my-2'>
                    <div className='flex justify-center'>

                        <img src="/logo192.png" alt="" />
                    </div>
                    <p className='text-2xl'>Woohoo, Inbox zero!</p>
                    <p className='text-sm'>You have no assigned comments</p>


                </div>
            </div>
        </>
    )
}

export default Delegated