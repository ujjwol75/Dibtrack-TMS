import React, {useState} from 'react'
import {
  InformationCircleIcon,
  CheckIcon,
  ArrowCircleUpIcon,
} from "@heroicons/react/solid";
import {ArrowCircleDownIcon} from "@heroicons/react/outline";

import EditTodo from './EditTodo';
import Ltodo from './Ltodo';
import AddDescription from './Descriptions/AddDescription';
import AddComment from './Comment/AddComment';


type Props = {}

const LBox = (props: Props) => {

  const [listItem, setListItem] = useState(['aasdfasd', 'bfsadfasd', 'cfasdfsa'])
  const [add, setAdd] = useState(false)
  const [topEdit, setTopEdit] = useState(false)
  const [sidepop, setSidepop] = useState(false)
  const [comment, setComment] = useState(false)

  return (
    <>
      <div className='w-full shadow-2xl h-auto m-auto  p-2 my-4 rounded-md'>
        <div className='flex justify-between'>
          <div className='flex '>
            <ArrowCircleDownIcon className='w-5 h-5 text-sm text-gray-400 font-light mx-2'/>
            <span>List</span>
            <InformationCircleIcon className='w-4 h-4 m-1 text-sm text-gray-400 font-light mx-2'/>
            <div className='flex'>
              <div><p className='text-sm text-gray-400 font-light mx-2 cursor-pointer' onClick={() => {
                setTopEdit(!topEdit)
              }}>+NEW TASK</p></div>

              <div><p className='text-sm text-gray-400 font-light mx-2' onClick={() => {
                setSidepop(true)
              }}>ADD Descriptions</p></div>
              <div><p className='text-sm text-gray-400 font-light mx-2' onClick={() => {
                setComment(true)
              }}>ADD COMMENT</p></div>

            </div>
          </div>
          <div>
            <div className='flex'><CheckIcon className='w-5 h-5 text-sm text-gray-400 font-light mx-2'/> <p
              className='text-sm text-gray-400 font-light mx-2'>ADD COMMENT</p></div>
          </div>

        </div>
        <hr/>
        {topEdit && <EditTodo/>}
        <div className='flex-col '>
          <div className='flex  relative '>
            <div className='mt-[3.25rem] absolute left-1 '>
              <ArrowCircleDownIcon className='w-5 h-5 text-sm text-gray-400 font-light mx-2'/>
            </div>
            <div className='w-full'>
              <div className='mt-[3.25rem]  w-[93.333333%] h-5 mx-auto flex justify-between    '>
                <div className='flex'>

                  <div className='flex-col'>
                    <div className='flex space-x-1'>
                      <div className=' bg-gray-200'><p className='text-sm text-gray-400 font-light '>TO DO</p></div>
                      <div className='flex'><p className='text-sm text-gray-400 font-light mx-2'>Task</p>
                        < ArrowCircleUpIcon className='w-4 h-4 text-blue-400'/></div>
                    </div>

                  </div>
                </div>
                <div className='flex'>
                  <p className='text-sm text-gray-400 font-light mx-2'>ASSIGNEE</p>
                  <p className='text-sm text-gray-400 font-light mx-2'>DUE DATE</p>
                  <p className='text-sm text-gray-400 font-light mx-2'>PRIORITY</p>
                  <p className='text-sm text-gray-400 font-light mx-2'>+</p>
                </div>
              </div>
              {
                listItem.map((item: any) => {
                  return (

                    <Ltodo item={item}/>
                  )
                })
              }
              {add && <EditTodo/>}
            </div>
          </div>

        </div>
        <p className='text-sm text-gray-400 font-light mx-2 mt-2 cursor-pointer' onClick={() => {
          setAdd(!add)
        }}>+New task</p>

      </div>
      <AddDescription setSidepop={setSidepop} sidepop={sidepop}/>
      <AddComment setSidepop={setComment} sidepop={comment}/>
    </>
  )
}

export default LBox
