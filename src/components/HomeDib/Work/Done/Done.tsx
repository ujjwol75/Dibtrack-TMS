import {ArrowDownIcon} from '@heroicons/react/solid'
import React from 'react'

type Props = {}

const Done = (props: Props) => {
  return (
    <>
      <div className='flex-col'>
        <div className='flex justify-between'>
          <div><span>Delecated</span></div>
          <div><span className='text-gray-400'> <ArrowDownIcon className='inline-block w-4 h-4 '/> Date create</span>
          </div>
        </div>
        <div className='w-full border-2 border-gray-200 p-6 text-center my-2'>
        </div>
      </div>
    </>
  )
}

export default Done