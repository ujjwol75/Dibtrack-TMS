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
} from "@heroicons/react/solid";
import UserInfoPopup from "../../Reusable/CircleUserIcon/UserInfoPopup";
import CircleUserIcon from "../../Reusable/CircleUserIcon";
import { add } from "date-fns";
import AddTask from "./AddTask";

type Props = {};

const Task_popover = (props: Props) => {
  // const [close, setClose] = useState(false)
  const [userInput, setUserInput] = useState("");
  const [addTask, setAddTask] = useState(false);
  const [addTaskArr, setAddTaskArr] = useState([])
  const [addCheckList, setAddCheckList] = useState(false);
  const [submit, setSubmit] = useState(false)

  const handleForm=(e:any)=>{
    e.preventDefault()
  }

  const handleSubmit = ()=>{
    setSubmit(!submit)
    console.log("ram")  
    if (addTask && !submit){
      return <AddTask />
    }          
     
         
   
  }
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
            <XIcon className="w-8 text-gray-500" />
          </div>
        </div>

        <div className="flex flex-row justify-between items-center mt-4">
          <div className="flex flex-row">
            <p className="ml-2 mr-2">In</p>

            <div className="mr-2 relative">
            <Tab.Group>
      <Tab.List>
        <Tab>Tab 1</Tab>
        
      </Tab.List>
      <Tab.Panels className="w-40px bg-red-400">
        <Tab.Panel>Content 1</Tab.Panel>
        
      </Tab.Panels>
    </Tab.Group>
              {/* <Tab.Group>
                <Tab.List>
                  <Tab>
                  <input
                    className="cursor-pointer shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="List"
                  />
                  </Tab>
               
                </Tab.List>
                <Tab.Panels className="bg-red">
                  <Tab.Panel>
                  <div className="flex flex-row">
                      <PlusSmIcon className="w-6" />
                      <textarea
                        className="form-control w-[15rem] px-3 py-1.5 text-base font-normal mt-6 text-gray-500 bg-white  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlTextarea1"
                        placeholder="Search Spaces, Folders, Lists"
                      ></textarea>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group> */}
                  
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
                  setAddTask(false)
                }}
              >
                Add Checklist
              </p>
            </div>
          </div>

          { addTask ? (
            <form onSubmit={handleForm}>
            <span className="flex flex-start ml-4 my-2">tasks</span>
            
            <div className="flex flex-row mx-2 ml-4">
            <StopIcon className="w-4" />
            <input
              type="text"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
              className="w-[30rem] bg-white outline-none border-gray-200 border mx-2"
            />
            <PlusSmIcon className="w-8 cursor-pointer text-red-500 hover:bg-red-200" onClick={handleSubmit}/>
           
            <StopIcon className="w-6 ml-4 mr-2" />
            <TrashIcon className="w-6" />
            
           
            
          </div>
            
          </form>
          ) : null}
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
