import {
  ChevronDownIcon,
  PlusCircleIcon,
  ExclamationIcon
} from '@heroicons/react/solid'
import React from 'react'
import Button from '../Button/Button'
import GrayBtn from '../Button/GrayBtn'
import NameField from '../InputLayout/NameField'
import OptionText from '../InputLayout/OptionText'

import List from '../ListBox/List'

type Props = {
 
  setBox:any
}

const MidBox = (props: Props) => {
  const{ setBox} = props
  return (
    <>

      <div className='w-[34rem] h-[19rem] shadow-2xl p-4 rounded-md inline-block bg-white'>

        <div>
          <p className='text-sm text-gray-400 font-thin'>ADD COLOUMN</p>
        </div>
        <div className='flex mt-2 mr-1'>
          <div className='w-[20rem]  p-1 ml-2'>
            <p className='text-sm text-gray-400 font-thin '>FIELD NAME</p>
            <div className='flex'>
              <div className='flex '>
                {/* <input type="nameField" /> */}
                <NameField name={'nameField'}  type={'text'}/>
                <div className='border-y-2 border-r-2 border-gray-300 '>
                  <ChevronDownIcon className='w-7 h-7 cursor-pointer' />
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
        <div className='mt-2'>
          <div>
            <div>
              <p className='text-sm text-gray-400 font-thin ml-3'>OPTION</p>
            </div>
        {/* FIELD Text */}
            <OptionText name={'OptionField'} type={'text'}/>
          </div>
        </div>


        <div className='my-4'>
          <PlusCircleIcon className='h-6 w-6 mb-1 inline-block cursor-pointer text-blue-400  ' />
          <span className='text-blue-400 ml-2 font-light text-sm'>Add new option</span>

        </div>
        <div className='mt-4 '>
          <div className='flex'>
            <div className='w-1/2 flex'>
              <div className='mr-1'>
                <ExclamationIcon className='h-6 w-6 mb-1 inline-block'/>
              </div>
              <div>
                <p className='text-sm text-gray-400 font-light'>Single selection
                  Want multiple selections? Use a <span className='text-blue-400'>Label Field </span> instead.</p>

              </div>
            </div>
            <div className='w-1/2'>
              <div className='flex justify-end mt-3'>

                <span className='mr-2' onClick={()=>{setBox(false)}}>

                  <GrayBtn text='Cancel'  />
                </span>
                <span onClick={()=>{setBox(false)}}>

                  <Button text='Add Column' />
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default MidBox