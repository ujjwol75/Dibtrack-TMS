import { TagIcon } from '@heroicons/react/outline'
import React, { Fragment, useEffect, useState } from 'react'
import APIS from '../../../constants/EndPoint'
import useGetHook from '../../../customHooks/useGetHook'
import usePatchHook from '../../../customHooks/usePatchHook'
import AddSubTaskComponent from './SubTask/AddSubTaskComponent'
import SubTaskComponent from './SubTask/SubTaskComponent'

type Props = {
  cardDetailData: any
  handleCreateSubTask: any
  isPostLoading:boolean
  handleEditSubTask:any
  updateSubTaskLoading:boolean
}

const CardPopupSection3 = (props: Props) => {
  const { cardDetailData, handleCreateSubTask,isPostLoading,handleEditSubTask,updateSubTaskLoading } = props

  const [cardDataState, setCardDataState] = useState<any>({
    name: "",
    description: ""
  })

  const [boardDropDownList, setBoardDropDownList] = useState<any>(null)
  const [userListState, setUserListState] = useState<any>()

  useEffect(() => {
    setCardDataState({
      name: cardDetailData.name,
      description: cardDetailData.description
    })
  }, [cardDetailData])

  const {
    isPatchLoading,
    mutate: updateMutate,
    addSuccessSnackBar: editSuccessSnackBar,
    setAddSuccessSnackBar: setEditSuccessSnackBar,
  } = usePatchHook({ queryKey: `boardData${cardDetailData?.workspace}`, setOpenEditPopup: "" })

  // FUCNTION TO UPDATE TASK NAME AND DESCRIPTION
  const handleBlur = (value: any) => {
    const url = `${APIS.TASK}${cardDetailData?.id}/`
    const formData = {
      name: value.name,
      description: value.description
    };
    try {
      updateMutate({ url, formData });
    } catch (e) {
      console.log(e);
    }
  }


  const { data: BoardsList } = useGetHook({
    queryKey: "Boards",
    url: `${APIS.TASK}?workspace=${cardDetailData?.workspace}`
  })

  const { data: usersData } = useGetHook({
    queryKey: "user",
    url: `${APIS.USER}`
  })

  // GENERATE PRIORITY LIST
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



  return (
    <>
      <section className='p-4 space-y-4 h-full overflow-y-auto'>
        <div className='flex space-x-3 items-center text-sm'>
          <span className='bg-yellow-300 text-yellow-600 px-2 rounded-r-full cursor-pointer'>
            sample tags A
          </span>
          <span className='bg-blue-300 text-blue-600 px-2 rounded-r-full cursor-pointer'>
            sample tags B
          </span>
          <TagIcon className='p-1 w-9 border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer ' />
        </div>

        <input
          className='border hover:border-gray-500 text-2xl p-4 font-light w-full'
          value={cardDataState.name}
          placeholder="TASK NAME"
          style={{ outline: "none" }}
          onChange={(e) => setCardDataState((prev: any) => ({ ...prev, name: e.target.value }))}
          onBlur={() => {
            handleBlur(cardDataState)
          }}
        />

        <textarea
          className=' border hover:border-gray-500 p-3 font-light w-full '
          value={cardDataState.description}
          placeholder="TASK DESCRIPTION"
          style={{ outline: "none" }}
          rows={5}
          onChange={(e) => setCardDataState((prev: any) => ({ ...prev, description: e.target.value }))}
          onBlur={() => {
            handleBlur(cardDataState)
          }}
        />

        <div className='space-y-3 relative'>
          <p className='text-lg'>SUBTASKS</p>
          {
            cardDetailData?.children?.map((elem: any, index: number) => (
              <Fragment key={index}>
                <SubTaskComponent
                  boardDropDownList={boardDropDownList}
                  userListState={userListState}
                  handleEditSubTask={handleEditSubTask}
                  data={elem}
                  updateSubTaskLoading={updateSubTaskLoading}
                />
              </Fragment>
            ))
          }
          <AddSubTaskComponent
            cardDetailData={cardDetailData}
            handleCreateSubTask={handleCreateSubTask}
            boardDropDownList={boardDropDownList}
            userListState={userListState}
            isPostLoading={isPostLoading}
          />
        </div>
      </section>
    </>
  )
}

export default CardPopupSection3