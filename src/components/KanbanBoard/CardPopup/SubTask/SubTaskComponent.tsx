import { ColorSwatchIcon, DotsHorizontalIcon, DuplicateIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import UserContainer from '../../../../Reusable/TaskComponents/AssignedUser/UserContainer'
import BoardStatus from '../../../../Reusable/TaskComponents/BoardStatus'
import CalendarMenu from '../../../../Reusable/TaskComponents/CalendarMenu'
import EstimatedTime from '../../../../Reusable/TaskComponents/EstimatedTime'
import KpiPoints from '../../../../Reusable/TaskComponents/KpiPoints'
import PriorityFlag from '../../../../Reusable/TaskComponents/PriorityFlag'
import TaskMenu from '../../../../Reusable/TaskComponents/TaskMenu'


type Props = {
  boardDropDownList: any
  userListState: any
  data: any
  handleEditSubTask: any
  updateSubTaskLoading: any
  handleDeleteSubTask: any
}


const SubTaskComponent = (props: Props) => {

  const { boardDropDownList, userListState, data, handleEditSubTask, updateSubTaskLoading, handleDeleteSubTask } = props

  const [boardState, setBoardState] = useState<any>()
  const [userState, setUserState] = useState<any>([])
  const [priorityState, setPriorityState] = useState<any>()
  const [kpiPoints, setKpiPoints] = useState<any>(null)

  const [initialValuesState, setInitialValuesState] = useState<any>({
    user: null,
    board: null,
    priority: null,
    title: "",
    estimatedTime: null,
    startDateKey: null,
    endDateKey: null
  })

  useEffect(() => {
    setInitialValuesState((prev: any) => ({ ...prev, title: data?.name }))
  }, [data])

  return (
    <div className='border sub-task-div border-transparent group bg-slate-100 w-full flex items-center justify-between space-x-2 px-3 rounded'>
      <span className='flex items-center'>
        <BoardStatus
          initialValue={initialValuesState.board}
          boardState={boardState}
          setBoardState={setBoardState}
          handleAPICall={() => { }}
          boardDropDownList={boardDropDownList}
          fullButton={false}
        />

        <input
          type="text"
          style={{ outline: "none" }}
          className="bg-transparent px-3 max-w-[13rem]"
          placeholder='Sub Task Name'
          value={initialValuesState.title}
          onChange={(e) => { setInitialValuesState((prev: any) => ({ ...prev, title: e.target.value })) }}
        />
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

      <span className='flex items-center text-xs space-x-2 invisible group-hover:visible'>
        <CalendarMenu
          size="sm"
          calendarState={initialValuesState}
          setCalendarState={setInitialValuesState}
          startDateKey="startDate"
          endDateKey="endDate"
          detail={false}
          handleAPICall={() => { }}
        />

        <EstimatedTime
          card2ValuesState={initialValuesState}
          setCard2ValuesState={setInitialValuesState}
          stateObjectKey="estimatedTime"
          handleBlurFunction={() => { }}
          size="sm"
        />

        {/* KPI POINTS */}
        <KpiPoints
          kpiPoints={kpiPoints}
          setKpiPoints={setKpiPoints}
          handleChangeKpiPoints={() => { }}
          size="sm"
        />

        {/* PRIORITY FLAGS */}
        <PriorityFlag
          initialValue={initialValuesState.priority}
          priorityState={priorityState}
          setPriorityState={setPriorityState}
          handleAPICall={() => { }}
          size='sm'
        />

        {/* ASSIGN USERS */}
        <UserContainer
          userState={userState}
          setUserState={setUserState}
          handleAssignUser={() => { }}
          userListState={userListState || []}
          size={"xs"}
        />

        <TaskMenu size={"xs"} deleteTaskAction={handleDeleteSubTask} taskId={data?.id} />
      </span>
    </div>
  )
}

export default SubTaskComponent