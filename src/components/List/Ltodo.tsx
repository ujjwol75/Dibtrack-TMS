import {Popover, Transition} from '@headlessui/react'
import {CalendarIcon, CheckIcon, FlagIcon} from '@heroicons/react/solid'
import {useState} from 'react'
import CircleUserIcon from '../../Reusable/CircleUserIcon'
import UserInfoPopup from '../../Reusable/CircleUserIcon/UserInfoPopup'
import Modal from '../../Reusable/Modal'
import CardPopup from '../KanbanBoard/CardPopup/CardPopup'

type Props = {
  item: string
}

const Ltodo = (props: Props) => {
  const {item} = props
  const [openCardModal, setOpenCardModal] = useState(false)
  return (
    <>
      <div className='flex w-[93.333333%] mx-auto h-8 justify-between p-3 shadow-sm mt-1 bg-white  items-center '
           onClick={() => {
             setOpenCardModal(true)
           }}>
        <div className='flex space-x-2'>
          <CheckIcon className='w-6 h-6 text-sm text-gray-400 font-light '/>
          <p className='text-sm text-gray-400 font-light mx-2 hover:text-blue-400'>{item}</p>
        </div>

        <div className='flex  w-[16rem] space-x-12  '>
          {/* <IdentificationIcon className='h-6 w-6 text-sm text-gray-400 font-light  cursor-pointer hover:text-blue-400' > */}
          <Popover>

            <Popover.Button>

              <CircleUserIcon size='xs'/>
            </Popover.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Popover.Panel className="absolute z-10 mt-3">
                <UserInfoPopup/>
              </Popover.Panel>
            </Transition>
          </Popover>
          <CalendarIcon className='h-6 w-6 text-sm text-gray-400 font-light  cursor-pointer hover:text-blue-400'/>
          <FlagIcon className='h-6 w-6 text-sm text-gray-400 font-light  cursor-pointer hover:text-blue-400'/>
        </div>
      </div>
      <Modal title='Resualbe' isOpen={openCardModal} setIsOpen={setOpenCardModal} screenSize={true}>
        <CardPopup/>
      </Modal>
    </>
  )
}

export default Ltodo