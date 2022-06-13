import React from 'react'
import { CalendarIcon, FlagIcon, AtSymbolIcon, InformationCircleIcon } from '@heroicons/react/solid'

type Props = {}

const HomeDib = (props: Props) => {
  return (
    <>

      <div className="h-[3.5rem] w-full bg-slate-600 flex justify-between">
        <div className="flex ">


          <p className="p-4 my-auto">Home</p>

        </div>
        <div className="flex">
          <div>
            <p className="p-4 my-auto"><FlagIcon className='h-6 w-6 inline-block mb-2' /> Calender</p>

          </div>
          <div>
            <p className="p-4 my-auto"><CalendarIcon className='h-6 w-6 inline-block mb-2' /> Calender</p>

          </div>
          <div>
            <p className="p-4 my-auto"><AtSymbolIcon className='h-6 w-6 inline-block mb-2' /> Calender</p>

          </div>


        </div>

      </div>
      <div className='w-full  flex'>
        {/* left */}
        <div className='w-3/5 p-4 flex-col'>
          <div>
          <p className='text-2xl '>LineUp<InformationCircleIcon className='w-4 h-4 inline-block text-gray-400 ' /><span className='text-gray-400 text-lg ml-1'>(0)</span></p>
          </div>
          <div className='my-4 border-dashed p-2 h-8 w-40 border-emerald-700'>

          </div>
        </div>

        {/* right */}
        <div className='w-2/5 p-4'>ffsdfa</div>

      </div>
    </>
  )
}

export default HomeDib