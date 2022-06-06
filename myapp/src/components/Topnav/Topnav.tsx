import React from 'react'
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import {
  CogIcon,
  ChevronDoubleLeftIcon,
  ChevronRightIcon,
  
  ChevronUpIcon,
  ArrowNarrowDownIcon,
  HomeIcon,
  BellIcon,
  PlusIcon,
  ViewListIcon,
  ViewBoardsIcon,
  ViewGridIcon,
  DotsHorizontalIcon,
  SearchIcon,
} from "@heroicons/react/solid";

type Props = {}

const Topnav = (props: Props) => {
  return (
    <>
        <Tab.Group>
            <Tab.List className='flex flex-row'>
                <Tab as={"span"}>
                    {({ selected }) => (
                        <>
                          <span
                            className={
                                selected ? 'border-transparent flex flex-row text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap items-center p-5 border-b-2 font-bold text-lg':"p-5 flex flex-row items-center font-bold text-lg"}
                          >
                            <span className='font-bold text-xl border rounded-lg bg-gray-400 text-white p-5'>S</span>
                            <span className='mt-10'>Space</span>
                          </span>
                        </>  
                         
                    )}
                </Tab>
                <Tab as={"span"}>
                    {({ selected }) => (
                        <>
                          <span
                            className={
                                selected ? 'border-transparent flex flex-row text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap items-center p-5 border-b-2 font-bold text-lg':"p-5 flex flex-row items-center font-bold text-lg"}
                          >
                            <span><ViewListIcon className='h-5 w-5'/></span>  
                            <span>List</span>
                          </span>
                        </>  
                         
                    )}
                </Tab>
                <Tab as={"span"}>
                    {({ selected }) => (
                        <>
                          <span
                            className={
                                selected ? 'border-transparent flex flex-row text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap items-center p-5 border-b-2 font-bold text-lg':"p-5 flex flex-row items-center font-bold text-lg"}
                          >
                            <span><ViewBoardsIcon className='h-5 w-5'/></span>  
                            <span>Board</span>
                          </span>
                        </>  
                         
                    )}
                </Tab>
                <Tab as={"span"}>
                    {({ selected }) => (
                        <>
                          <span
                            className={
                                selected ? 'border-transparent flex flex-row text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap items-center p-5 border-b-2 font-bold text-lg':"p-5 flex flex-row items-center font-bold text-lg"}
                          >
                            <span><PlusIcon className='h-5 w-5'/></span>  
                            <span>View</span>
                          </span>
                        </>  
                         
                    )}
                </Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>Content 1</Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
                <Tab.Panel>Content 3</Tab.Panel>
                <Tab.Panel>Content 4</Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    </>

  )
}

export default Topnav