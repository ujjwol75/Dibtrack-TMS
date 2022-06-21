import { CalendarIcon } from '@heroicons/react/outline'
import React from 'react'
import DropDownMenu from '../DropDownList/DropDownMenu'

type Props = {}

const CalendarMenu = (props: Props) => {
  return (
    <DropDownMenu
      options={null}
      CustomMenuButton={
        <CalendarIcon className='w-9 p-1 mt-1 border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer ' />
      }
    >
      <div className='p-4 text-lg '>pasjdoij</div>
    </DropDownMenu >
  )
}

export default CalendarMenu