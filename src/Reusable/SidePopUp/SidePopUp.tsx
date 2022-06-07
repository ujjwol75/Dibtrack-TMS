import React from 'react'

import {
  SearchIcon,
  TrendingDownIcon,
  NewspaperIcon,
  StarIcon,
} from "@heroicons/react/outline";
import { Tab } from '@headlessui/react';


type Props = {
  popUp: Boolean
  showPop: any
}

const SidePopUp = (props: Props) => {
  const { popUp, showPop } = props
  return (
    <>
      {/* <div className='shadow-2xl w-[19rem] h-[38rem]  rounded-md'>
        <div className='flex'>
          <div className='w-1/2  text-center text-gray-400 p-1 cursor-pointer'>Show/Hide</div>
          <div className='w-1/2  text-center text-gray-400 p-1 cursor-pointer'>New Colume</div>
        </div>
        <hr />
        <div className='flex my-2'>
          <SearchIcon className='h-5 w-5 text-center m-1 cursor-pointer' />
          <input type="text" className=' w-full pl-2 outline-none' placeholder='Search' />
        </div>
        <hr />

        <div className='overflow-y-scroll w-[19rem] h-[32rem] p-3'>
          <div className='flex cursor-pointer mt-4'>
            <TrendingDownIcon className='h-5 w-5 mr-2 ml-2 ' />
            <p onClick={() => { showPop(!popUp) }}>fsljflas</p>
          </div>
          <div className='flex cursor-pointer mt-4'>
            <TrendingDownIcon className='h-5 w-5 mr-2 ml-2 ' />
            <p onClick={() => { showPop(!popUp) }}>fsljflas</p>
          </div>
          <div className='flex cursor-pointer mt-4'>
            <TrendingDownIcon className='h-5 w-5 mr-2 ml-2 ' />
            <p onClick={() => { showPop(!popUp) }}>fsljflas</p>
          </div>
          <div className='flex cursor-pointer mt-4'>
            <TrendingDownIcon className='h-5 w-5 mr-2 ml-2 ' />
            <p onClick={() => { showPop(!popUp) }}>fsljflas</p>
          </div>
          <div className='flex cursor-pointer mt-4'>
            <TrendingDownIcon className='h-5 w-5 mr-2 ml-2 ' />
            <p onClick={() => { showPop(!popUp) }}>fsljflas</p>
          </div>




        </div>

      </div> */}
      <div className='shadow-2xl border-t-2 bg-white border-gray-100 w-[19rem] h-[38rem]  rounded-md'>
        <Tab.Group>
          <Tab.List className='flex ' >
            <Tab className='w-1/2' >
              {({ selected }) => (
                <div
                  className={selected ? ' text-blue-500 border-b-2 border-blue-500 text-sm font-light p-2' : 'bg-white text-black text-sm font-light p-2'}
                >


                  Show/Hide
                </div>
              )}
            </Tab>
            <Tab className='w-1/2' >
              {({ selected }) => (
                <div
                  className={
                    selected ? ' text-blue-500 border-b-2 border-blue-500 text-sm font-light p-2' : 'bg-white text-black text-sm font-light p-2'}>
                  New Colume
                </div>
              )}
            </Tab>
            {/* <Tab><div className='w-1/2  text-center text-gray-400 p-1 cursor-pointer'>New Colume</div></Tab> */}

          </Tab.List>
          <hr />
          <div className='flex my-2'>
            <SearchIcon className='h-5 w-5 text-center m-1 cursor-pointer' />
            <input type="text" className=' w-full pl-2 outline-none' placeholder='Search' />
          </div>
          <hr />
          <Tab.Panels >
            <Tab.Panel className="p-3">

              <p>Hi content</p>
            </Tab.Panel>
            <Tab.Panel >
              <div className='overflow-y-scroll w-[19rem] h-[30rem] p-3 relative'>
                <div className='flex cursor-pointer mt-4'>
                  <TrendingDownIcon className='h-5 w-5 mr-2 ml-2 ' />
                  <p onClick={() => { showPop(!popUp) }}>fsljflas</p>
                </div>
                <div className='flex cursor-pointer mt-4'>
                  <NewspaperIcon className='h-5 w-5 mr-2 ml-2 ' />
                  <p onClick={() => { showPop(!popUp) }}>News</p>
                </div>
                <div className='flex cursor-pointer mt-4'>
                  <StarIcon className='h-5 w-5 mr-2 ml-2 ' />
                  <p onClick={() => { showPop(!popUp) }}>Space</p>
                </div>
                
                <div className='flex cursor-pointer mt-4'>
                  <TrendingDownIcon className='h-5 w-5 mr-4 ml-2 ' />
                  <p onClick={() => { showPop(!popUp) }}>fsljflas</p>
                </div>
                <div className='flex cursor-pointer mt-4'>
                  <TrendingDownIcon className='h-5 w-5 mr-4 ml-2 ' />
                  <p onClick={() => { showPop(!popUp) }}>fsljflas</p>
                </div>
                <div className='flex cursor-pointer mt-4'>
                  <NewspaperIcon className='h-5 w-5 mr-2 ml-2 ' />
                  <p onClick={() => { showPop(!popUp) }}>News</p>
                </div>
                <div className='flex cursor-pointer mt-4'>
                  <NewspaperIcon className='h-5 w-5 mr-2 ml-2 ' />
                  <p onClick={() => { showPop(!popUp) }}>News</p>
                </div>
                <div className='flex cursor-pointer mt-4'>
                  <StarIcon className='h-5 w-5 mr-2 ml-2 ' />
                  <p onClick={() => { showPop(!popUp) }}>Space</p>
                </div>
                
                <div className='flex cursor-pointer mt-4'>
                  <TrendingDownIcon className='h-5 w-5 mr-4 ml-2 ' />
                  <p onClick={() => { showPop(!popUp) }}>fsljflas</p>
                </div>
                <div className='flex cursor-pointer mt-4'>
                  <TrendingDownIcon className='h-5 w-5 mr-4 ml-2 ' />
                  <p onClick={() => { showPop(!popUp) }}>fsljflas</p>
                </div>
                <div className='flex cursor-pointer mt-4'>
                  <NewspaperIcon className='h-5 w-5 mr-2 ml-2 ' />
                  <p onClick={() => { showPop(!popUp) }}>News</p>
                </div>
                <div className='flex cursor-pointer mt-4'>
                  <StarIcon className='h-5 w-5 mr-2 ml-2 ' />
                  <p onClick={() => { showPop(!popUp) }}>Space</p>
                </div>
                <div className='flex cursor-pointer mt-4'>
                  <TrendingDownIcon className='h-5 w-5 mr-4 ml-2 ' />
                  <p onClick={() => { showPop(!popUp) }}>fsljflas</p>
                </div>
                <div className='flex cursor-pointer mt-4'>
                  <TrendingDownIcon className='h-5 w-5 mr-4 ml-2 ' />
                  <p onClick={() => { showPop(!popUp) }}>fsljflas</p>
                </div>
                
              </div>
            </Tab.Panel>
            <div className='w-25  h-19 shadow-md absolute bottom-2 left-5 content-center cursor-pointer ml-[3.25rem] p-2'>
              <p className='text-sm'>Use field from library</p>
            </div>


          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  )
}

export default SidePopUp