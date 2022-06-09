import { AdjustmentsIcon, CalendarIcon, CheckIcon, ClockIcon, DotsHorizontalIcon, FlagIcon, TagIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import CircleUserIcon from '../../Reusable/CircleUserIcon'

const KanbanCard = (props) => {

  const {
    onClick,
    title
  } = props

  const [displayIcons, setDisplayIcons] = useState(false)
  const clickDelete = (e) => {

  }

  return (
    <>
      <div
        className='hover:shadow-lg border border-slate-200 bg-slate-50 my-2 rounded'
        onMouseOver={() => setDisplayIcons(true)} onMouseLeave={() => setDisplayIcons(false)}
      >
        <section onClick={onClick} className="cursor-pointer">
          <header className='flex justify-between p-3 '>
            <h5 className='text-sm'>{title}</h5>
            <CircleUserIcon />
          </header>
          <div className='flex items-center space-x-2 text-xs my-3 px-3' >
            <AdjustmentsIcon className='text-blue-300 w-5 h-5' /><span>1</span>
          </div>
        </section>
        {
          displayIcons ?
            <div className='flex justify-between border-t border-slate-200 opacity-50 px-2 py-1'
            >
              <div className='flex gap-x-3'>
                <CalendarIcon className='w-5 h-5 hover:text-primary cursor-pointer font-bold' title="Due Date" />
                <TagIcon className='w-5 h-5 hover:text-primary cursor-pointer' title="Tags" />
                <FlagIcon className='w-5 h-5 hover:text-primary cursor-pointer' title="Priority" />
                <ClockIcon className='w-5 h-5 hover:text-primary cursor-pointer' title="Estimated Time" />
              </div>
              <div className='flex gap-x-3'>
                <CheckIcon className='w-5 h-5 hover:text-green-500 cursor-pointer' title="Done" />
                <DotsHorizontalIcon className='w-5 h-5 hover:text-primary cursor-pointer' title="More Options" />
              </div>
            </div> : null
        }
      </div>
    </>
  )
}

export default KanbanCard