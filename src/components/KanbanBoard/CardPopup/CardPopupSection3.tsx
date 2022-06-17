import { TagIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import APIS from '../../../constants/EndPoint'
import usePatchHook from '../../../customHooks/usePatchHook'

type Props = {
  cardDetailData: any
}

const CardPopupSection3 = (props: Props) => {
  const { cardDetailData } = props

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

  console.log(cardDataState)

  return (
    <>
      <section className='p-4 space-y-4'>
        <div className='flex space-x-3 items-center text-sm'>
          <span className='bg-yellow-300 text-yellow-600 px-2 rounded-r-full cursor-pointer' >
            sample tags A
          </span>
          <span className='bg-blue-300 text-blue-600 px-2 rounded-r-full cursor-pointer'>
            sample tags B
          </span>
          <span className='p-1 h-fit border-2 border-dashed rounded-full hover:text-btncolor hover:border-btncolor cursor-pointer'>
            <TagIcon className='w-6 h-6' />
          </span>
        </div>

        <input className='border hover:border-gray-500 text-4xl p-5 font-light w-full'
          value={cardDataState.name}
          placeholder="TASK NAME"
          style={{ outline: "none" }}
          onChange={(e) => setCardDataState((prev: any) => ({ ...prev, name: e.target.value }))}
          onBlur={() => { handleBlur(cardDataState) }}
        />

        <textarea className=' border hover:border-gray-500 text-xl p-3 font-light w-full '
          value={cardDataState.description}
          placeholder="TASK DESCRIPTION"
          style={{ outline: "none" }}
          rows={5}
          onChange={(e) => setCardDataState((prev: any) => ({ ...prev, description: e.target.value }))}
          onBlur={() => { handleBlur(cardDataState) }}
        />

      </section>
    </>
  )
}

export default CardPopupSection3