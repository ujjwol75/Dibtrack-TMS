import { ChatIcon } from '@heroicons/react/outline'
import React from 'react'

type Props = {}

const CardPopupSection6 = (props: Props) => {
  return (
    <>
      <section className='px-4 flex'>
        <div className='w-full'>
          <input className='p-5 font-light w-full'
            placeholder='Comments'
            type="text"
            style={{ outline: "none" }}
          />
        </div>
        <span className='p-4'>
          <ChatIcon className='w-9 h-9 cursor-pointer text-gray-500 hover:text-btncolor' />
        </span>
      </section>
    </>
  )
}

export default CardPopupSection6