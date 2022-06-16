import React, { useState } from 'react'
import KanbanBoardComponent from "../../components/KanbanBoard/KanbanBoard"
import APIS from '../../constants/EndPoint'
import useGetHook from '../../customHooks/useGetHook'
import usePatchHook from '../../customHooks/usePatchHook'
import usePostHook from '../../customHooks/usePostHook'

type Props = {
  spaceId: any
}

const KanbanBoard = (props: Props) => {
  const { spaceId } = props

  const [openCardModal, setOpenCardModal] = useState<boolean>(false)
  const [clickedCardInfo, setClickedCardInfo] = useState<any>({
    cardId: "",
    metaData: null,
    laneId: ""
  })

  const { data: boardsData, isLoading: boardDataLoading } = useGetHook({
    queryKey: `boardData${spaceId}`,
    url: `${APIS.KANBAN_TASK}?workspace=${spaceId}`
  })

  const {
    isPostLoading,
    mutate: createBoardMutate,
    successMsg,
    addSuccessSnackBar,
    setAddSuccessSnackBar,
  } = usePostHook({ queryKey: `boardData${spaceId}`, setOpenAddPopup: "" });

  const {
    isPatchLoading,
    mutate: updateMutate,
    addSuccessSnackBar: editSuccessSnackBar,
    setAddSuccessSnackBar: setEditSuccessSnackBar,
  } = usePatchHook({ queryKey: `boardData${spaceId}`, setOpenEditPopup: "" })


  // HANDLE CREATE BOARD API
  const handleCreateBoard = (e: any) => {
    const url = APIS.CREATE_BOARD;
    const formData = {
      name: e?.title,
      workspace: spaceId,
      color: ""
    };
    try {
      createBoardMutate({ url, formData });
    } catch (e) {
      console.log(e);
    }
  }

  // HANDLE CREATE CARD API 
  const handleCreateCard = (e: any, laneId: any) => {
    const url = APIS.TASK;
    const formData = {
      name: e?.title,
      parent: laneId,
      content_type: null,
      object_id: null,
      workspace: spaceId,
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
  const handleClickCard = (cardId: any, metadata: any, laneId: any) => {
    setOpenCardModal(true)
    setClickedCardInfo({
      cardId: cardId,
      metaData: metadata,
      laneId: laneId
    })
  }

  //  HANDLE CARD DRAG AND DROP API
  const handleCardDrag = (cardId: any, sourceLaneId: any, targetLaneId: any, position: any, cardDetails: any) => {
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
  const handleUpdateBoard = (laneId: any, data: any) => {
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

  return (
    <>
      {
        boardDataLoading ?
          "Loading..." :
          <KanbanBoardComponent
            openCardModal={openCardModal}
            setOpenCardModal={setOpenCardModal}
            boardsData={boardsData}
            clickedCardInfo={clickedCardInfo}
            handleCreateBoard={handleCreateBoard}
            handleClickCard={handleClickCard}
            handleCreateCard={handleCreateCard}
            handleCardDrag={handleCardDrag}
            handleUpdateBoard={handleUpdateBoard}
          />
      }
    </>
  )
}

export default KanbanBoard