import { ColorSwatchIcon, DotsHorizontalIcon, DuplicateIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import BoardStatus from '../../../../Reusable/TaskComponents/BoardStatus'
import TaskMenu from '../../../../Reusable/TaskComponents/TaskMenu'


type Props = {
  boardDropDownList: any
  userListState: any
  data: any
  handleEditSubTask: any
  updateSubTaskLoading: any
  handleDeleteSubTask:any
}


const SubTaskComponent = (props: Props) => {

  const { boardDropDownList, userListState, data, handleEditSubTask, updateSubTaskLoading,handleDeleteSubTask } = props

  const [boardState, setBoardState] = useState<any>()
  const [userState, setUserState] = useState<any>([])

  const [initialValuesState, setInitialValuesState] = useState<any>({
    user: null,
    board: null,
    priority: null,
    title: "",
  })

  useEffect(() => {
    setInitialValuesState((prev: any) => ({ ...prev, title: data?.name }))
  }, [data])

  return (
    <div className='border sub-task-div border-transparent bg-slate-100 w-full flex items-center space-x-2 px-3 p-1 rounded'>
      <BoardStatus
        initialValue={initialValuesState.board}
        boardState={boardState}
        setBoardState={setBoardState}
        handleAPICall={() => { }}
        boardDropDownList={boardDropDownList}
        fullButton={false}
      />

      {/* <AutoComplete
        selected={userState}
        setSelected={setUserState}
        handleAPICall={() => { }}
        options={userListState || []}
        multiSelect={true}
        customButton={
          <UserAddIcon
            className='p-1 w-7 border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer ' />
        }
      /> */}

      <input
        type="text"
        style={{ outline: "none" }}
        className="bg-transparent px-3 max-w-[12rem]"
        placeholder='Sub Task Name'
        value={initialValuesState.title}
        onChange={(e) => { setInitialValuesState((prev: any) => ({ ...prev, title: e.target.value })) }}
      />
      <span className='flex items-center space-x-2'>
        <button
          className='bg-btncolor hover:bg-indigo-600 rounded px-2 h-fit text-sm text-white'
          onClick={() => handleEditSubTask(data.id, initialValuesState.title)}
        >
          {/* {
            updateSubTaskLoading ? <LoaderButton /> : "Edit"
          } */}
          Edit
        </button>
      </span>

      <TaskMenu size={"xs"} deleteTaskAction={handleDeleteSubTask} taskId={data?.id}/>
    </div>
  )
}

export default SubTaskComponent