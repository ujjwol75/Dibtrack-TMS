import { Tab } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/solid'
import React from 'react'

type Props = {}

const ActivityPanel = (props: Props) => {
  return (
    <div>
        <Tab.Panel className="w-full mt-5 bg-gray-200 h-screen pt-[40px]">
            <div className='flex flex-col'>
              <span className='mt-5 ml-5'>my work</span>
              <div
                className='w-[90%] j border border-dashed border-gray-500 mt-3 rounded-md
                 text-gray-400 ml-5 mr-4 py-2  bg-gray-200 focus:outline-none flex justify-center cursor-pointer'
              >
                <PlusIcon className='h-5 w-5 mr-2'/>
                <p className='text-sm'>Add your most important tasks here</p>
              </div>
            </div>
          </Tab.Panel>
    </div>
  )
}

export default ActivityPanel