import {Dialog, Popover, Transition} from '@headlessui/react'
import {
  ArrowLeftIcon,
  BellIcon,
  BriefcaseIcon,
  CursorClickIcon,
  DocumentDownloadIcon,
  XIcon
} from '@heroicons/react/solid'
import React, {Fragment, useState} from 'react'
import Button from '../../../../Reusable/Button/Button'
import CircleUserIcon from '../../../../Reusable/CircleUserIcon'
import UserInfoPopup from '../../../../Reusable/CircleUserIcon/UserInfoPopup'

type Props = {
  rtext: any
}

const RemainderPopOver = (props: Props) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="inline-block">
        <button
          type="button"
          onClick={openModal}
          className="ml-2 text-sm text-gray-400"
        >
          {props.rtext}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {
        }}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className=' '>
              <div className='absolute right-[41rem] top-[20rem]'>
                <div className='inline-block mr-[12rem]'>
                  <CursorClickIcon className='w-5 h-5 text-blue-400 inline-block mr-3'/> <span
                  className='text-white text-2xl'>Ramainder</span></div>
                <XIcon
                  className='w-10 h-10 inline-block text-gray-400 cursor-pointer hover:text-white hover:transition duration-500 ease-in-out hover:rotate-90 '
                  onClick={closeModal}/>
              </div>
            </div>
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-sm font-medium leading-6 text-gray-400 p-1"
                  ><BriefcaseIcon className='h-4 w-4 inline-block mr-2'/>
                    My Work
                  </Dialog.Title>
                  <div className="m-2">
                    <input type="text" placeholder='Remainder Name or type "/" for comment'
                           className='w-full p-2 outline-none text-xl bg-transparent text-gray-400 placeholder:text-xl'/>
                  </div>
                  <hr/>
                  <div className='flex justify-between'>
                    <div className="mt-4">
                      <DocumentDownloadIcon className='w-6 h-6 inline-block text-gray-400'/>
                      <span className='text-xs text-red-400 font-light ml-1'>Today</span>
                      <Popover className={'inline-block ml-1'}>
                        <Popover.Button className={'outline-none'}>
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
                      <BellIcon className='w-6 h-6 inline-block text-blue-400 ml-1'/>
                      <span onClick={closeModal} className='m-1'>
                        <Button text={'Save'}/>
                      </span>
                    </div>
                    <div className="mt-4">
                      <ArrowLeftIcon className='w-4 h-4 inline-block  mr-2'/>
                      <span className='text-xs font-light'>to create</span>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default RemainderPopOver