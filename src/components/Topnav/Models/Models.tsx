import { Transition, Dialog, Switch } from '@headlessui/react'
import { GlobeAltIcon, LinkIcon, IdentificationIcon, LockClosedIcon } from '@heroicons/react/solid'
import React, { Fragment, useState } from 'react'

type Props = { 
  isOpen:any
  ,closeModal:any
}

const Model = (props: Props) => {
  const { isOpen , closeModal} = props
  const [enabled, setEnabled] = useState(false)
  const [enabled1,setEnabled1] = useState(false)
  const [enabled2,setEnabled2] = useState(false)
  return (
    <>
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
                <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                      Share this view
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                        Sharing list as a single view <br/>
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                        </p>
                      </div>
                      <div className='py-2 flex flex-row justify-between items-center'>
                        <div className='flex flex-row'>
                          <span><GlobeAltIcon className='h-5 w-5'/></span>  
                          <span>Public link</span>
                        </div>
                        <div>
                          <span>
                            <div className="py-4">
                              <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
                                  relative inline-flex h-6 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                              >
                                <span className="sr-only">Use setting</span>
                                <span
                                  aria-hidden="true"
                                  className={`${enabled ? 'translate-x-4' : 'translate-x-0'}
                                    pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                              </Switch>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className='py-2 flex flex-row justify-between items-center'>
                        <div className='flex flex-row'>
                          <span><LinkIcon className='h-5 w-5'/></span>  
                          <span>Private link</span>
                        </div>
                        <div>
                          <span className='border rounded-lg px-4 py-1'>Copy link</span>
                        </div>
                      </div>
                      <div className='py-2 flex flex-row justify-between items-center'>
                        <div className='flex flex-row'>
                          <span><IdentificationIcon className='h-5 w-5'/></span>  
                          <span>Protect view</span>
                        </div>
                        <div>
                          <span>
                            <div className="py-4">
                              <Switch
                                checked={enabled1}
                                onChange={setEnabled1}
                                className={`${enabled1 ? 'bg-teal-900' : 'bg-teal-700'}
                                  relative inline-flex h-6 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                              >
                                <span className="sr-only">Use setting</span>
                                <span
                                  aria-hidden="true"
                                  className={`${enabled1? 'translate-x-4' : 'translate-x-0'}
                                    pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                              </Switch>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className='py-2 flex flex-row justify-between items-center'>
                        <div className='flex flex-row'>
                          <span><LockClosedIcon className='h-5 w-5'/></span>  
                          <span>Private link</span>
                        </div>
                        <div>
                          <span>
                            <div className="py-4">
                              <Switch
                                checked={enabled2}
                                onChange={setEnabled2}
                                className={`${enabled2 ? 'bg-teal-900' : 'bg-teal-700'}
                                  relative inline-flex h-6 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                              >
                                <span className="sr-only">Use setting</span>
                                <span
                                  aria-hidden="true"
                                  className={`${enabled2 ? 'translate-x-4' : 'translate-x-0'}
                                    pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                              </Switch>
                            </div>
                          </span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Got it, thanks!
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

export default Model