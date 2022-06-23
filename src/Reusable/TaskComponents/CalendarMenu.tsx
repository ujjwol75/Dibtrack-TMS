import { CalendarIcon } from '@heroicons/react/outline'
import React, { useEffect, useRef, useState } from 'react'

type Props = {}

const CalendarMenu = (props: Props) => {

  return (
    <>
      <input type="date"
        className='bg-transparent w-9 h-9 text-xl mt-1 p-1  border-2 border-dashed rounded-full outline-none  stroke-gray-400 hover:text-btncolor hover:border-btncolor'
      />
    </>
  )
}

export default CalendarMenu