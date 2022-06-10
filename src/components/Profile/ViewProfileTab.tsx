import React from 'react'
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/solid'

type Props = {}

const ViewProfileTab = (props: Props) => {
  return (
    <div>
        <Tab.Group>
      <Tab.List className="text-txtcolor mt-5">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected ? 'ml-3 pb-4 text-btncolor border-b-2 border-btncolor border-solid' : ' hover:text-btncolor bg-white  ml-3 pb-4'
              }
            >
              Activity
            </button>
          )}
        </Tab>

        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected ? 'ml-[40px] pb-4 text-btncolor border-b-2 border-btncolor border-solid' : ' hover:text-btncolor bg-white  ml-[40px] pb-4'
              }
            >
              My Work  
            </button>
          )}
        </Tab>


        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected ? 'ml-[40px] pb-4 text-btncolor border-b-2 border-btncolor border-solid' : ' hover:text-btncolor bg-white ml-[40px] pb-4'
              }
            >
              Assigned()
            </button>
          )}
        </Tab>


        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected ? 'ml-[40px] pb-4 text-btncolor border-b-2 border-btncolor border-solid' : ' hover:text-btncolor bg-white  ml-[40px] pb-4 '
              }
            >
              Calendar
            </button>
          )}
        </Tab>
        {/* ...  */}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="w-full mt-5 bg-gray-200 h-screen pt-[40px]">
             <div className='flex flex-col'>
                 <span className='mt-5 ml-5'>my work</span>
                 <div
                  
                 className='w-[90%] j border border-dashed border-gray-500 mt-3 rounded-md
                 text-gray-400 ml-5 mr-4 py-2  bg-gray-200 focus:outline-none flex justify-center cursor-pointer' 
                 
                 >
                <PlusIcon className='h-5 w-5 mr-2' />
                 <p className='text-sm'>Add your most important tasks here</p>
                 </div>
             </div>
        </Tab.Panel>
        {/* ... */}
      </Tab.Panels>
    </Tab.Group>
  
    </div>
  )
}

export default ViewProfileTab