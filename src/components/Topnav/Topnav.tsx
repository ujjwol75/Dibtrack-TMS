import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'
import Down from '../Down/Down';
import Models from '../Models/Models'
import View from '../View/View'
import { Popover } from '@headlessui/react';
import {
    ViewListIcon,
    ViewBoardsIcon,
    PlusIcon,
    ShareIcon,
    DesktopComputerIcon,
    SearchIcon,
    ChevronLeftIcon,
    ChevronDownIcon,
    FilterIcon,
    DuplicateIcon,
    LinkIcon,
    UserIcon,
    UsersIcon,
    EyeIcon,
    QuestionMarkCircleIcon,
    AnnotationIcon,
    SelectorIcon,
    CheckIcon,
    TagIcon,
    CalendarIcon,
    XCircleIcon,
    PencilIcon,
    ChevronRightIcon,
    SparklesIcon,
    AdjustmentsIcon,
    MenuAlt1Icon,
    TableIcon,
    MapIcon,
    TrendingUpIcon,
    NewspaperIcon,
    ChatIcon,
    CodeIcon,
    MenuAlt4Icon,
    XIcon,
    ExclamationCircleIcon,
    InformationCircleIcon,
    TemplateIcon,
    GlobeAltIcon,
    IdentificationIcon,
    LockClosedIcon
}from "@heroicons/react/solid";

type Props = {}

