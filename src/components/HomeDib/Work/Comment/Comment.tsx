import React from 'react'

type Props = {}

const Comment = (props: Props) => {
    return (
        <>
            <div className='w-full border-2 border-gray-200 p-6 text-center my-2'>
                <div className='flex justify-center'>

                    <img src="/logo192.png" alt="" />
                </div>
                <p className='text-2xl'>Woohoo, Inbox zero!</p>
                <p  className='text-sm'>You have no assigned comments</p>
               

            </div>

        </>
    )
}

export default Comment