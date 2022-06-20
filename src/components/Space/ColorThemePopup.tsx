import {Dialog, Transition} from "@headlessui/react";
import {ChevronLeftIcon} from "@heroicons/react/solid";

import {Fragment, useState} from "react";
import CircleUserIcon1 from "../../Reusable/CircleUserIcon/icon1";
import ColorDiv from "./ColorDiv";

type Props = {
  handleSubmit: any;
  isopen: boolean;
  closeModal: any;
  openModal: any;
};

const ThemeColors = [
  "bg-blue-500",
  "bg-blue-400",
  "bg-red-500",
  "bg-purple-600",
  "bg-orange-700",
];

const ColorThemePopup = (
  {
    handleSubmit,
    isopen,
    closeModal,
    openModal,
  }: Props) => {
  const [color, setThemeColor] = useState<string>("bg-green-500");
  
  return (
    <div>
      <button
        className="w-full bg-btncolor mt-5 p-4 text-white "
        onClick={openModal}
      >
        Next
      </button>

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
                  className="w-[800px] h-[500px] transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                  <div className=" w-full mt-2 bg-bgsearchbar flex flex-col">
                    <div className="flex flex-row justify-around p-4 border-b border-gray-200">
                      <ChevronLeftIcon
                        className="h-6 w-6 text-gray-400 mt-3"
                        onClick={closeModal}
                      />
                      <span className="text-gray-500 text-2xl">
                        Space color or Avatar
                      </span>
                      <span
                        className="py-2 px-3 bg-blue-400 "
                        onClick={closeModal}
                      >
                        <span className="hover:rotate-180 flex justify-center items-center">
                          X
                        </span>
                      </span>
                    </div>

                    <div className="w-full  bg-bgsearchbar flex flex-row  mt-20 pl-20">
                      <CircleUserIcon1 size="lg" color={color}/>
                      <div className="ml-12">
                        <span className="text-gray-400 text-md">
                          SPACE COLORS
                        </span>
                        <div className="flex flex-row mt-2">
                          {ThemeColors?.map((ThemeColor) => (
                            <ColorDiv
                              color={ThemeColor}
                              setThemeColor={setThemeColor}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      className="flex flex-row w-full p-3 mt-20 text-white bg-btncolor flex justify-center items-center text-lg">NEXT
                    </button>
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

export default ColorThemePopup;

function e(e: any) {
  throw new Error("Function not implemented.");
}
