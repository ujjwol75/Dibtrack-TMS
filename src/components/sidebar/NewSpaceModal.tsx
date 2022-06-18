import React from "react";
import {Dialog, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";
import {PlusIcon} from "@heroicons/react/solid";
import ModalTabs from "./ModalTabs";

type Props = {};

const NewSpaceModal = (props: Props) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div
        className="flex flex-row justify-center w-[90%] mx-auto bg-bgsearchbar py-2 
                                   rounded-sm hover:bg-gray-300 text-xs"
        onClick={openModal}
      >
        <span>
          <PlusIcon className="h-4 w-3 text-xs"/>
        </span>
        <span className="text-[12px] ml-1 ">NEW SPACE</span>
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
                <Dialog.Panel
                  className="w-[800px] h-[500px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-row justify-around">
                    <h1 className="text-center text-4xl text-gray-300 ">CREATE NEW SPACE</h1>
                    <div>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        X
                      </button>
                    </div>
                  </div>
                  <ModalTabs/>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default NewSpaceModal;
