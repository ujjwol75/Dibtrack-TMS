import React from 'react'
import NextTodo from './NextTodo'
import OverDue from './OverDue'
import Today from './Today'
import Unscheduled from './Unscheduled'

type Props = {
  remainder: boolean
  setRemainder: any
}

const Todo = (props: Props) => {
  const {remainder, setRemainder} = props
  return (
    <>
      <div className='flex-col space-y-8 mt-6'>
        <div>
          <Today remainder={remainder} setRemainder={setRemainder}/>
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