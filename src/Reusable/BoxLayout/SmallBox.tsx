import List from '../ListBox/List'
import React, { useState } from 'react'
import Button from '../Button/Button'
import GrayBtn from '../Button/GrayBtn'
import {
  ChevronDownIcon
} from "@heroicons/react/solid";

type Props = {}

const SmallBox = (props: Props) => {



  return (
    <>

      <div className='w-[36rem] h-[10.75rem] shadow-2xl p-4 rounded-md inline-block '>
<div>
          <p className='text-sm text-gray-400 font-thin'>ADD COLOUMN</p>
        </div>
        <div className='flex mt-2'>
          <div className='w-[20rem]  p-1 ml-2'>
            <p className='text-sm text-gray-400 font-thin '>FIELD NAME</p>
            <div className='flex'>
              <div className='outline-none  w-[18rem] h-[2rem]   border-2 border-red-400 focus:border-red-500 focus:border-2 rounded-sm flex '>
                {/* <input type="text" /> */}
                <input type="text" name="" id="" className='w-[17rem] outline-none font-light text-sm' />
              <div className='border-l-2 border-gray-300 '>
                <ChevronDownIcon className='w-8 h-8 cursor-pointer' />
              </div>
              </div>
            </div>
          </div>
          <div className='w-[14rem] mt-[-2px]'>
            <div>

              <p className='text-sm text-gray-400 font-thin'>FIELD TYPE</p>
            </div>
            {/* list-box */}
            <div>

              <List />
            </div>

          </div>
        </div>
        <div className='flex justify-end mt-3'>

          <span className='mr-2'>

            <GrayBtn text='Cancel' />
          </span>
          <span>

            <Button text='Add Column' />
          </span>
        </div>
        
      </div>
    </>
  )
}

export default SmallBox