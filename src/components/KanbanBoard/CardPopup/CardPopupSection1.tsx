import { ShareIcon } from '@heroicons/react/outline'
import { CheckIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import APIS from '../../../constants/EndPoint'
import useGetHook from '../../../customHooks/useGetHook'
import usePatchHook from '../../../customHooks/usePatchHook'
import usePostHook from '../../../customHooks/usePostHook'

import UserContainer from '../../../Reusable/TaskComponents/AssignedUser/UserContainer'
import BoardStatus from '../../../Reusable/TaskComponents/BoardStatus'
import PriorityFlag from '../../../Reusable/TaskComponents/PriorityFlag'
import TaskMenu from '../../../Reusable/TaskComponents/TaskMenu'
import FlyoutMenu from '../../dashboard/FlyoutMenu'


type Props = {
  cardDetailData: any
  setOpenCardModal: any
  handleDeleteTask: any
}

const CardPopupSection1 = (props: Props) => {
  const { cardDetailData, setOpenCardModal, handleDeleteTask } = props
  
  const [boardDropDownList, setBoardDropDownList] = useState<any>(null)
  const [userListState, setUserListState] = useState<any>()
  const [boardState, setBoardState] = useState<any>()
  const [priorityState, setPriorityState] = useState<any>()
  const [userState, setUserState] = useState<any>([])

  const [initialValuesState, setInitialValuesState] = useState({
    user: null,
    board: null,
    priority: null
  })


  const { data: BoardsList } = useGetHook({
    queryKey: `Boards${cardDetailData?.workspace}`,
    url: `${APIS.TASK}?workspace=${cardDetailData?.workspace}`
  })

  const { data: usersData } = useGetHook({
    queryKey: "user",
    url: `${APIS.USER}`
  })

  const {
    isPostLoading,
    mutate: assignMutate,
    successMsg,
    addSuccessSnackBar,
    setAddSuccessSnackBar,
  } = usePostHook({ queryKey: `Boards${cardDetailData?.workspace}`, setOpenAddPopup: "" });

  const {
    isPatchLoading,
    mutate: updateMutate,
    addSuccessSnackBar: editSuccessSnackBar,
    setAddSuccessSnackBar: setEditSuccessSnackBar,
  } = usePatchHook({ queryKey: `boardData${cardDetailData?.workspace}`, setOpenEditPopup: "" })

  const handleAssignUser = (usersList: any) => {
    const url = APIS.ASSIGN;
    const formData = {
      task: cardDetailData.id,
      assign_to: usersList
    };
    try {
      assignMutate({ url, formData });
    } catch (e) {
      console.log(e);
    }
  }

  const handleAssignPriority = (e: any) => {
    const url = APIS.PRIORITY;
    const formData = {
      content_type: cardDetailData?.get_content_type_id,
      object_id: cardDetailData?.id,
      priority: e
    }
    try {
      assignMutate({ url, formData });
    } catch (e) {
      console.log(e);
    }
  }

  //  GENERATE BOARDS LIST
  useEffect(() => {
    let emptyList: any = []
    setBoardDropDownList(null)
    if (BoardsList) {
      BoardsList?.map((elem: any) => {
        const dropDownObject = {
          id: elem.id,
          title: elem.name,
          icon: <div className="w-3 h-3 rounded m-1" style={{ backgroundColor: `${elem?.color}` }} />,
          color: elem.color
        }
        emptyList.push(dropDownObject)
        setBoardDropDownList(emptyList)
      })
    }
  }, [BoardsList])

  // GENERATE USERS LIST
  useEffect(() => {
    let emptyUserList: any = []
    setUserListState(null)
    if (usersData) {
      usersData?.map((elem: any) => {
        const dropDownObject = {
          id: elem.id,
          title: elem.email,
          icon: <div className='w-8 h-8 bg-orange-400 flex justify-center items-center rounded-full '>ss</div>
        }
        emptyUserList.push(dropDownObject)
        setUserListState(emptyUserList)
      })
    }
  }, [usersData])


  const handleChangeBoard = (value: any) => {
    const url = `${APIS.TASK}${cardDetailData?.id}/`
    const formData = {
      parent: value,
      order: "1" // stays at top of list
    }
    try {
      updateMutate({ url, formData })
    } catch (e) {
      console.log(e);
    }
  }

  // SETTING ALL INITIAL VALUES
  useEffect(() => {
    setInitialValuesState({
      user: null,
      board: cardDetailData?.parent,
      priority: cardDetailData?.priority?.priority
    })
  }, [cardDetailData])


  return (
    <>
      <section className='p-4 w-full flex items-center justify-between relative'>
        <section className='flex items-center space-x-5'>

          {/* CHANGE BOARDS */}
          <BoardStatus
            initialValue={initialValuesState.board}
            boardState={boardState}
            setBoardState={setBoardState}
            handleAPICall={handleChangeBoard}
            boardDropDownList={boardDropDownList}
          />

          {/* CHECK ICON */}
          <span className='h-fit p-2 border hover:border-green-600 hover:text-green-600 rounded'>
            <CheckIcon className='w-5 h-5 ' />
          </span>

          {/* ASSIGN USERS */}
          <UserContainer
            userState={userState}
            setUserState={setUserState}
            handleAssignUser={handleAssignUser}
            userListState={userListState || []}
            size={"sm"}
          />
          <PriorityFlag
            initialValue={initialValuesState.priority}
            priorityState={priorityState}
            setPriorityState={setPriorityState}
            handleAPICall={handleAssignPriority}
            size='md'
          />
        </section>

        <section className='flex space-x-5 items-center'>
          <span className='border p-1 flex space-x-1 rounded '>
            <ShareIcon className='w-4 h-4 ' />
            <span className='text-xs'>
              Share
            </span>
          </span>

          <TaskMenu size='sm' deleteTaskAction={handleDeleteTask} taskId={cardDetailData?.id} isCard={true} />
        </section>
      </section>
    </>
  )
}

export default CardPopupSection1