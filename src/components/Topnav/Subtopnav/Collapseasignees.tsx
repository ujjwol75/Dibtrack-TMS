import { CheckCircleIcon, UserGroupIcon } from '@heroicons/react/solid'
import React from 'react'

type Props = {}

const Collapseasignees = (props: Props) => {
  return (
    <>
     <div className='p-4'>
        <div className='flex flex-row justify-between items-center'>
          <div className='flex flex-row items-center'>
            <UserGroupIcon className='h-8 w-8'/>
            <div className='pl-2'>
              <p>Unassigned</p>
              <p>0 tasks</p>
            </div>
          </div>
          <CheckCircleIcon className='h-8 w-8'/>
        </div>
     </div>
    </>
  )
}

export default Collapseasignees