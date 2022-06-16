import { TagIcon } from '@heroicons/react/outline'
import React from 'react'

type Props = {}

const CardPopupSection3 = (props: Props) => {
  return (
    <>
      <section className='p-4 space-y-4'>
        <div className='flex space-x-3 items-center text-sm'>
          <span className='bg-yellow-300 text-yellow-600 px-2 rounded-r-full cursor-pointer' >
            sample tags A
          </span>
          <span className='bg-blue-300 text-blue-600 px-2 rounded-r-full cursor-pointer'>
            sample tags B
          </span>
          <span className='p-1 h-fit border-2 border-dashed rounded-full hover:text-btncolor hover:border-btncolor cursor-pointer'>
            <TagIcon className='w-6 h-6' />
          </span>
        </div>

        <input className='border hover:border-gray-500 text-4xl p-5 font-light w-full'
          value={"Tasks"}
          style={{ outline: "none" }}
          onChange={() => { }}
        />

        <textarea className=' border hover:border-gray-500 text-xl p-3 font-light w-full '
          value={"Task Description"}
          style={{ outline: "none" }}
          rows={5}
          onChange={() => { }}
        />

      </section>
    </>
  )
}

export default CardPopupSection3