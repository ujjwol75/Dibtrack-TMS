import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'
import Down from './Down/Down';
import Models from './Models/Models'
import View from './View/View'
import Show from './Show/Show';
import Subtopnav from './Subtopnav/Subtopnav';
import { Popover } from '@headlessui/react';
import Calendar_component from '../dashboard/Calendar_component';
import KanbanBoard from "../KanbanBoard/KanbanBoard"
import Space from "../Space/Space"
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
  ChevronUpIcon,
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
} from "@heroicons/react/solid";

type Props = {}

const Navbar = (props: Props) => {
  let [isOpen, setIsOpen] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const [enabled1, setEnabled1] = useState(false)
  const [enabled2, setEnabled2] = useState(false)
  const [upShow, setUpShow] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>
      <div className='mt-2'>
        <Tab.Group>
          <Tab.List className="flex flex-row justify-between">
            {/* LEFT TOPNAV */}
            <span className='flex'>
              <Tab as={"span"} className='cursor-pointer'>
                {({ selected }) => (
                  <>
                    <span
                      className={
                        selected ? 'border-transparent flex flex-row text-gray-500 hover:text-gray-700 whitespace-nowrap items-center px-2 py-1 border-b-2  font-bold text-lg border-gray-400' : " flex flex-row px-2 py-1 items-center font-bold text-lg "}
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
                        selected ? 'border-transparent flex flex-row text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap items-center px-2 py-4 border-b-2 font-bold text-lg' : "px-2 py-4 flex flex-row items-center font-bold text-lg"}
                    >
                      <span className='border-l-2 border-gray-400 pl-3'><ViewListIcon className='h-7 w-5' /></span>
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
                        selected ? 'border-transparent flex flex-row text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap items-center border-b-2 py-4 px-2 font-bold text-lg' : " flex flex-row items-center font-bold text-lg py-4 px-2"}
                    >
                      <span><ViewBoardsIcon className='h-5 w-5' /></span>
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
                        selected ? 'border-transparent flex flex-row text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap items-center border-b-2 py-4 px-2 font-bold text-lg' : " flex flex-row items-center font-bold text-lg py-4 px-2"}
                    >
                      <span><ViewBoardsIcon className='h-5 w-5' /></span>
                      <span className='border-r-2 border-gray-400 pr-3'>Space</span>
                    </span>
                  </>

                )}
              </Tab>
              <Tab as={"span"} className='cursor-pointer'>
                {({ selected }) => (
                  <>
                    <span
                      className={
                        selected ? 'border-transparent flex flex-row text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap items-center border-b-2 py-4 px-2 font-bold text-lg' : " flex flex-row items-center font-bold text-lg py-4 px-2"}
                    >
                      <span><ViewBoardsIcon className='h-5 w-5' /></span>
                      <span className='border-r-2 border-gray-400 pr-3'>Calendar</span>
                    </span>
                  </>

                )}
              </Tab>
              <div className='cursor-pointer'>

                <span
                  // className={
                  //   selected ? 'border-transparent flex flex-row text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap items-center px-2 py-4 border-b-2 font-bold text-lg' : "px-2 py-4 flex flex-row items-center font-bold text-lg"}
                >
                  <Popover className="relative">
                    <Popover.Button>
                      <div className='flex flex-row cursor-pointer items-center'>
                        <span><PlusIcon className='h-5 w-5' /></span>
                        <span className=''>View</span>
                      </div>
                    </Popover.Button>
                    <View />
                  </Popover>
                </span>
              </div>
            </span>
            {/* RIGHT TOPNAV */}
            <div>
              <Tab.Group>
                <div className=''>
                  <Tab.List className='flex flex-row space-x-2'>
                    <Tab className='flex flex-row px-5 py-2 items-center cursor-pointer border rounded-lg'>
                      <DesktopComputerIcon className='h-5 w-5' />
                      <span className='text-lg border-r-2 pr-2'>Automate</span>
                      {/* <span><ChevronDownIcon className='h-5 w-5'/></span> */}
                      <Popover className="relative">
                        {
                          upShow ? <Popover.Button><span><ChevronDownIcon className='h-5 w-5' onClick={() => setUpShow(false)} /></span></Popover.Button> : <Popover.Button><span><ChevronUpIcon className='h-5 w-5' onClick={() => setUpShow(true)} /></span></Popover.Button>
                        }
                        {/* <Popover.Button><span><ChevronDownIcon className='h-5 w-5'/></span></Popover.Button> */}

                        <Popover.Panel className="absolute shadow-2xl automate z-10 border w-60 bg-white p-4">
                          <div className="grid grid-cols-1">
                            <div className='text-left py-2'>
                              <span>CUSTOMIZE SPACE</span>
                            </div>
                            <div className='text-left flex flex-row py-2'>
                              <span><SparklesIcon className='h-5 w-5' /></span>
                              <span>Templates</span>
                            </div>
                            <div className='text-left flex flex-row py-2'>
                              <span><PencilIcon className='h-5 w-5' /></span>
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
                            <ShareIcon className='h-5 w-5' />
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
          </Tab.List>
          <Subtopnav />

          <Tab.Panels>
            <div className='bg-gray-100 h-full'>
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>List</Tab.Panel>
              <Tab.Panel><KanbanBoard /></Tab.Panel>
              <Tab.Panel>
                <Space />
              </Tab.Panel>
              <Tab.Panel>
                <Calendar_component />
              </Tab.Panel>
            </div>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  )
}

export default Navbar