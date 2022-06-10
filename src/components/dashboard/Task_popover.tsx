import React, { useState } from "react";
import { Tab, Menu, Transition, Disclosure, Popover } from "@headlessui/react";
import {
  SearchIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  TicketIcon,
  ChevronRightIcon,
  PlusSmIcon,
  ChevronDoubleUpIcon,
  ViewGridIcon,
  ClockIcon,
  StarIcon,
  CalendarIcon,
  EyeIcon,
  StopIcon,
  XIcon,
  ExternalLinkIcon,
  UploadIcon,
  CloudIcon,
} from "@heroicons/react/solid";
import UserInfoPopup from "../../Reusable/CircleUserIcon/UserInfoPopup";
import CircleUserIcon from "../../Reusable/CircleUserIcon";

type Props = {};

const Task_popover = (props: Props) => {
  // const [close, setClose] = useState(false)
  return (
    <div>
      <Popover.Panel className="absolute z-10 bg-white drop-shadow-lg -right-[3rem] bottom-[5rem] w-[38rem] text-gray-500">
        <div className="flex flex-row justify-between items-center mx-2">
          <div className="flex flex-row">
            <StopIcon className="w-7 text-gray-500" />
            <textarea
              className="form-control w-full px-3 py-1.5 text-base font-normal mt-8 text-gray-500 bg-white  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlTextarea1"
              placeholder="Task name or type '/' for commands"
            ></textarea>
          </div>
          <div className="flex flex-row">
            <ExternalLinkIcon className="w-8 text-gray-500" />
            <XIcon className="w-8 text-gray-500" />
          </div>
        </div>

        <div className="flex flex-row justify-between items-center mt-4">
          <div className="flex flex-row">
            <p className="ml-2 mr-2">In</p>

            <div className="mr-2 relative">
              <Menu>
                <Menu.Button>
                  <input
                    className="cursor-pointer shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="List"
                  />
                </Menu.Button>
                <Menu.Items className="absolute w-[15rem] bg-white drop-shadow-lg mt-3 rounded-lg">
                  <Menu.Item>
                    <div className="flex flex-row">
                      <PlusSmIcon className="w-6" />
                      <textarea
                        className="form-control w-[15rem] px-3 py-1.5 text-base font-normal mt-6 text-gray-500 bg-white  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlTextarea1"
                        placeholder="Search Spaces, Folders, Lists"
                      ></textarea>
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <div>
                      <Disclosure>
                        <Disclosure.Button className="py-2 -ml-[10rem]">
                          <div className="flex flex-row justify-start">
                            <ChevronDownIcon className="w-6" />
                            <p>Space</p>
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                          {/* <div>
                            <Disclosure>
                              <Disclosure.Button className="py-2 -ml-[14rem]">
                                <div className="flex flex-row justify-start">
                                  <ChevronDownIcon className="w-6" />
                                  <p>Space</p>
                                </div>
                              </Disclosure.Button>
                              <Disclosure.Panel className="text-gray-500">
                                <h1>hello</h1>
                              </Disclosure.Panel>
                            </Disclosure>
                          </div> */}
                        </Disclosure.Panel>
                      </Disclosure>
                    </div>
                  </Menu.Item>
                  <hr />
                </Menu.Items>
              </Menu>
            </div>

            <p className="mr-2">For</p>

            {/* <div className="ml-2 w-6 bg-yellow-500 rounded-full h-6 text-sm justify-center items-center flex">
              <p>UN</p>
            </div> */}
            {/* <UserInfoPopup size='md'/> */}
            <span>
              <Popover>
                <Popover.Button>
                  <CircleUserIcon size="md" />
                </Popover.Button>
                <Popover.Panel className="absolute z-10 mt-3">
                  <UserInfoPopup />
                </Popover.Panel>
              </Popover>
            </span>
          </div>

          <div className="mr-2 relative">
            <Menu>
              <Menu.Button className="border px-2 flex">
                <p>3/3</p> 
                <ChevronDownIcon className="w-3" />
              </Menu.Button>
              <Menu.Items className="absolute bg-white drop-shadow-lg px-16 rounded-md mt-2 -right-2">
                <Menu.Item>
                  <p>1</p>
                </Menu.Item>
                <Menu.Item>
                  <p>1</p>
                </Menu.Item>
                <Menu.Item>
                  <p>1</p>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>

        <div className="mt-5">
          <textarea
            className="
                form-control
                block
                w-[36rem]
                px-3
                py-6
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-black-600 focus:outline-none
                mx-4
            "
            id="exampleFormControlTextarea1"
            placeholder="Description or type '/' for commands"
          ></textarea>
        </div>

        <div className="flex flex-row justify-between mt-4 mx-2 text-black">
          <div className="flex flex-row">
            <PlusSmIcon className="w-6" />
            <p>Add Subtask</p>
          </div>
          <div className="flex flex-row">
            <PlusSmIcon className="w-6" />
            <p>Add Checklist</p>
          </div>
        </div>

        <div className="flex flex-row justify-start ml-4 mt-4 relative text-black">
          <p className="mr-2">Attachments</p>
          <Menu>
            <Menu.Button className="flex flex-row border">
              Add <PlusSmIcon className="w-4" />
            </Menu.Button>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute top-7 -right-20 bg-white w-[12rem] drop-shadow-lg rounded-md pl-2">
                <Menu.Item>
                  <div className="flex flex-row justify-start">
                    <PlusSmIcon className="w-6" />
                    <p>Upload file</p>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="flex flex-row justify-start">
                    <UploadIcon className="w-6" />
                    <p>Dropbox</p>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="flex flex-row justify-start">
                    <CloudIcon className="w-6" />
                    <p>OneDrive/Sharepoint</p>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="flex flex-row justify-start">
                    <PlusSmIcon className="w-6" />
                    <p>Box</p>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="flex flex-row justify-start">
                    <PlusSmIcon className="w-6" />
                    <p>Google Drive</p>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="flex flex-row justify-start">
                    <PlusSmIcon className="w-6" />
                    <p>New Google Doc</p>
                  </div>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="flex flex-row mt-1 ml-1 ">
          <PlusSmIcon className="w-6" />
          <p>
            Drag & Drop files to attach or{" "}
            <input type="file" className="text-btncolor" />
          </p>
        </div>

        <div className="flex flex-row justify-between items-center mx-2">
          <span className="px-4 flex gap-4 mt-12 mb-6">
            <i className="p-1 h-fit border-2 border-dashed rounded-full hover:text-btncolor hover:border-btncolor cursor-pointer">
              <ClockIcon className="w-7 h-7" />
            </i>
            <i className="p-1 h-fit border-2 border-dashed rounded-full hover:text-btncolor hover:border-btncolor cursor-pointer">
              <StarIcon className="w-7 h-7" />
            </i>
            <i className="p-1 h-fit border-2 border-dashed rounded-full hover:text-btncolor hover:border-btncolor cursor-pointer">
              <CalendarIcon className="w-7 h-7" />
            </i>
            <i className="p-1 h-fit border-2 border-dashed rounded-full hover:text-btncolor hover:border-btncolor cursor-pointer">
              <StarIcon className="w-7 h-7" />
            </i>
            <i className="p-1 h-fit border-2 border-dashed rounded-full hover:text-btncolor hover:border-btncolor cursor-pointer">
              <CalendarIcon className="w-7 h-7" />
            </i>
            <EyeIcon className="w-7 h-7 cursor-pointer text-red-500 mt-1" />
          </span>
          <div className="mt-4 text-white">
            <button
              type="submit"
              className="border p-2 mr-1 px-4 bg-red-400 hover:bg-red-500 "
            >
              Create Task
            </button>
            <button
              type="submit"
              className="border py-2 h-10 bg-red-400 hover:bg-red-500"
            >
              <ChevronUpIcon className="w-4" />
            </button>
          </div>
        </div>
      </Popover.Panel>
    </div>
  );
};

export default Task_popover;
