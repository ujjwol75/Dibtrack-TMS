import { ChevronUpIcon, PlusIcon, UserAddIcon } from "@heroicons/react/solid";
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
type Props = {};

const UserModal = (props: Props) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <div className="flex flex-row " onClick={openModal}>
        <div className="h-8 w-8 rounded-full bg-profilecolor text-white p-2 text-center text-xs">
          P
        </div>
        <ChevronUpIcon className="h-4 w-4 text-gray-400 ml-1 mt-2" />
      </div>

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
                <Dialog.Panel className="w-[450px]  h-[435px] absolute md:bottom-3 md:left-[30px]   transform overflow-hidden rounded-md bg-white p-2 text-xs  shadow-2xl transition-all">
                  <div className="flex flex-row   w-full">
                    {/* column 1 */}
                    <div className="flex flex-col p- 2 text-center w-[35px]  h-[500px]  border-r border-gray-200 mt-4 ">
                      <div className="h-7 w-7 bg-profilecolor rounded-full text-white">
                        <small className="mt-4">p</small>
                      </div>
                      <div className="h-7 w-7  rounded-full  text-white border-2 border-dotted border-gray-600 mt-2">
                        <PlusIcon className="h-2 w-2 text-gray-500 text-xs m-2" />
                      </div>
                    </div>

                    {/* column 2 */}

                    <div className="flex flex-col w-[200px] border-r border-gray-200 text-md text-gray-600  content-start text-gray-500 p-3">
                      <span className="inline-flex">
                        <div className="h-8 w-8 rounded-full bg-profilecolor text-white p-2 text-center text-xs">
                          P
                        </div>

                        <p className="mt-2 ml-2">my workspace</p>
                      </span>

                      <div className="mt-3 flex flex-row mt-3">Settings</div>
                      <div className="mt-3 flex flex-row mt-3">
                        Import/Export
                      </div>
                      <div className="mt-3 flex flex-row mt-3">
                        <p>People</p>
                        <Link to  = "/dashboard">
                        <button className="bg-btncolor px-2 text-white rounded hover:bg-blue-500 py-1 ml-1 focus:outline-none " onClick={closeModal}>
                          <span className="flex fex-row">
                            <UserAddIcon className="h-4 w-3" />
                            <p className="ml-2">invite</p>
                          </span>
                        </button></Link>
                      </div>
                      <div className="mt-3 flex flex-row mt-3">Clickapps</div>
                      <div className="mt-3 flex flex-row mt-3">Spaces</div>
                      <div className="mt-3 flex flex-row mt-3">
                        Integrations
                      </div>
                      <div className="mt-3 flex flex-row mt-3">
                        Template center
                      </div>
                      <div className="mt-3 flex flex-row mt-3">Trash</div>

                      <hr className="mt-5 mb-5 bg-gray-500" />

                      <button className="bg-btncolor px-4 text-white rounded hover:bg-blue-500 py-2">
                        upgrade
                      </button>

                      <div className="mt-3 flex flex-row mt-3">permissions</div>
                    </div>

                    {/* third column */}

                    <div className="flex flex-col w-[200px]  text-md text-gray-600  content-start text-gray-500 p-3">
                      <span className="flex flex-row ">
                        <div className="h-8 w-8 rounded-full bg-profilecolor text-white p-2 text-center text-xs">
                          P
                        </div>

                        <p className="mt-2 ml-2"> user name</p>

                        <div className="justify-self-end">
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-sm  border border-transparent bg-blue-100 px-1 ml-4 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            X
                          </button>
                        </div>
                      </span>

                      <div className="mt-3 flex flex-row mt-3"> My Settings</div>
                      <div className="mt-3 flex flex-row mt-3">
                        Notifications
                      </div>
                      <div className="mt-3 flex flex-row mt-3">
                        Layout size and style
                      </div>
                      <div className="mt-3 flex flex-row mt-3">Apps</div>
                      <div className="mt-3 flex flex-row mt-3">Rewards</div>
                      <div className="mt-3 flex flex-row mt-3">
                        Logout
                      </div>
                       
                       <hr className="mb-5 mt-5"/>
                      <div className="mt-3 flex flex-row mt-5">
                        Help
                      </div>
                      <div className="mt-3 flex flex-row mt-5">Hotkeys</div>

                      
                      

                      <div className="mt-3 flex flex-row mt-3">Dark Mode</div>
                    </div>
                  </div>

                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default UserModal;
