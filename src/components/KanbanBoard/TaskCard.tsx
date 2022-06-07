import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

type Props = {
  item: any
  itemIndex: number
}

const TaskCard = (props: Props) => {
  const { item, itemIndex } = props
  return (
    <>
      <Draggable draggableId={item.taskId} key={item.taskId} index={itemIndex}>
        {(provided) => {
          return (
            <div {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              className='border my-3 shadow'
            >
              <div className='p-3 flex justify-between cursor-pointer'>
                <h5>
                  {item.title}
                </h5>
                <span className='w-7 h-7 text-center rounded-full bg-green-400 p-1'>
                  S
                </span>
              </div>
            </div>
          )
        }}
      </Draggable>
    </>
  )
}

export default TaskCard