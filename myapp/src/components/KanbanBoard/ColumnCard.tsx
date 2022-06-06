import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

type Props = {
  children: any
  col: any
  index: number
}

const ColumnCard = (props: Props) => {
  const { children, col, index } = props

  const handleAddTask = () => {
    console.log("add")
  }

  return (
    <Droppable droppableId={col.id} key={index} >
      {(provided, snapshot) => (
        <div {...provided.droppableProps} ref={provided.innerRef}
          className="m-2 shadow-lg border rounded"
        >

          <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div className='flex justify-between'>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {col.header}
              </h3>
              <span className='text-3xl cursor-pointer' onClick={() => { handleAddTask() }}>+</span>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Lorem ipsum dolor
            </p>
          </div>
          {/* 
          <div className='p-3 border-b text-slate-700 font-medium text-lg
            bg-gradient-to-r from-cyan-300 to-blue-300 flex justify-between'
          >
            <header > {col.header}</header>
            <span className='text-3xl cursor-pointer' onClick={() => { handleAddTask() }}>+</span>
          </div> */}
          <div className='p-2'>
            {children}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default ColumnCard