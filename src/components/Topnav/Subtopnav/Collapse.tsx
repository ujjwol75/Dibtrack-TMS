import {ChevronDoubleRightIcon, SearchIcon, UserIcon} from '@heroicons/react/solid'
import React, {useState} from 'react'
import Collapseasignees from "./Collapseasignees"

type Props = {
  asignees: any,
  setAsignees: any
}

const Collapse = (props: Props) => {
  const {asignees, setAsignees} = props
  return (
    <>
      <div>
        {
          asignees ? (
            <div className='collapse1 w-full border z-100 block'>
              <div className='p-4'>
                <div className='flex flex-row justify-between'>
                  <span>Asignees</span>
                  <span><ChevronDoubleRightIcon className='h-5 w-5 text-purple-600'/></span>
                </div>
                <div className='flex flex-row items-center border p-2 mt-2 bg-gray-300 rounded-lg'>
                  <span className='font-bold'><SearchIcon className='h-5 w-5 mr-2 text-gray-400'/></span>
                  <input className='bg-gray-300' placeholder='search'/>
                </div>
                <div className='flex flex-row justify-between py-3'>
                  <span className='text-gray-400'>ASIGNEES</span>
                  <span className='text-purple-600'>select all</span>
                </div>
              </div>
              <div className='h-96 overflow-y-auto'>
                <Collapseasignees/>
                <Collapseasignees/>
                <Collapseasignees/>
                <Collapseasignees/>
                <Collapseasignees/>
                <Collapseasignees/>
                <Collapseasignees/>
                <Collapseasignees/>
                <Collapseasignees/>
              </div>
              <hr/>
              <div>
                <div className='flex flex-row justify-between p-4'>
                  <span className='text-gray-400'>TEAMS</span>
                  <span className='text-purple-600'>select all</span>
                </div>
              </div>
              <hr/>
              <div>
                <p className='text-center'>No results</p>
              </div>
              <div className='flex flex-row text-purple-600 p-4'>
                <UserIcon className='h-5 w-5'/>
                <span>Assigned comments</span>
              </div>
            </div>
          ) : (
            <div className='collapse1 hidden border z-100'>
              <div className='p-4'>
                <div className='flex flex-row justify-between'>
                  <span>Asignees</span>
                  <span><ChevronDoubleRightIcon className='h-5 w-5 text-purple-600'/></span>
                </div>
                <div className='flex flex-row items-center border p-2 mt-2 bg-gray-300 rounded-lg'>
                  <span className='font-bold'><SearchIcon className='h-5 w-5 mr-2 text-gray-400'/></span>
                  <input className='bg-gray-300' placeholder='search'/>
                </div>
                <div className='flex flex-row justify-between py-3'>
                  <span className='text-gray-400'>ASIGNEES</span>
                  <span className='text-purple-600'>select all</span>
                </div>
              </div>
              <div className='h-96 overflow-y-auto'>
                <Collapseasignees/>
                <Collapseasignees/>
                <Collapseasignees/>
                <Collapseasignees/>
                <Collapseasignees/>
                <Collapseasignees/>
                <Collapseasignees/>
                <Collapseasignees/>
                <Collapseasignees/>
              </div>
              <hr/>
              <div>
                <div className='flex flex-row justify-between p-4'>
                  <span className='text-gray-400'>TEAMS</span>
                  <span className='text-purple-600'>select all</span>
                </div>
              </div>
              <hr/>
              <div>
                <p className='text-center'>No results</p>
              </div>
              <div className='flex flex-row text-purple-600 p-4'>
                <UserIcon className='h-5 w-5'/>
                <span>Assigned comments</span>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Collapse