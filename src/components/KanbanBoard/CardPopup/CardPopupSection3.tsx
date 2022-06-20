import { TagIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import APIS from '../../../constants/EndPoint'
import usePatchHook from '../../../customHooks/usePatchHook'
import SubTaskComponent from './SubTaskComponent'

type Props = {
  cardDetailData: any
  handleCreateSubTask:any
}

const CardPopupSection3 = (props: Props) => {
  const { cardDetailData,handleCreateSubTask } = props

  const [cardDataState, setCardDataState] = useState<any>({
    name: "",
    description: ""
  })

  useEffect(() => {
    setCardDataState({
      name: cardDetailData.name,
      description: cardDetailData.description
    })
  }, [cardDetailData])

  const {
    isPatchLoading,
    mutate: updateMutate,
    addSuccessSnackBar: editSuccessSnackBar,
    setAddSuccessSnackBar: setEditSuccessSnackBar,
  } = usePatchHook({ queryKey: `boardData${cardDetailData?.workspace}`, setOpenEditPopup: "" })

  // FUCNTION TO UPDATE TASK NAME AND DESCRIPTION
  const handleBlur = (value: any) => {
    const url = `${APIS.TASK}${cardDetailData?.id}/`
    const formData = {
      name: value.name,
      description: value.description
    };
    try {
      updateMutate({ url, formData });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <section className='p-4 space-y-4 overflow-y-auto'>
        <div className='flex space-x-3 items-center text-sm'>
          <span className='bg-yellow-300 text-yellow-600 px-2 rounded-r-full cursor-pointer'>
            sample tags A
          </span>
          <span className='bg-blue-300 text-blue-600 px-2 rounded-r-full cursor-pointer'>
            sample tags B
          </span>
          <TagIcon className='p-1 w-9 border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer ' />
        </div>

        <input
          className='border hover:border-gray-500 text-2xl p-4 font-light w-full'
          value={cardDataState.name}
          placeholder="TASK NAME"
          style={{ outline: "none" }}
          onChange={(e) => setCardDataState((prev: any) => ({ ...prev, name: e.target.value }))}
          onBlur={() => {
            handleBlur(cardDataState)
          }}
        />

        <textarea
          className=' border hover:border-gray-500 p-3 font-light w-full '
          value={cardDataState.description}
          placeholder="TASK DESCRIPTION"
          style={{ outline: "none" }}
          rows={5}
          onChange={(e) => setCardDataState((prev: any) => ({ ...prev, description: e.target.value }))}
          onBlur={() => {
            handleBlur(cardDataState)
          }}
        />

        <div className='space-y-3 relative'>
          <p className='text-lg'>SUBTASKS</p>
          <SubTaskComponent cardDetailData={cardDetailData} handleCreateSubTask={handleCreateSubTask} />
        </div>
      </section>
    </>
  )
}

export default CardPopupSection3