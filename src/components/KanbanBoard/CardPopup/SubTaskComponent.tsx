import { UserAddIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import APIS from '../../../constants/EndPoint'
import useGetHook from '../../../customHooks/useGetHook'
import AutoComplete from '../../../Reusable/AutoComplete'
import Button from '../../../Reusable/Button/Button'
import DropDownListBox from '../../../Reusable/DropDownList/DropDownListBox'

type Props = {
  cardDetailData: any
  handleCreateSubTask:any
}

const SubTaskComponent = (props: Props) => {
  const { cardDetailData,handleCreateSubTask } = props

  const [boardState, setBoardState] = useState<any>()
  const [boardDropDownList, setBoardDropDownList] = useState<any>(null)
  const [userState, setUserState] = useState<any>([])
  const [userListState, setUserListState] = useState<any>()


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
    <div className='border border-btncolor w-full flex items-center justify-between px-3 p-1 rounded'>
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
        <input type="text" style={{ outline: "none" }} className="bg-transparent px-3" placeholder='Sub Task Name' />
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

        <button className='bg-btncolor hover:bg-indigo-600 rounded px-2 h-fit text-sm text-white'>Save</button>
      </span>
    </div>
  )
}

export default SubTaskComponent