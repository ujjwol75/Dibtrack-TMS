import React from 'react'
import Board from 'react-trello'

const KanbanBoard = () => {
  const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'Planned Tasks',
        label: '2/2',
        cards: [
          { id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', editable: true },
          { id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } }
        ]
      },
      {
        id: 'lane2',
        title: 'Completed',
        label: '0/0',
        cards: []
      },
      {
        id: 'PLANNED',
        title: 'Planned Tasks 2',
        label: '20/70',
        cards: [
          {
            id: 'Milk',
            title: 'Buy milk',
            label: '15 mins',
            description: '2 Gallons of milk at the Deli store',
          },
          {
            id: 'Plan2',
            title: 'Dispose Garbage',
            label: '10 mins',
            description: 'Sort out recyclable and waste as needed'
          }
        ]
      },
    ]
  }
  return (
    <>
      <div>
        <Board data={data}
          editable={true}
          draggable
          canAddLanes
          onDataChange={(newData) => { console.log(newData) }}
          cardStyle={{ backgroundColor: "white" }}
          laneStyle={{ boxShadow: '2px 2px 6px 0px rgba(0,0,0,0.75)' }}
          style={{ backgroundColor: "transparent" }}
        />
      </div>
    </>

  )
}

export default KanbanBoard