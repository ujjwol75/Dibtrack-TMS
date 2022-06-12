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
  TrashIcon,
  SearchCircleIcon,
  FolderOpenIcon,
} from "@heroicons/react/solid";
import UserInfoPopup from "../../Reusable/CircleUserIcon/UserInfoPopup";
import CircleUserIcon from "../../Reusable/CircleUserIcon";
import { add } from "date-fns";
import AddTask from "./AddTask";

type Props = {
  close: boolean;
  setClose: any;
};

const Task_popover = ({ close, setClose }: Props) => {
  // const [close, setClose] = useState(false)
  const [userInput, setUserInput] = useState("");
  const [addTask, setAddTask] = useState(false);
  const [addTaskArr, setAddTaskArr] = useState([]);
  const [addCheckList, setAddCheckList] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    <AddTask />;
  };

  return (
    <div>
      <Popover.Panel className="absolute z-10 bg-white drop-shadow-lg -right-[1rem] bottom-[5rem] w-[38rem] text-gray-500 h-[32rem] overflow-scroll">
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
            <XIcon
              className="w-8 text-gray-500"
              onClick={() => {
                setClose(close);
                console.log("hello", close);
              }}
            />
          </div>
        </div>

        <div className="flex flex-row justify-between items-center mt-4">
          <div className="flex flex-row">
            <p className="ml-2 mr-2">In</p>

            <div className="mr-2 relative">
              <Popover className="relative">
                <Popover.Button className="cursor-pointer">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="List"
                    className="rounded-full p-1 border border-black-500"
                  />
                </Popover.Button>

                <Popover.Panel className="absolute z-10 bg-white w-[10rem] mt-2">
                  <div className="bg-white w-[18rem] drop-shadow-md rounded-lg">
                    <Disclosure>
                      <Disclosure.Button className="mt-2">
                        <div className="flex flex-row">
                          <SearchCircleIcon className="w-6 mr-2" />
                          <input
                            type="text"
                            className="rounded-full p-1 border border-black-500"
                          />
                        </div>
                        <hr className="mt-2" />
                        <div className="flex flex-row mt-2">
                          <ChevronRightIcon className="w-4" />
                          <div className="w-6 h-6 bg-gray-500 text-white justify-center">
                            <h1>S</h1>
                          </div>
                          <p className="text-black ml-2">Space</p>
                        </div>
                      </Disclosure.Button>
                      <Disclosure.Panel>
                        <Disclosure>
                          <Disclosure.Button className="mt-2 -ml-[8rem]">
                            <div className="flex flex-row justify-between">
                              <div className="flex ">
                                <ChevronRightIcon className="w-3 mr-1" />
                                <FolderOpenIcon className="w-4 mr-1" />
                                <p>hello</p>
                              </div>
                              <div>
                                <PlusSmIcon className="w-4 cursor-pointer hover:bg-red-300" />
                              </div>
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Panel className="-ml-[10rem]">
                            <p className="pb-3">Hi!</p>
                          </Disclosure.Panel>
                        </Disclosure>
                      </Disclosure.Panel>
                    </Disclosure>
                  </div>
                </Popover.Panel>
              </Popover>
            </div>

            <p className="mr-2">For</p>

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

        <div className="relative">
          <div className="flex flex-row justify-between mt-4 mx-2 text-black">
            <div className="flex flex-row">
              <PlusSmIcon className="w-6" />
              <p
                onClick={() => {
                  setAddTask(!addTask);
                  setAddCheckList(false);
                }}
              >
                Add Subtask
              </p>
            </div>
            <div className="flex flex-row">
              <PlusSmIcon className="w-6" />
              <p
                onClick={() => {
                  setAddCheckList(!addCheckList);
                  setAddTask(false);
                }}
              >
                Add Checklist
              </p>
            </div>
          </div>

          {addTask ? <AddTask /> : null}
        </div>

        {addCheckList ? (
          <div>
            <span className="flex flex-start ml-2 my-2">
              CHECKLIST <span>(0/0)</span>
            </span>
            <div className="flex flex-row mx-2">
              <PlusSmIcon className="w-4 ml-4" />
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="w-[10rem] bg-white outline-none border-gray-200 border mx-2"
              />
              <i className="p-1 h-fit border-2 border-dashed rounded-full hover:text-btncolor hover:border-btncolor cursor-pointer">
                <StarIcon className="w-7 h-7" />
              </i>
            </div>
          </div>
        ) : null}

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
