import { CalendarIcon, ClockIcon, StarIcon } from '@heroicons/react/outline'
import React from 'react'
import DropDownMenu from '../../../Reusable/DropDownList/DropDownMenu'

type Props = {}

const CardPopupSection2 = (props: Props) => {
  return (
    <>
      <section className='p-4 flex items-center text-gray-400 divide-x text-xs'>
        {/* CREATED TIME */}
        <span className='px-3'>
          <p>CREATED</p>
          <span className='flex gap-2 text-black'>
            <p>Jun 16</p><p>12:57</p>
          </span>
        </span>

        {/* TIME TRACKED */}
        <span className='px-3'>
          <p>TIME TRACKED</p>
          <span className='flex gap-2 text-black'>
            <p>00:00:00</p>
          </span>
        </span>

        <span className='px-4 flex gap-3'>
          <DropDownMenu
            options={null}
            CustomMenuButton={
              <ClockIcon className='w-9 p-1 border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer ' />
            }
          >
            <div className='w-full h-10'>pasjdoij</div>
          </DropDownMenu>
          <DropDownMenu
            options={null}
            CustomMenuButton={
              <StarIcon className='w-9 p-1 border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer ' />
            }
          >
            <div className='w-full h-10'>pasjdoij</div>
          </DropDownMenu>
          <DropDownMenu
            options={null}
            CustomMenuButton={
              <CalendarIcon className='w-9 p-1 border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer ' />
            }
          >
            <div className='w-full h-10'>pasjdoij</div>
          </DropDownMenu>
        </span>
      </section>
    </>
  )
}

export default CardPopupSection2