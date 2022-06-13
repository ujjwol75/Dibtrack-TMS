import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import React from 'react'
import NextTodo from './NextTodo'
import OverDue from './OverDue'
import Today from './Today'
import Unscheduled from './Unscheduled'

type Props = {}

const Todo = (props: Props) => {
  return (
    <>
      <div className='flex-col space-y-8 mt-6'>

        <div>
          <Today/>
        </div>
        <div>
          <OverDue/>
        </div>
        <div>
          <NextTodo/>
        </div>
        <div>
          <Unscheduled/>
        </div>
        
        
        

      </div>
    </>
  )
}

export default Todo 