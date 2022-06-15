import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Board from 'react-trello'
import APIS from '../../constants/EndPoint'
import useGetHook from '../../customHooks/useGetHook'
import usePatchHook from '../../customHooks/usePatchHook'
import usePostHook from '../../customHooks/usePostHook'
import Modal from '../../Reusable/Modal'
import CardPopup from './CardPopup/CardPopup'
import KanbanCard from './KanbanCard'

const KanbanBoard = () => {

  const params = useParams()

  const [openCardModal, setOpenCardModal] = useState(false)
  const [clickedCardInfo, setClickedCardInfo] = useState({
    cardId: "",
    metaData: null,
    laneId: ""
  })

  const { data: boardsData, isLoading: boardDataLoading } = useGetHook({
    queryKey: `boardData${params?.id}`,
    url: `${APIS.KANBAN_TASK}?workspace=${params?.id}`
  })


  // HANDLE CREATE BOARD API
  const {
    isPostLoading,
    mutate: createBoardMutate,
    successMsg,
    addSuccessSnackBar,
    setAddSuccessSnackBar,
  } = usePostHook({ queryKey: `boardData${params?.id}` });

  const handleCreateBoard = (e) => {
    const url = APIS.CREATE_BOARD;
    const formData = {
      name: e?.title,
      workspace: params?.id,
      color: ""
    };
    try {
      createBoardMutate({ url, formData });
    } catch (e) {
      console.log(e);
    }
  }


  // HANDLE CREATE CARD API 
  const handleCreateCard = (e, laneId) => {
    const url = APIS.TASK;
    const formData = {
      name: e?.title,
      parent: laneId,
      content_type: null,
      object_id: null,
      workspace: params?.id,
      order: "1",
      description: "",
      estimated_time: null
    };
    try {
      createBoardMutate({ url, formData });
    } catch (e) {
      console.log(e);
    }
  }


  // VIEW CARD DETAIL 
  const handleClickCard = (cardId, metadata, laneId) => {
    setOpenCardModal(true)
    setClickedCardInfo({
      cardId: cardId,
      metaData: metadata,
      laneId: laneId
    })
  }

  //  HANDLE CARD DRAG AND DROP API
  const {
    isUpdateLoading,
    mutate: updateMutate,
    updateSuccessSnackBar,
    setUpdateSuccessSnackBar,
  } = usePatchHook({ queryKey: `boardData${params?.id}` })

  const handleCardDrag = (cardId, sourceLaneId, targetLaneId, position, cardDetails) => {
    // console.log(cardId, sourceLaneId, targetLaneId, position, cardDetails)
    const url = `${APIS.TASK}${cardId}/`
    const formData = {
      parent: targetLaneId,
      order: position
    }
    try {
      updateMutate({ url, formData })
    } catch (e) {
      console.log(e);
    }
  }

  // HANDLE UPDATE BOARD API
  const handleUpdateBoard = (laneId, data) => {
    const url = `${APIS.TASK}${laneId}/`
    const formData = {
      name: data?.title,
    }
    try {
      updateMutate({ url, formData })
    } catch (error) {
      console.log(error)
    }
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
            <Board
              data={boardsData && boardsData}
              draggable
              canAddLanes
              editable
              editLaneTitle
              // onDataChange={(newData) => { console.log(newData) }}
              onCardClick={(cardId, _, laneId) => { handleClickCard(cardId, _, laneId) }}
              laneStyle={{
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                backgroundColor: "white",
                borderRadius: "0.375rem",

              }}
              style={{ backgroundColor: "transparent", position: 'relative' }}
              components={components}
              onLaneAdd={(e) => handleCreateBoard(e)}
              onLaneUpdate={(laneId, data) => handleUpdateBoard(laneId, data)}
              onCardAdd={(e, laneId) => handleCreateCard(e, laneId)}
              handleDragEnd={
                (cardId, sourceLaneId, targetLaneId, position, cardDetails) => handleCardDrag(cardId, sourceLaneId, targetLaneId, position, cardDetails)
              }

            />
          </div>

      }
      <Modal title='' isOpen={openCardModal} setIsOpen={setOpenCardModal} screenSize={true}>
        <CardPopup clickedCardInfo={clickedCardInfo} />
      </Modal>
    </>
  )
}

export default KanbanBoard