import {
  ClockIcon,
  CalendarIcon,
  FlagIcon,
  ChatIcon,
  EmojiHappyIcon,
  PrinterIcon,
  DatabaseIcon,
  ViewGridIcon,
  ViewListIcon,
  CloudUploadIcon
} from '@heroicons/react/solid'
import React, {useState} from 'react'
import Button from '../../../Reusable/Button/Button'
import DropDown from '../Descriptions/DropDown'
import CommentBox from './CommentBox'
import CommentModal from './CommentModal'
import DropUp from './DropUp'

type Props = {
  setSidepop: any
  sidepop: boolean

}

const AddComment = (props: Props) => {
  const {setSidepop, sidepop} = props
  const [up, setUp] = useState(true)
  return (
    <>
      <CommentModal isOpen={sidepop} setIsOpen={setSidepop} title={''} screenSize={true}>
        <div className='flex '>
          <div className='p-4 w-1/2'>
            <div>
              <p className='text-2xl font-bold my-1'>List ---</p>
            </div>
            <div className='flex justify-between mt-auto'>
              <div className='mt-3 my-auto  '>
                <ClockIcon className='h-6 w-6  inline-block text-xs text-gray-400'/> <span className='text-gray-400 '>0 min</span>
              </div>
              <div className=' inline-block my-auto '>
                <button className='flex border-[1px] border-gray-400  p-[4px] px-2'>
                  <CalendarIcon className='h-4 w-4 my-auto mr-1'/>
                  <p className='text-xs text-gray-400'>Sharing & Permission</p>
                </button>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='flex mt-7 '>
                <button className='flex border-[1px] border-gray-400 rounded-2xl p-[4px] px-2'>
                  <CalendarIcon className='h-4 w-4 my-auto mr-1'/>
                  <p className='text-xs text-gray-400'>set due date</p>
                </button>
                <FlagIcon className='h-7 w-7 ml-2 text-gray-400'/>
                <EmojiHappyIcon className='h-7 w-7 ml-2 text-gray-400'/>
              </div>
              <div className='flex mt-7 '>
                <button className='flex border-[1px] border-gray-400 rounded-2xl p-[4px] px-2'>
                  <CalendarIcon className='h-4 w-4 my-auto mr-1'/>
                  <p className='text-xs text-gray-400'>set due date</p>
                </button>
              </div>
            </div>
            <div>
              <textarea
                name="" id=""
                className='w-full mt-4 h-[8.75rem] active:h-[10.75] hover:border-[1px] hover:border-gray-400 text-gray-400 outline-none p-1'/>
              <div className='flex justify-end'>
                <PrinterIcon className='h-7 w-7 text-gray-400 m'/>
              </div>
            </div>
            <div className='flex justify-between mt-12'>
              <div className='flex'>
                <span>Attachments</span>
                {/* <button  className='px-2 ml-2 text-sm border border-blue-400 rounded-sm hover:bg-blue-400 '  >Add</button> */}
                <DropDown element={'Add'}/>
              </div>
              <div className='flex'>
                <ViewGridIcon className='h-7 w-7 text-gray-400'/>
                <ViewListIcon className='h-7 w-7 text-gray-400'/>
              </div>
            </div>
            <hr className=' mt-4'/>
            <hr/>
            <hr/>
            <div className='text-center mt-6'>
              <p className='text-gray-400'><CloudUploadIcon className='h-7 w-7 inline-block hover: text-blue-400'/>Drop
                files here to attach or <span className='text-blue-400 underline mt-2'>browse</span></p>
            </div>
          </div>
          <div className='p-4 pb-[4rem] w-1/2 h-screen flex items-end border-l-2 border-gray-200' onClick={() => {
            setUp(false)
          }}>
            {
              up ? <CommentBox/> :
                <div className='flex-col'>
                  <div><CommentBox/></div>
                  <div>
                    <hr/>
                    <div className='w-full h-[6rem]  flex justify-between p-2'>
                      <div className='flex space-x-4'>
                        <ChatIcon className='w-8 h-8 text-gray-400 hover:text-blue-400'/>
                        <ChatIcon className='w-8 h-8 text-gray-400 hover:text-blue-400'/>
                        <DropUp element={<DatabaseIcon className='w-8 h-8 text-gray-400 hover:text-blue-400'/>}/>
                        <ChatIcon className='w-8 h-8 text-gray-400 hover:text-blue-400'/>
                        <ChatIcon className='w-8 h-8 text-gray-400 hover:text-blue-400'/>
                        <ChatIcon className='w-8 h-8 text-gray-400 hover:text-blue-400'/>
                      </div>
                      <div>
                        <Button text={'COMMENT'}/>
                      </div>
                    </div>
                  </div>
                </div>
            }
          </div>
        </div>
      </CommentModal>
    </>
  )
}

export default AddComment