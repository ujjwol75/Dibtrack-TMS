
import { Dialog, Transition } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

import { Fragment, useState } from "react";

type Props = {
    handleSubmit : any
    isopen: boolean
    closeModal : any
    openModal: any
}

const ColorThemePopup = ({handleSubmit , isopen , closeModal ,openModal}: Props) => {

  
  return (
    <div>
     <button  className='w-full bg-btncolor mt-5 p-4 text-white ' onClick={handleSubmit}>Next</button>

      <Transition appear show={isopen} as={Fragment}>
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
                <Dialog.Panel className="w-[800px] h-[500px] transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                 
                 <div className=" w-full mt-2">
                       <div className="flex flex-row justify-around p-4 ">
                           <ChevronLeftIcon className="h-5 w-5 text-gray-400 mt-2" onClick={closeModal()}/>
                           <span className="text-gray-500 text-2xl">Space color or Avatar</span>
                           <span className="py-2 px-3 hover:bg-blue-400 " onClick={closeModal}>X</span>
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
}

export default ColorThemePopup

function e(e: any) {
    throw new Error("Function not implemented.");
}
