import React, { useState } from 'react'
import Board from 'react-trello'
import APIS from '../../constants/EndPoint'
import useGetHook from '../../customHooks/useGetHook'
import usePostHook from '../../customHooks/usePostHook'
import Modal from '../../Reusable/Modal'
import CardPopup from './CardPopup/CardPopup'
import KanbanCard from './KanbanCard'

const KanbanBoard = () => {

  const [openCardModal, setOpenCardModal] = useState(false)

  const { data: boardsData, isLoading: boardDataLoading } = useGetHook({
    queryKey: "boardData",
    url: `${APIS.KANBAN_TASK}?workspace=10`
  })

  console.log(boardsData, "boardsData")

  const {
    isPostLoading,
    mutate: createBoardMutate,
    successMsg,
    addSuccessSnackBar,
    setAddSuccessSnackBar,
  } = usePostHook({ queryKey: "createdBoard" });

  const handleCreateBoard = (e) => {
    const url = APIS.TASK;
    const formData = {
      name: e?.title,
      parent: null,
      content_type: null,
      object_id: null,
      workspace: 10,
      order: "6",
      description: "",
      estimated_time: null
    };
    try {
      createBoardMutate({ url, formData });
    } catch (e) {
      console.log(e);
    }
  }

  const handleCreateCard = (e, laneId) => {
    const url = APIS.TASK;
    const formData = {
      name: e?.title,
      parent: laneId,
      content_type: null,
      object_id: null,
      workspace: 9,
      order: "7",
      description: "",
      estimated_time: null
    };
    try {
      createBoardMutate({ url, formData });
    } catch (e) {
      console.log(e);
    }
  }

  const handleClickCard = (cardId, metadata, laneId) => {
    setOpenCardModal(true)
    console.log(cardId, metadata, laneId)
  }

  // const data = {
  //   lanes: [
  //     {
  //       id: 'lane1',
  //       title: 'Planned Tasks',
  //       label: '2/2',
  //       cards: [
  //         { id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', },
  //         { id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } }
  //       ]
  //     },
  //     {
  //       id: 'lane2',
  //       title: 'Completed',
  //       label: '0/0',
  //       cards: []
  //     },
  //     {
  //       id: 'PLANNED',
  //       title: 'Planned Tasks 2',
  //       label: '20/70',
  //       cards: [
  //         {
  //           id: 'Milk',
  //           title: 'Buy milk',
  //           label: '15 mins',
  //           description: '2 Gallons of milk at the Deli store',
  //         },
  //         {
  //           id: 'Plan2',
  //           title: 'Dispose Garbage',
  //           label: '10 mins',
  //           description: 'Sort out recyclable and waste as needed'
  //         }
  //       ]
  //     },
  //   ]
  // }

  const components = {
    AddCardLink: ({ onClick }) => <button className='px-3 py-1 mt-3 hover:text-primary' onClick={onClick}>+ New Card</button>,
    Card: KanbanCard,
    NewLaneSection: ({ onClick }) => <button className='ml-[50%] mt-1 border px-7 -z-1 py-1 hover:text-primary' onClick={onClick}>+ Add Lane</button>
  };

  return (
    <>
      {
        boardDataLoading ?
          "Loading..." :
          <div>
            <Board data={{ lanes: boardsData && boardsData }}
              draggable
              canAddLanes
              editable
              editLaneTitle
              onDataChange={(newData) => { console.log(newData) }}

              onCardClick={(cardId, _, laneId) => { handleClickCard(cardId, _, laneId) }}
              laneStyle={{
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                backgroundColor: "white",
                borderRadius: "0.375rem",

              }}
              style={{ backgroundColor: "transparent", position: 'relative' }}
              components={components}
              onLaneAdd={(e) => handleCreateBoard(e)}
              onCardAdd={(e, laneId) => handleCreateCard(e, laneId)}
            />
          </div>

      }
      <Modal title='Resualbe' isOpen={openCardModal} setIsOpen={setOpenCardModal} screenSize={true}>
        <CardPopup />
      </Modal>
    </>
  )
}

export default KanbanBoard