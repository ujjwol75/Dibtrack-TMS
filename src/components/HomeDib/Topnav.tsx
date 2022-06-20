import { AtSymbolIcon, CalendarIcon, FlagIcon, MenuAlt1Icon } from '@heroicons/react/solid'
import React from 'react'

type Props = {
    collapse:boolean
    setCollapse:any
}

const Topnav = (props: Props) => {
    const {collapse , setCollapse} = props
  return (
    <div>
        <div className="h-[3.5rem] w-full border-b-2 border-gray-200  flex justify-between">
          <div className="flex items-center ">
            {collapse && (
                <MenuAlt1Icon className='h-5 w-5 text-gray-500'
                onClick={() => setCollapse(!collapse)}
               /> 
            )} 
            
            <p className="p-2 my-auto">Home </p>
          </div>
          <div className="flex">
            <div>
              <p className="p-4 my-auto"><FlagIcon className='h-6 w-6 inline-block mb-2'/> Calender</p>
            </div>
            <div>
              <p className="p-4 my-auto"><CalendarIcon className='h-6 w-6 inline-block mb-2'/> Calender</p>
            </div>
            <div>
              <p className="p-4 my-auto"><AtSymbolIcon className='h-6 w-6 inline-block mb-2'/> Calender</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Topnav