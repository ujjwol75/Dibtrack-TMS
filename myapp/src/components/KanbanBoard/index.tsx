import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import ColumnCard from './ColumnCard'
import TaskCard from './TaskCard'

type Props = {}

const KanbanBoard = (props: Props) => {


  const columns: any = [
    {
      id: "65", header: "Doing", items: [
        { taskId: '0999', title: "Task 1" },
        { taskId: '366', title: "Task 2" },
      ]
    },
    { id: "76", header: "Done", items: [] },
    { id: "15", header: "Pending", items: [] }
  ]

  const [columnState, setColumnState] = useState<any>(columns)

  const handleDragEnd = (result: any, columns: any, setColumns: any) => {
    const { source, destination } = result
    const column = columns[source.droppableId]
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]:{
        ...column,
        items:copiedItems
      }
    })
  }

  return (
    <div className='border mx-5 my-auto p-2 grid grid-cols-4'>
      <DragDropContext onDragEnd={(result) => handleDragEnd(result, columnState, setColumnState)}>
        {
          columnState.map((col: any, index: number) => {
            return (
              <ColumnCard col={col} index={index}>
                {
                  col.items.map((item: any, itemIndex: number) => {
                    return (
                      <TaskCard item={item} itemIndex={itemIndex} />
                    )
                  })
                }
              </ColumnCard>

            )
          })
        }
      </DragDropContext>
    </div>
  )
}

export default KanbanBoard