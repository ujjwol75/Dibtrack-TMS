import React from 'react'

type Props = {}

const UserInfoPopup = (props: Props) => {
  return (
    <div className='shadow-lg rounded-lg p-6 bg-slate-100'>
      <section className='flex justify-between gap-x-5'>
        <span className='px-8 py-7 text-3xl bg-green-500 rounded-full text-white'>
          SS
        </span>
        <p className='text-green-300'>Online</p>
      </section>
      <br />
      <div>
        <p className='text-lg'>
          Shasank Shakya
        </p>
      </div>
    </div>
  )
}

export default UserInfoPopup