const Navbar = (props: Props) => {
  let [isOpen, setIsOpen] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const [enabled1,setEnabled1] = useState(false)
  const [enabled2,setEnabled2] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>
    <div className='flex flex-row justify-between items-center border-b-2 px-4 py-2'>
        <div>
            <Tab.Group>
                <Tab.List className="flex flex-row">
                    <Tab as={"span"} className='cursor-pointer'>
                      {({ selected }) => (
                          <>
                            <span
                              className={
                                  selected ? 'border-transparent flex flex-row text-gray-500 hover:text-gray-700 whitespace-nowrap items-center px-2 py-1 border-b-2  font-bold text-lg border-gray-400':" flex flex-row px-2 py-1 items-center font-bold text-lg "}
                            >
                              <span className='font-bold text-xl border rounded-lg bg-gray-400 text-white p-3 px-6'>S</span>
                              <span className=''>Space</span>
                            </span>
                          </>  
                          
                      )}
                    </Tab>
                    <Tab as={"span"} className='cursor-pointer'>
                      {({ selected }) => (
                          <>
                            <span
                              className={
                                  selected ? 'border-transparent flex flex-row text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap items-center px-2 py-4 border-b-2 font-bold text-lg':"px-2 py-4 flex flex-row items-center font-bold text-lg"}
                            >
                              <span className='border-l-2 border-gray-400 pl-3'><ViewListIcon className='h-7 w-5'/></span>  
                              <span className='border-r-2 border-gray-400 pr-3'>List</span>
                            </span>
                          </>  
                          
                      )}
                    </Tab>
                   <Tab as={"span"} className='cursor-pointer'>
                      {({ selected }) => (
                          <>
                            <span
                              className={
                                  selected ? 'border-transparent flex flex-row text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap items-center border-b-2 py-4 px-2 font-bold text-lg':" flex flex-row items-center font-bold text-lg py-4 px-2"}
                            >
                              <span><ViewBoardsIcon className='h-5 w-5'/></span>  
                              <span className='border-r-2 border-gray-400 pr-3'>Board</span>
                            </span>
                          </>  
                          
                      )}
                   </Tab>
                   <Tab as={"span"} className='cursor-pointer'>
                      {({ selected }) => (
                          <>
                            <span
                              className={
                                  selected ? 'border-transparent flex flex-row text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap items-center px-2 py-4 border-b-2 font-bold text-lg':"px-2 py-4 flex flex-row items-center font-bold text-lg"}
                            >
                              <Popover className="relative">
                                <Popover.Button>
                                  <div className='flex flex-row cursor-pointer items-center'>
                                    <span><PlusIcon className='h-5 w-5'/></span>  
                                    <span className=''>View</span>
                                  </div>
                                </Popover.Button>
                                <View/>
                              </Popover>
                            </span>
                          </>  
                          
                      )}
                  </Tab>
                </Tab.List>
                <Tab.Panels>
                    {/* <Tab.Panel>Content 1</Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel> */}
                    <Tab.Panel>
                        
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
        <div>
            <Tab.Group>
              <div className=''>
                <Tab.List className='flex flex-row space-x-2'>
                    <Tab className='flex flex-row px-5 py-2 items-center cursor-pointer border rounded-lg'>
                      <DesktopComputerIcon className='h-5 w-5'/>
                      <span className='text-lg border-r-2 pr-2'>Automate</span>
                      {/* <span><ChevronDownIcon className='h-5 w-5'/></span> */}
                      <Popover className="relative">
                        <Popover.Button><span><ChevronDownIcon className='h-5 w-5'/></span></Popover.Button>

                        <Popover.Panel className="absolute automate z-10 border w-60 bg-white p-4">
                          <div className="grid grid-cols-1">
                            <div className='text-left py-2'>
                              <span>CUSTOMIZE SPACE</span>
                            </div>
                            <div className='text-left flex flex-row py-2'>
                              <span><SparklesIcon className='h-5 w-5'/></span>
                              <span>Templates</span>
                            </div>
                            <div className='text-left flex flex-row py-2'>
                              <span><PencilIcon className='h-5 w-5'/></span>
                              <span>Statuses</span>
                            </div>
                          </div>

                          <img src="/solutions.jpg" alt="" />
                        </Popover.Panel>
                      </Popover>
                    </Tab>
                    <Tab className='flex flex-row px-5 py-2 items-center border rounded-lg'>
                      {/* <div className='flex flex-row items-center'>
                        <ShareIcon className='h-5 w-5'/>
                        <span className='text-lg'>Share</span>
                      </div> */}
                      {/* <ShareIcon className='h-5 w-5'/>
                      <span className='text-lg'>Share</span> */}
                      <div className=" flex items-center justify-center">
                          <button
                            type="button"
                            onClick={openModal}
                            // className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                          >
                          <div className='flex flex-row items-center'>
                            <ShareIcon className='h-5 w-5'/>
                            <span className='text-lg'>Share</span>
                          </div>  
                          </button>
                        </div>
                        <Models isOpen={isOpen} closeModal={closeModal} />
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    {/* <Tab.Panel>content 1</Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel> */}
                </Tab.Panels>
              </div>  
            </Tab.Group>
        </div>
    </div>
    <div className='container-2 flex flex-row items justify-between px-5 py-2'> 
      <div className='flex flex-row items-center cursor-pointer'>
        <SearchIcon className='h-5 w-5'/>
        <input className='border-r-2 outline-none'/>
        <Popover className="relative">
          <Popover.Button><ChevronDownIcon className='h-5 w-5'/></Popover.Button>

          <Popover.Panel className="absolute z-10 border w-52">
            <div className="grid grid-cols-1 p-4">
              <Down enabled={enabled} setEnabled={setEnabled} name={"Task Name"}/>
              <Down enabled={enabled1} setEnabled={setEnabled1} name={"Task Description"}/>
              <Down enabled={enabled2} setEnabled={setEnabled2} name={"Custom Field"}/>
            </div>

            <img src="/solutions.jpg" alt="" />
          </Popover.Panel>
        </Popover>
      </div>
      <div>
        <Tab.Group>
          <Tab.List className='flex flex-row items-center' >
            <Tab className='px-5 py-2 flex flex-row hover:bg-gray-300'>
              {/* <div className='flex flex-row'>
                <FilterIcon className='h-5 w-5'/>
                <span>Filter</span>
              </div> */}
              <Popover className="relative">
                <Popover.Button>
                  <div className='flex flex-row'>
                    <FilterIcon className='h-5 w-5'/>
                    <span>Filter</span>
                  </div>
                </Popover.Button>

                <Popover.Panel className="absolute bg-white z-10 mt-10 border p-4 w-96">
                  <div className="grid grid-cols-1">
                    <div className='text-left py-2'>
                      <span className='font-bold'>FILTER</span>
                    </div>
                    <div className='flex flex-row justify-between py-2'>
                      <span>Where</span>
                      <div className='flex flex-row border w-60 px-2 py rounded-lg justify-between'>
                        <span>Select Filter</span>
 {/* <span><ChevronDownIcon className='h-5 w-5'/></span> */}
                        <Popover className="relative">
                          <Popover.Button><span><ChevronDownIcon className='h-5 w-5'/></span></Popover.Button>

                          <Popover.Panel className="absolute z-15">
                            <div className="grid grid-cols-1">
                              <a href="/analytics">Analytics</a>
                              <a href="/engagement">Engagement</a>
                              <a href="/security">Security</a>
                              <a href="/integrations">Integrations</a>
                            </div>

                            <img src="/solutions.jpg" alt="" />
                          </Popover.Panel>
                        </Popover>
                      </div>
                      <div>
                        <span><XIcon className='h-5 w-5'/></span>
                      </div>
                    </div>
                    <div className='flex flex-row py-2'>
                      <span><PlusIcon className='h-5 w-5'/></span>
                      <span>Add filters</span>
                    </div>
                    <div className='flex flex-row  justify-between items-center'>
                      <div className='flex flex-row'>
                        <span><InformationCircleIcon className='h-5 w-5'/></span>
                        <span>learn more about clickUp filter</span>
                      </div>
                      <div className='flex flex-row border rounded-lg px-1 py-2'>
                        <span><SparklesIcon className='h-5 w-5'/></span>
                        <span>Templates</span>
                      </div>
                    </div>
                  </div>

                  <img src="/solutions.jpg" alt="" />
                </Popover.Panel>
              </Popover>
            </Tab>
            <Tab className='px-5 py-2 hover:bg-gray-300 flex flex-row'>
              <DuplicateIcon className='h-5 w-5'/>
              {/* <span className='text-purple-600'>Group by: status</span> */}
              <Popover className="relative">
                <Popover.Button><span className='text-purple-600'>Group by: status</span></Popover.Button>

                <Popover.Panel className="absolute bg-white z-10 border w-60 mt-6">
                  <div className="grid grid-cols-1 p-4">
                    <div className='text-left flex flex-row items-center py-2'>
                      <span className='pr-4'>GROUP BY</span>
                      <span><QuestionMarkCircleIcon className='h-5 w-5'/></span>
                    </div>
                    <div className='flex flex-row items-center text-left py-2'>
                      <span><AnnotationIcon className='h-5 w-5'/></span>
                      <span>Status (default)</span>
                    </div>
                    <div className='flex flex-row items-center text-left justify-between py-2'>
                      <div className='flex flex-row items-center'>
                        <span><SearchIcon className='h-5 w-5'/></span>
                        <span>Asignee</span>
                      </div>
                      <div>
                        <CheckIcon className='h-5 w-5 text-blue-400 font-bold'/>
                      </div>
                    </div>
                    <div className='flex flex-row items-center text-left py-2'>
                      <span><TagIcon className='h-5 w-5'/></span>
                      <span>Tags</span>
                    </div>
                    <div className='flex flex-row items-center text-left py-2'>
                      <span><CalendarIcon className='h-5 w-5'/></span>
                      <span>Due date</span>
                    </div>
                    <div className='flex flex-row text-left items-center py-2'>
                      <span><XCircleIcon className='h-5 w-5'/></span>
                      <span>None</span>
                    </div>

{/* Chevron right */}

                    <div className='flex flex-row items-center text-left py-2 justify-between'>
                      <div className='flex flex-row items-center text-left'>
                        <span><PencilIcon className='h-5 w-5'/></span>
                        <span>Custom Field</span>
                      </div>
                      <div>
                        <span><ChevronRightIcon className='h-5 w-5'/></span>
                      </div>
                    </div>
                    <hr/>
                    <div className='text-left py-2'>
                      <span>Also group by list</span>
                    </div>
                  </div>

                  <img src="/solutions.jpg" alt="" />
                </Popover.Panel>
              </Popover>
            </Tab>
            <Tab className='px-5 py-2 hover:bg-gray-300 flex flex-row'>
              <LinkIcon className='h-5 w-5'/>
{/* <span>Subtask</span> */}
              <Popover className="relative">
                <Popover.Button><span>Subtask</span></Popover.Button>

                <Popover.Panel className="absolute bg-white mt-5 z-10 border w-60 p-4">
                  <div className="grid grid-cols-1">
                    <div className='text-left text-gray-400'>
                      <span>SHOW SUBTASKS</span>
                    </div>
                    <div className='flex flex-row justify-between text-left py-4'>
                      <span>Collapse all (default)</span>
                      <span><CheckIcon className='h-5 w-5'/></span>
                    </div>
                    <div className='text-left'>
                      <span>Expand All</span>
                    </div>
                    <div className='text-left py-4'>
                      <span>As separate tasks</span>
                    </div>
                    <div className='text-left'>
                      <span className='text-gray-400'>Use this to filter subtasks</span>
                    </div>
                  </div>

                  <img src="/solutions.jpg" alt="" />
                </Popover.Panel>
              </Popover>
            </Tab>
            <Tab className='px-5 py-2 hover:bg-gray-300 flex flex-row'>
              <UserIcon className='h-5 w-5'/>
              <span>Me</span>
            </Tab>
            <Tab className='px-5 py-2 hover:bg-gray-300 flex flex-row'>
              <UsersIcon className='h-5 w-5'/>
              <span>Asignees</span>
              </Tab>
            <Tab className='px-5 py-2 hover:bg-gray-300'>
              {/* <div className='flex flex-row'>
                <EyeIcon className='h-5 w-5'/>
                <span>Show</span>
              </div> */}
              <Popover className="relative">
                <Popover.Button>
                  <div className='flex flex-row'>
                    <EyeIcon className='h-5 w-5'/>
                    <span>Show</span>
                  </div>
              </Popover.Button>

                <Popover.Panel className="absolute bg-white show z-10 border w-60 p-4">
                  <div className="grid grid-cols-1">
                    <div className='text-left'>
                      <span className='text-gray-500'>SHOW</span>
                    </div>
                    <div className='flex flex-row text-left py-2 justify-between items-center'>
                      <span>Columns</span>
                      <span><ChevronRightIcon className='h-5 w-5'/></span>
                    </div>
                    <div className='flex flex-row text-left justify-between items-center'>
                      <span>Task locations</span>
                      <span></span>
                    </div>
                    <div className='flex flex-row text-left py-2 justify-between items-center'>
                      <span>Subtasks parent names</span>
                      <span></span>
                    </div>
                    <hr/>
                    <div className='flex flex-row text-left py-2 justify-between items-center'>
                      <span>Closed task</span>
                      <span></span>
                    </div>
                    <div className='flex flex-row text-left py-2 justify-between items-center'>
                      <span>Closed Subtasks</span>
                      <span></span>
                    </div>
                    <div className='flex flex-row text-left py-2 justify-between items-center'>
                      <span>Tasks in multiple List</span>
                      <span></span>
                    </div>
                    <hr/>
                    <div className='flex flex-row text-left py-2 justify-between items-center'>
                      <span>Empty status</span>
                      <span></span>
                    </div>
                    <div className='flex flex-row text-left py-2 justify-between items-center'>
                      <span>Auto-wrap</span>
                      <span></span>
                    </div>
                  </div>

                  <img src="/solutions.jpg" alt="" />
                </Popover.Panel>
              </Popover>
            </Tab>
            <Tab className='px-5 py-2 hover:bg-gray-300'>...</Tab>
          </Tab.List>
          <Tab.Panels>
            {/* <Tab.Panel>Content 1</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel> */}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
    </>
  )
}

export default Navbar