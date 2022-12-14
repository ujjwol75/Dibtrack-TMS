import React from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import FlyoutMenu from '../dashboard/FlyoutMenu'
import ProfileHeader from './ProfileHeader'
import ViewProfileTab from './ViewProfileTab'

type Props = {
  user: any
}

const ViewProfile = ({user}: Props) => {

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
        <td className="p-3 cursor-pointer" onClick={openModal} >
              <span className="flex flex-row">
              <FlyoutMenu user = {user} />
              {/* <CircleUserIcon size="sm" /> */}

             <span className="ml-2">{user.profile.full_name}</span> 
              </span>
              
        </td>

        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"/>
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
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
                <Dialog.Panel className="w-[45%] transform overflow-hidden rounded-md bg-white py-6 text-left
                 align-middle shadow-xl transition-all absolute right-0 h-screen   border-t border-btncolor">
                  <div>
                    <ProfileHeader user={user}/>
                    <ViewProfileTab/>
                    <button
                      type="button"
                      className=" z-100 absolute -left-24 top-20 rounded-md  bg-white opacity-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-500 focus:outline-none"
                      onClick={closeModal}
                    >
                      X
                    </button>
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

export default ViewProfile