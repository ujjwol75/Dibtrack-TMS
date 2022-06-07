import React from 'react'

import {
  SearchIcon,
  TrendingDownIcon
} from "@heroicons/react/outline";


type Props = {
  popUp: Boolean
  showPop: any
}

const SidePopUp = (props: Props) => {
  const { popUp, showPop } = props
  return (
    <>
      <div className='shadow-2xl w-[19rem] h-[38rem]  rounded-md'>
        <div className='flex'>
          <div className='w-1/2  text-center text-gray-400 p-1 cursor-pointer'>Show/Hide</div>
          <div className='w-1/2  text-center text-gray-400 p-1 cursor-pointer'>New Colume</div>
        </div>
        <hr />
        <div className='flex my-2'>
          <SearchIcon className='h-5 w-5 text-center m-1 cursor-pointer' />
          <input type="text" className=' w-full pl-2 outline-none' placeholder='Search' />
        </div>
        <hr />

        <div className='overflow-y-scroll w-[19rem] h-[32rem] p-3'>
          <div className='flex cursor-pointer mt-4'>
            <TrendingDownIcon className='h-5 w-5 mr-2 ml-2 ' />
            <p onClick={() => { showPop(!popUp) }}>fsljflas</p>
          </div>
          <div className='flex cursor-pointer mt-4'>
            <TrendingDownIcon className='h-5 w-5 mr-2 ml-2 ' />
            <p onClick={() => { showPop(!popUp) }}>fsljflas</p>
          </div>
          <div className='flex cursor-pointer mt-4'>
            <TrendingDownIcon className='h-5 w-5 mr-2 ml-2 ' />
            <p onClick={() => { showPop(!popUp) }}>fsljflas</p>
          </div>
          <div className='flex cursor-pointer mt-4'>
            <TrendingDownIcon className='h-5 w-5 mr-2 ml-2 ' />
            <p onClick={() => { showPop(!popUp) }}>fsljflas</p>
          </div>
          <div className='flex cursor-pointer mt-4'>
            <TrendingDownIcon className='h-5 w-5 mr-2 ml-2 ' />
            <p onClick={() => { showPop(!popUp) }}>fsljflas</p>
          </div>




        </div>

      </div>
    </>
  )
}

export default SidePopUp