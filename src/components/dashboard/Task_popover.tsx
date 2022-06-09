import React from "react";
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
} from "@heroicons/react/solid";

type Props = {};

const Task_popover = (props: Props) => {
  return (
    <div>
      <Popover.Panel className="absolute z-10 bg-white drop-shadow-lg right-10 bottom-[12rem] w-[38rem] ">
        <div className="flex flex-row justify-between text-center">
          <div className="flex flex-row">
            <PlusSmIcon className="w-7 -mt-4" />
            <textarea
              className="form-control w-full px-3 py-1.5 text-base font-normal mt-6 text-gray-500 bg-white  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlTextarea1"
              placeholder="Task name or type '/' for commands"
            ></textarea>
          </div>
          <div className="flex flex-row">
            <PlusSmIcon className="w-8 -mt-4" />
            <PlusSmIcon className="w-8 -mt-4" />
          </div>
        </div>

        <div className="flex flex-row justify-between text-center mt-4">
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

            <div className="ml-2 w-6 bg-yellow-500 rounded-full h-6 text-sm justify-center items-center flex">
              <p>UN</p>
            </div>
          </div>

          <div className="mr-2">
            <Menu>
              <Menu.Button>More</Menu.Button>
              <Menu.Items>
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

        <div className="flex flex-row justify-between mt-4 mx-2">
          <div className="flex flex-row">
            <PlusSmIcon className="w-6" />
            <p>Add Subtask</p>
          </div>
          <div className="flex flex-row">
            <PlusSmIcon className="w-6" />
            <p>Add Checklist</p>
          </div>
        </div>

        <div className="flex flex-row justify-start ml-4 mt-4 relative">
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
                    <PlusSmIcon className="w-6" />
                    <p>Dropbox</p>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="flex flex-row justify-start">
                    <PlusSmIcon className="w-6" />
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

        <div className="flex flex-row mt-1 ml-1">
          <PlusSmIcon className="w-6" />
          <p>
            Drag & Drop files to attach or{" "}
            <span className="text-red-500 border-dashed border-b border-red-500">
              <a href="">Browse</a>{" "}
            </span>
          </p>
        </div>
      </Popover.Panel>
    </div>
  );
};

export default Task_popover;
