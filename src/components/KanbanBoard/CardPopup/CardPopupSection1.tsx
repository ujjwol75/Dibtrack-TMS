import { DotsHorizontalIcon, ShareIcon, UserAddIcon } from '@heroicons/react/outline'
import { CheckIcon, XIcon, FlagIcon } from '@heroicons/react/solid'
import DropDownListBox from '../../../Reusable/DropDownList/DropDownListBox'
import FlyoutMenu from '../../dashboard/FlyoutMenu'


type Props = {}


const CardPopupSection1 = (props: Props) => {

  const PriorityOptions = [
    { id: '1', title: 'Urgent', icon: <FlagIcon className='w-5 h-5 text-red-500' /> },
    { id: '2', title: 'High', icon: <FlagIcon className='w-5 h-5 text-orange-500' /> },
    { id: '3', title: 'Medium', icon: <FlagIcon className='w-5 h-5 text-blue-500' /> },
    { id: '4', title: 'Low', icon: <FlagIcon className='w-5 h-5 text-gray-500' /> },
    { id: '5', title: 'Clear', icon: <XIcon className='w-5 h-5 text-red-500' /> },
  ]

  return (
    <>
      <section className='p-4 w-full flex items-center justify-between relative'>

        <section className='flex items-center space-x-5'>
          {/* Button */}
          <span className=' flex p-2 px-6 bg-orange-500 border hover:border-orange-500 rounded text-white divide-x divide-white'>
            <button className='mr-2'>Progress</button>
            <span className='pl-1'>F</span>
          </span>

          {/* CHECK ICON */}
          <span className='h-fit p-1 border hover:border-green-600 hover:text-green-600 '>
            <CheckIcon className='w-5 h-5 ' />
          </span>

          {/* ASSIGN USERS */}
          <span className='flex items-center'>
            <FlyoutMenu />
            <UserAddIcon className='p-1 w-8 border-2 h-fit border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer ' />
          </span>

          <DropDownListBox options={PriorityOptions}
            customButton={
              <FlagIcon className='w-8 p-1 h-fit border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer ' />
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