import {CloudIcon} from '@heroicons/react/outline'
import React, { useState } from 'react'

type Props = {}


const CardPopupSection5 = (props: Props) => {
  
  return (
    <>
      <section className='p-4 text-center flex justify-center items-center gap-3'>
        <CloudIcon className='text-gray-500 hover:text-btncolor w-9 h-7'/>
        <input type="file" className='text-btncolor'/>
      </section>
    </>
  )
}

export default CardPopupSection5