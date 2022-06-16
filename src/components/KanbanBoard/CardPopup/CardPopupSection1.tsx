import { DotsHorizontalIcon, ShareIcon, UserAddIcon } from '@heroicons/react/outline'
import { CheckIcon, XIcon, FlagIcon } from '@heroicons/react/solid'
import { url } from 'inspector'
import { useEffect } from 'react'
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

  const PriorityOptions = [
    { id: '1', title: 'Urgent', icon: <FlagIcon className='w-9 p-1 border-2 border-dashed rounded-full border-red-500 text-red-500' /> },
    { id: '2', title: 'High', icon: <FlagIcon className='w-9 p-1 border-2 border-dashed rounded-full border-orange-500 text-orange-500' /> },
    { id: '3', title: 'Medium', icon: <FlagIcon className='w-9 p-1 border-2 border-dashed rounded-full border-blue-500 text-blue-500' /> },
    { id: '4', title: 'Low', icon: <FlagIcon className='w-9 p-1 border-2 border-dashed rounded-full border-gray-500 text-gray-500' /> },
    { id: null, title: 'Clear', icon: <XIcon className='w-6 h-6 text-red-500' />, clear: true },
  ]

  const { data: BoardsList } = useGetHook({
    queryKey: "Boards",
    url: `${APIS.TASK}?workspace=${cardDetailData?.workspace}`
  })

  let boardDropDownList: any = []

  useEffect(() => {
    BoardsList?.map((elem: any) => {
      const dropDownObject = {
        id: elem.id,
        title: elem.name,
        icon: <div className={`m-1 p-1 bg-[${elem.color}]`} />
      }
      boardDropDownList.push(dropDownObject)
    })
  }, [BoardsList])

  return (
    <>
    {console.log(boardDropDownList,"boardDropDownList")}
      <section className='p-4 w-full flex items-center justify-between relative'>

        <section className='flex items-center space-x-5'>

          {/* CHANGE BOARDS */}
          {/* {
            boardDropDownList ?
              <span className='flex items-center p-1 px-5 bg-orange-500 border hover:border-orange-500 rounded text-white divide-x divide-white'>
                <DropDownListBox
                  buttonStyle='pr-3 text-sm'
                />
                <span className='pl-3'>&gt;</span>
              </span>
              : null
          } */}

          {
            boardDropDownList ?
              <>
                {console.log(boardDropDownList.length,"in loop")}
                <DropDownListBox
                  options={boardDropDownList && boardDropDownList || []}
                  customButton={
                    <span className='flex items-center p-1 px-5 bg-orange-500 border hover:border-orange-500 rounded text-white divide-x divide-white'>
                      <div className='pr-3 text-sm' >asoijd</div>
                      <span className='pl-3'>&gt;</span>
                    </span>
                  }
                />
              </>
              :
              null
          }

          {/* CHECK ICON */}
          <span className='h-fit p-2 border hover:border-green-600 hover:text-green-600 rounded'>
            <CheckIcon className='w-5 h-5 ' />
          </span>

          {/* ASSIGN USERS */}
          <span className='flex items-center'>
            <FlyoutMenu userIconSizeProp="sm" />
            <AutoComplete
              customButton={
                <UserAddIcon className='p-1 w-9 border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer ' />
              }
            />
          </span>

          <DropDownListBox options={PriorityOptions}
            customButton={
              <FlagIcon className='w-9 p-1 border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer ' />
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