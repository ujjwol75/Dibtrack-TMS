import { ClockIcon, MailIcon } from '@heroicons/react/outline'
import React from 'react'

type Props = {}

const UserInfoPopup = (props: Props) => {
  return (
    <div className='shadow-lg rounded-lg p-6 bg-slate-100'>
      <section className='flex justify-between gap-x-7'>
        <span className='px-8 py-7 text-3xl bg-green-500 rounded-full text-white'>
          SS
        </span>
        <p className='text-green-600 px-1 bg-gray-300 h-fit'>Online</p>
      </section>
      <br />
      <div className='space-y-3'>
        <p className='text-xl'>
          Shasank Shakya
        </p>
        <span className='flex items-center'>
          <MailIcon className='w-4 h-4' /> &nbsp; &nbsp;
          <p className='text-sm text-gray-500'>shasank@gmail.com</p>
        </span>
        <span className='flex items-center'>
          <ClockIcon className='w-4 h-4' /> &nbsp; &nbsp;
          <p className='text-sm'>June 8, 2022</p>
        </span>
        <div className='px-4 py-2 rounded border hover:shadow-lg text-center cursor-pointer bg-white'>
          View Profile
        </div>
      </div>
    </div>
  )
}

export default UserInfoPopup