import React, { useState } from 'react'

import {
  SearchIcon,
  TrendingDownIcon,
  NewspaperIcon,
  StarIcon,
} from "@heroicons/react/outline";
import { Tab } from '@headlessui/react';
import ButtonPopUp from './ButtonPopUp';


type Props = {
  showPop: any
  popUp: boolean
  setbox: any
  box: boolean
}

const SidePopUp = (props: Props) => {
  const { showPop, popUp, setbox, box } = props
  const [show, setshow] = useState(false)
  return (
    <>

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
                
                <div className='flex cursor-pointer mt-1 '>
                  <div>

                    {/* <div className='flex' onClick={() => { showPop(!popUp) }}>
                      <TrendingDownIcon className='h-5 w-5 mr-2 ml-2 ' />

                      <ButtonPopUp sidePopUp={showPop} popUp={!popUp} />
                    </div> */}
                    <p onClick={() => { setbox(!box) }}>
                      <ButtonPopUp sidePopUp={showPop} popUp={popUp} >
                      <div className='flex'>

                        <TrendingDownIcon className='h-5 w-5 mr-4 ml-2 ' />
                        <span>text</span>
                      </div>
                    </ButtonPopUp>
                  </p>
                    <p onClick={() => { setbox(!box) }}>
                      <ButtonPopUp sidePopUp={showPop} popUp={popUp} >
                      <div className='flex'>

                        <NewspaperIcon className='h-5 w-5 mr-4 ml-2 ' />
                        <span>text</span>
                      </div>
                    </ButtonPopUp>
                  </p>
                    <p onClick={() => { setbox(!box) }}>
                      <ButtonPopUp sidePopUp={showPop} popUp={popUp} >
                      <div className='flex'>

                        <StarIcon className='h-5 w-5 mr-4 ml-2 ' />
                        <span>text</span>
                      </div>
                    </ButtonPopUp>
                  </p>
                </div>
              </div>
              

              {/* <div className='flex cursor-pointer mt-4'>
                  <NewspaperIcon className='h-5 w-5 mr-2 ml-2 ' />
                  <p onClick={() => { showPop(false) }}>News</p>
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
                </div> */}

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