import APIS from '../../../constants/EndPoint'
import useGetHook from '../../../customHooks/useGetHook'
import usePatchHook from '../../../customHooks/usePatchHook'
import usePostHook from '../../../customHooks/usePostHook'
import CardPopupSection1 from './CardPopupSection1'
import CardPopupSection2 from './CardPopupSection2'
import CardPopupSection3 from './CardPopupSection3'
import CardPopupSection4 from './CardPopupSection4'
import CardPopupSection5 from './CardPopupSection5'
import CardPopupSection6 from './CardPopupSection6'

type Props = {
  clickedCardInfo?: any
  setOpenCardModal?: any
  handleDeleteTask?: any
}

const CardPopup = (props: Props) => {
  const { clickedCardInfo, setOpenCardModal, handleDeleteTask } = props

  const { data: cardDetailData, isLoading: cardDetailDataLoading } = useGetHook({
    queryKey: `cardDetail${clickedCardInfo?.cardId}`,
    url: `${APIS.TASK}${clickedCardInfo?.cardId}`
  })

  const {
    isPostLoading,
    mutate: createBoardMutate,
    successMsg,
    addSuccessSnackBar,
    setAddSuccessSnackBar,
  } = usePostHook({ queryKey: `cardDetail${clickedCardInfo?.cardId}`, setOpenAddPopup: "" });


  const {
    isPatchLoading: updateSubTaskLoading,
    mutate: updateMutate,
    addSuccessSnackBar: editSuccessSnackBar,
    setAddSuccessSnackBar: setEditSuccessSnackBar,
  } = usePatchHook({ queryKey: `cardDetail${clickedCardInfo?.cardId}`, setOpenEditPopup: "" })

  //  HANDLE EDIT SUBTASK API
  const handleEditSubTask = (cardId: any, cardName: string) => {
    const url = `${APIS.TASK}${cardId}/`
    const formData = {
      name: cardName
    }
    try {
      updateMutate({ url, formData })
    } catch (e) {
      console.log(e);
    }
  }

  // HANDLE CREATE SUBTASK API 
  const handleCreateSubTask = (e: any, laneId: any) => {
    const url = APIS.TASK;
    const formData = {
      name: e?.title,
      parent: laneId,
      content_type: null,
      object_id: null,
      workspace: cardDetailData?.workspace,
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

  return (
    <div className='w-full grid grid-cols-5 divide-x divide-y'>

      {/* CARD SECTION 1 */}
      <div className='col-span-3'>
        {
          cardDetailDataLoading ?
            null
            :
            <CardPopupSection1
              cardDetailData={cardDetailData}
              setOpenCardModal={setOpenCardModal}
              handleDeleteTask={handleDeleteTask}
            />
        }
      </div>

      {/* CARD SECTION 2 */}
      <div className='col-span-2'>
        {
          cardDetailDataLoading ? null : <CardPopupSection2 cardDetailData={cardDetailData} />
        }
      </div>

      {/* CARD SECTION 3 */}
      <div className='col-span-3 min-h-[26rem] max-h-[26rem]'>
        {
          cardDetailDataLoading ?
            null
            :
            <CardPopupSection3
              cardDetailData={cardDetailData}
              handleCreateSubTask={handleCreateSubTask}
              handleEditSubTask={handleEditSubTask}
              handleDeleteSubTask={handleDeleteTask}
              isPostLoading={isPostLoading}
              updateSubTaskLoading={updateSubTaskLoading}
            />
        }
      </div>

      {/* CARD SECTION 4 */}
      <div className='col-span-2 min-h-[26rem] max-h-[26rem]'>
        <CardPopupSection4 />
      </div>


      {/* CARD SECTION 5 */}
      <div className='col-span-3 -row-end-1 h-screen'>
        <CardPopupSection5 />
      </div>

      {/* CARD SECTION 6 */}
      <div className='col-span-2 -row-end-1 h-screen'>
        <CardPopupSection6 />
      </div>
    </div>
  )
}

export default CardPopup