import { UserAddIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import AutoComplete from '../../../../Reusable/AutoComplete'
import DropDownListBox from '../../../../Reusable/DropDownList/DropDownListBox'
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
    <div className='border sub-task-div w-full flex items-center justify-between px-3 p-1 rounded'>
      <span className='flex'>
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
          className="bg-transparent px-3"
          placeholder='Sub Task Name'
          value={initialValuesState.title}
          onChange={(e) => { setInitialValuesState((prev: any) => ({ ...prev, title: e.target.value })) }}
        />
      </span>
      <span className='flex items-center space-x-2'>

        <CalendarMenu />

        <EstimatedTime
          card2ValuesState={initialValuesState}
          setCard2ValuesState={setInitialValuesState}
          stateObjectKey="estimatedTime"
          handleBlurFunction={() => { }}
        />

        {/* KPI POINTS */}
        <KpiPoints
          kpiPoints={kpiPoints}
          setKpiPoints={setKpiPoints}
          handleChangeKpiPoints={() => { }}
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

        <button
          className='bg-btncolor hover:bg-indigo-600 rounded px-2 h-fit text-sm text-white'
          onClick={() => handleCreateSubTask(initialValuesState, cardDetailData?.id)}
        >
          {
            isPostLoading ? <LoaderButton /> : "Save"
          }
        </button>
      </span>
    </div>
  )
}

export default AddSubTaskComponent