import { AdjustmentsIcon, CalendarIcon, CheckIcon, ClockIcon, DotsHorizontalIcon, FlagIcon, TagIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import CircleUserIcon from '../../Reusable/CircleUserIcon'
import DropDownListBox from '../../Reusable/DropDownList/DropDownListBox'

const KanbanCard = (props) => {

  const {
    onClick,
    title
  } = props

  const [displayIcons, setDisplayIcons] = useState(true)
  const clickDelete = (e) => {}

  const PriorityOptions = [
    { id: '1', title: 'Urgent', icon: <FlagIcon className='w-7 p-1 text-red-500' />, color: "rgb(239 68 68 )", },
    { id: '2', title: 'High', icon: <FlagIcon className='w-7 p-1 text-orange-500' />, color: "rgb(249 115 22)", },
    { id: '3', title: 'Medium', icon: <FlagIcon className='w-7 p-1 text-blue-500' />, color: "rgb(59 130 246)", },
    { id: '4', title: 'Low', icon: <FlagIcon className='w-7 p-1 text-gray-500' />, color: "rgb(107 114 128)", },
    { id: null, title: 'Clear', icon: <XIcon className='w-6 h-6 text-red-500' />, color: "rgb(239 68 68 )", clear: true },
  ]
  return (
    <>
      <div
        className='hover:shadow-lg border border-slate-200 bg-slate-50 my-2 rounded'
        // onMouseOver={() => setDisplayIcons(true)} onMouseLeave={() => setDisplayIcons(false)}
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

                <DropDownListBox
                options={PriorityOptions}
                  customButton={
                    <FlagIcon className='w-5 h-5 hover:text-primary cursor-pointer' title="Priority" />
                  }
                />
                <ClockIcon className='w-5 h-5 hover:text-primary cursor-pointer' title="Estimated Time" />
              </div>
              <div className='flex gap-x-3'>
                <CheckIcon className='w-5 h-5 hover:text-green-500 cursor-pointer' title="Done" />
                <DotsHorizontalIcon className='w-5 h-5 hover:text-primary cursor-pointer' title="More Options" />
              </div>
            </div> : null
        }
      </div>

      {/* <div className='absolute max-w-md transform overflow-hidden rounded-2xl bg-gray-500 p-6 text-left align-middle shadow-xl transition-all'>
pokasopd
      </div> */}
    </>
  )
}

export default KanbanCard