import {Dialog, Transition} from '@headlessui/react'
import {XIcon} from '@heroicons/react/outline'
import React, {Fragment} from 'react'

type Props = {
  isOpen: boolean,
  setIsOpen: any,
  children: any,
  title: string,
  screenSize?: boolean
}

const CommentModal = (props: Props) => {
  const {isOpen, setIsOpen, children, title, screenSize = false} = props
  return (

    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
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

        <div className="fixed inset-0 overflow-y-auto ">
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
                className={`${screenSize ? "max-w-7xl h-[40rem]" : "max-w-md"} absolute h-screen w-[60rem]  transform overflow-hidden rounded-lg bg-white text-left right-0 shadow-xl transition-all `}>
                <Dialog.Title
                  as="h3"
                  className="text-lg flex justify-between items-align-center font-medium leading-6 text-gray-900 bg-gray-200 p-4"
                >
                  <span>
                    {title}
                  </span>
                  <span title='Close' onClick={() => setIsOpen(false)}>
                    <XIcon
                      className='border border-gray-700 rounded-lg h-7 w-7 hover:border-btncolor hover:text-btncolor'/>
                  </span>
                </Dialog.Title>
                <div className=''>
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default CommentModal