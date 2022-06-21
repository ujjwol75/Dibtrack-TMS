import React from 'react'
import {Fragment} from 'react'
import {Tab} from '@headlessui/react'
import {PlusIcon} from '@heroicons/react/solid'
import ActivityPanel from './ActivityPanel'
import MyworkPanel from './MyworkPanel'
import AssignedPanel from './AssignedPanel'

type Props = {}

const ViewProfileTab = (props: Props) => {
  return (
    <div>
      <Tab.Group>
        <Tab.List className="text-txtcolor mt-5">
          <Tab as={Fragment}>
            {({selected}) => (
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
            {({selected}) => (
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
            {({selected}) => (
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
            {({selected}) => (
              <button
                className={
                  selected ? 'ml-[40px] pb-4 text-btncolor border-b-2 border-btncolor border-solid' : ' hover:text-btncolor bg-white  ml-[40px] pb-4 '
                }
              >
                Calendar
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <ActivityPanel />
          <MyworkPanel/>
          <AssignedPanel/>
        </Tab.Panels>
        
      </Tab.Group>

    </div>
  )
}

export default ViewProfileTab