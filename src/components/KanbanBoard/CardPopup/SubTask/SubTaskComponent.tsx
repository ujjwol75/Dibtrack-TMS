import { UserAddIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import AutoComplete from '../../../../Reusable/AutoComplete'
import DropDownListBox from '../../../../Reusable/DropDownList/DropDownListBox'
import DropDownMenu from '../../../../Reusable/DropDownList/DropDownMenu'
import LoaderButton from '../../../../Reusable/Loader/LoaderButton'

type Props = {
  boardDropDownList: any
  userListState: any
  data: any
  handleEditSubTask: any
  updateSubTaskLoading: any
}

const SubTaskComponent = (props: Props) => {

  const { boardDropDownList, userListState, data, handleEditSubTask, updateSubTaskLoading } = props

  const [boardState, setBoardState] = useState<any>()
  const [userState, setUserState] = useState<any>([])
  const [subTaskState, setSubTaskState] = useState<any>({
    title: ""
  })

  useEffect(() => {
    setSubTaskState((prev: any) => ({ ...prev, title: data?.name }))
  }, [data])

  return (
    <div className='border sub-task-div border-transparent bg-slate-100 w-full flex items-center space-x-2 px-3 p-1 rounded'>
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

      <input
        type="text"
        style={{ outline: "none" }}
        className="bg-transparent px-3 max-w-[12rem]"
        placeholder='Sub Task Name'
        value={subTaskState.title}
        onChange={(e) => { setSubTaskState((prev: any) => ({ ...prev, title: e.target.value })) }}
      />
      <DropDownMenu
        options={[]}
        CustomMenuButton={
          <DotsHorizontalIcon
            className='w-5 h-5 hover:text-btncolor cursor-pointer'
          />
        }
      />
      <span className='flex items-center space-x-2'>

        <button
          className='bg-btncolor hover:bg-indigo-600 rounded px-2 h-fit text-sm text-white'
          onClick={() => handleEditSubTask(data.id, subTaskState.title)}
        >
          {
            updateSubTaskLoading ? <LoaderButton /> : "Edit"
          }

        </button>
      </span>
    </div>
  )
}

export default SubTaskComponent