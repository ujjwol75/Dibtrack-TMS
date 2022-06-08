import { DotsHorizontalIcon, ShareIcon } from '@heroicons/react/outline'
import { CheckIcon } from '@heroicons/react/solid'
import React from 'react'

type Props = {}

const CardPopupSection1 = (props: Props) => {
  return (
    <>
      <section className='p-4 w-full flex items-center  justify-between'>

        <section className='flex items-center space-x-5'>
          {/* Button */}
          <span className='p-2 px-6 bg-orange-500 border hover:border-orange-500 rounded text-white divide-x divide-white'>
            <button className='mr-2'>Progress</button>
            <span className='pl-1'>F</span>
          </span>

          {/* CHECK ICON */}
          <span className='h-fit p-1 border hover:border-green-600 hover:text-green-600 '>
            <CheckIcon className='w-5 h-5 ' />
          </span>

          <span>
            users
          </span>

          <span>
            priority
          </span>
        </section>

        <section className='flex space-x-5 items-center'>
          <span className='border p-1 flex space-x-1 rounded '>
            <ShareIcon className='w-4 h-4 ' />
            <span className='text-xs'>Share</span>
          </span>

          <DotsHorizontalIcon
            className='w-8 h-8 hover:text-btncolor cursor-pointer'
            onClick={() => { }}
          />
        </section>
      </section>
    </>
  )
}

export default CardPopupSection1