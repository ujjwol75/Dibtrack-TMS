import { AdjustmentsIcon, BookmarkAltIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'

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
        className='hover:shadow-lg p-3 border border-slate-200 my-1 cursor-pointer rounded'
        onClick={onClick}
      >
        <header className='flex justify-between'>
          <h5 className='text-sm'>{title}</h5>
          <span className='p-1 bg-green-500 rounded-full text-xs w-6 h-6'>SS</span>
        </header>
        <div className='flex items-center space-x-2 text-xs my-1' >
          <AdjustmentsIcon className='text-blue-300 w-5 h-5' /><span>1</span>
        </div>
        {
          displayIcons ?
            <div className='flex '>
              <BookmarkAltIcon />
            </div> : null
        }
      </div>
    </>
  )
}

export default KanbanCard