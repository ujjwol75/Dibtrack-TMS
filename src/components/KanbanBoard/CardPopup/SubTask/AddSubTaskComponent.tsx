import { useEffect, useState } from 'react'
import LoaderButton from '../../../../Reusable/Loader/LoaderButton'
import UserContainer from '../../../../Reusable/TaskComponents/AssignedUser/UserContainer'
import BoardStatus from '../../../../Reusable/TaskComponents/BoardStatus'
import CalendarMenu from '../../../../Reusable/TaskComponents/CalendarMenu'
import EstimatedTime from '../../../../Reusable/TaskComponents/EstimatedTime'
import KpiPoints from '../../../../Reusable/TaskComponents/KpiPoints'
import PriorityFlag from '../../../../Reusable/TaskComponents/PriorityFlag'

type Props = {
  cardDetailData: any
  handleCreateSubTask: any
  boardDropDownList: any
  userListState: any
  isPostLoading: boolean
}

const AddSubTaskComponent = (props: Props) => {
  const { cardDetailData, handleCreateSubTask, boardDropDownList, userListState, isPostLoading } = props

  // const [subTaskState, setSubTaskState] = useState<any>({
  //   title: ""
  // })

  const [initialValuesState, setInitialValuesState] = useState<any>({
    user: null,
    board: null,
    priority: null,
    title: "",
    estimatedTime: null
  })

  const [boardState, setBoardState] = useState<any>()
  const [priorityState, setPriorityState] = useState<any>()
  const [kpiPoints, setKpiPoints] = useState<any>(null)
  const [userState, setUserState] = useState<any>([])

  useEffect(() => {
    setInitialValuesState((prev: any) => ({ ...prev, title: "" }))
  }, [cardDetailData])


  return (
    <div className='border sub-task-div w-full flex items-center justify-between px-3 p-2 rounded'>
      <span className='flex'>
        <span
          title={"Not Assigned"}
          className={` w-2 p-2  border rounded bg-[#d8d8d8] `}
        >
        </span>

        <input
          type="text"
          style={{ outline: "none" }}
          className=" px-3 w-full"
          placeholder='Sub Task Name'
          value={initialValuesState.title}
          onChange={(e) => { setInitialValuesState((prev: any) => ({ ...prev, title: e.target.value })) }}
        />
      </span>

      <button
        className='bg-btncolor hover:bg-indigo-600 rounded px-2 h-fit text-sm text-white'
        onClick={() => handleCreateSubTask(initialValuesState, cardDetailData?.id)}
      >
        {
          isPostLoading ? <LoaderButton /> : "Save"
        }
      </button>

    </div>
  )
}

export default AddSubTaskComponent