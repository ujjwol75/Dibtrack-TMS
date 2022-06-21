import { Tab } from '@headlessui/react'
import React, { Fragment } from 'react'
import TasksPanel from './TasksPanel'

type Props = {}

const AssignedPanel = (props: Props) => {
  return (
    <div>
        <Tab.Panel>
        <Tab.Group>
      <Tab.List className="text-txtcolor mt-3 border-b border-gray-300 text-sm">
      <Tab as={Fragment}>
            {({selected}) => (
              <button
                className={
                  selected ? 'ml-3 pb-4 text-btncolor border-b-2 border-btncolor border-solid' : ' hover:text-btncolor bg-white  ml-3 pb-4'
                }
              >
                Tasks
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({selected}) => (
              <button
                className={
                  selected ? 'ml-[40px] pb-4 text-btncolor border-b-2 border-btncolor border-solid' : ' hover:text-btncolor bg-white  ml-[40px] pb-4'
                }
              >
                Comments
              </button>
            )}
          </Tab>
        
      </Tab.List>
      <Tab.Panels className="h-full bg-bgsearchbar">
        <TasksPanel />
        <Tab.Panel className="h-full bg-bgsearchbar mt-3 text-txtcolor p-2">
          No assigned Comments
        </Tab.Panel>
        
      </Tab.Panels>
    </Tab.Group>
    </Tab.Panel>
    </div>
  )
}

export default AssignedPanel