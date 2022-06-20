import { UserAddIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import useGetHook from '../../../../customHooks/useGetHook'
import AutoComplete from '../../../../Reusable/AutoComplete'
import DropDownListBox from '../../../../Reusable/DropDownList/DropDownListBox'

type Props = {
  boardDropDownList: any
  userListState: any
  data: any
  handleEditSubTask: any
}

const SubTaskComponent = (props: Props) => {

  const { boardDropDownList, userListState, data, handleEditSubTask } = props

  const [boardState, setBoardState] = useState<any>()
  const [userState, setUserState] = useState<any>([])
  const [subTaskState, setSubTaskState] = useState<any>({
    title: ""
  })

  useEffect(() => {
    setSubTaskState((prev: any) => ({ ...prev, title: data?.name }))
  }, [data])

  return (
    <div className='border sub-task-div border-transparent bg-slate-100 w-full flex items-center justify-between px-3 p-1 rounded'>
      <span className='flex'>
        <DropDownListBox
          options={boardDropDownList || []}
          selected={boardState}
          setSelected={setBoardState}
          handleAPICall={() => { }}
          customButton={
            <span
              title={`${boardState ? boardState.title : ""}`}
              className={`flex items-center p-[6px] -mt-2 border rounded `}
              style={{
                backgroundColor: `${boardState ? boardState.color : "#d8d8d8"}`,
              }}
            >
            </span>
          }
        />
        <input
          type="text"
          style={{ outline: "none" }}
          className="bg-transparent px-3"
          placeholder='Sub Task Name'
          value={subTaskState.title}
          onChange={(e) => { setSubTaskState((prev: any) => ({ ...prev, title: e.target.value })) }}
        />
      </span>
      <span className='flex items-center space-x-2'>

        <span className='flex items-center'>
          <AutoComplete
            selected={userState}
            setSelected={setUserState}
            handleAPICall={() => { }}
            options={userListState || []}
            multiSelect={true}
            customButton={
              <UserAddIcon
                className='p-1 w-7 border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer ' />
            }
          />
        </span>

        <button
          className='bg-btncolor hover:bg-indigo-600 rounded px-2 h-fit text-sm text-white'
          onClick={() => handleEditSubTask()}
        >
          Edit
        </button>
      </span>
    </div>
  )
}

export default SubTaskComponent