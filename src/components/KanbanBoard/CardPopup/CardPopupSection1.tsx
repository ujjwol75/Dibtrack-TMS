import { DotsHorizontalIcon, ShareIcon, UserAddIcon } from '@heroicons/react/outline'
import { CheckIcon, XIcon, FlagIcon } from '@heroicons/react/solid'
import { url } from 'inspector'
import { useEffect, useState } from 'react'
import APIS from '../../../constants/EndPoint'
import useGetHook from '../../../customHooks/useGetHook'
import AutoComplete from '../../../Reusable/AutoComplete'
import DropDownListBox from '../../../Reusable/DropDownList/DropDownListBox'
import FlyoutMenu from '../../dashboard/FlyoutMenu'


type Props = {
  cardDetailData: any
}

const CardPopupSection1 = (props: Props) => {

  const { cardDetailData } = props

  const [boardDropDownList, setBoardDropDownList] = useState<any>(null)
  const [userListState, setUserListState] = useState<any>()
  const [boardState, setBoardState] = useState<any>()
  const [priorityState, setPriorityState] = useState<any>()
  const [userState, setUserState] = useState<any>([])

  const PriorityOptions = [
    { id: '1', title: 'Urgent', icon: <FlagIcon className='w-7 p-1 text-red-500' />, color: "rgb(239 68 68 )", },
    { id: '2', title: 'High', icon: <FlagIcon className='w-7 p-1 text-orange-500' />, color: "rgb(249 115 22)", },
    { id: '3', title: 'Medium', icon: <FlagIcon className='w-7 p-1 text-blue-500' />, color: "rgb(59 130 246)", },
    { id: '4', title: 'Low', icon: <FlagIcon className='w-7 p-1 text-gray-500' />, color: "rgb(107 114 128)", },
    { id: null, title: 'Clear', icon: <XIcon className='w-6 h-6 text-red-500' />, color: "rgb(239 68 68 )", clear: true },
  ]

  const { data: BoardsList } = useGetHook({
    queryKey: "Boards",
    url: `${APIS.TASK}?workspace=${cardDetailData?.workspace}`
  })

  const { data: usersData } = useGetHook({
    queryKey: "user",
    url: `${APIS.USER}`
  })

  //  GENERATE BOARDS LIST
  let emptyList: any = []
  useEffect(() => {
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
  let emptyUserList: any = []
  useEffect(() => {
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
      <section className='p-4 w-full flex items-center justify-between relative'>
        <section className='flex items-center space-x-5'>

          {/* CHANGE BOARDS */}
          <>
            <DropDownListBox
              selected={boardState}
              setSelected={setBoardState}
              options={boardDropDownList || []}
              customButton={
                <span className={`flex items-center p-1 px-5  
                  border rounded text-white divide-x divide-white hover:border-black`}
                  style={{
                    backgroundColor: `${boardState ? boardState.color : boardDropDownList && boardDropDownList[0].color}`,
                  }}
                >
                  <div className='pr-3 text-sm' >{boardState ? boardState.title : boardDropDownList && boardDropDownList[0].title}</div>
                  <span className='pl-3'>&gt;</span>
                </span>
              }
            />
          </>


          {/* CHECK ICON */}
          <span className='h-fit p-2 border hover:border-green-600 hover:text-green-600 rounded'>
            <CheckIcon className='w-5 h-5 ' />
          </span>

          {/* ASSIGN USERS */}
          <span className='flex items-center'>
            {/* <FlyoutMenu userIconSizeProp="sm" /> */}
            <AutoComplete
              selected={userState}
              setSelected={setUserState}
              options={userListState || []}
              multiSelect={true}
              customButton={
                <UserAddIcon className='p-1 w-9 border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer ' />
              }
            />
          </span>

          <DropDownListBox
            selected={priorityState}
            setSelected={setPriorityState}
            options={PriorityOptions}
            customButton={
              <FlagIcon className={`w-9 p-1 border-2 border-dashed rounded-full text-gray-400 cursor-pointer ${priorityState ? "" : "hover:text-btncolor hover:border-btncolor"} `}
                style={{
                  color: `${priorityState ? priorityState.color : null}`,
                  border: `${priorityState ? priorityState.color : null} solid 1px`

                }}
              />
            }
          />

        </section>

        <section className='flex space-x-5 items-center'>
          <span className='border p-1 flex space-x-1 rounded '>
            <ShareIcon className='w-4 h-4 ' />
            <span className='text-xs'>Share</span>
          </span>

          <DotsHorizontalIcon
            className='w-8 h-8 hover:text-btncolor cursor-pointer'
            onClick={() => { }}
          />
        </section>
      </section>
    </>
  )
}

export default CardPopupSection1