import { CalendarIcon, ClockIcon, EyeIcon, StarIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import APIS from '../../../constants/EndPoint'
import usePatchHook from '../../../customHooks/usePatchHook'
import DropDownListBox from '../../../Reusable/DropDownList/DropDownListBox'
import DropDownMenu from '../../../Reusable/DropDownList/DropDownMenu'
import EstimatedTime from '../../../Reusable/TaskComponents/EstimatedTime'

type Props = {
  cardDetailData: any
}

const CardPopupSection2 = (props: Props) => {

  const { cardDetailData } = props
  const [card2ValuesState, setCard2ValuesState] = useState<any>({
    estimatedTime: null,
  })

  const [kpiPoints, setKpiPoints] = useState<any>(null)

  const {
    isPatchLoading,
    mutate: updateMutate,
    addSuccessSnackBar: editSuccessSnackBar,
    setAddSuccessSnackBar: setEditSuccessSnackBar,
  } = usePatchHook({ queryKey: `boardData${cardDetailData?.workspace}`, setOpenEditPopup: "" })


  const handleBlurEstimateTime = (value: any) => {
    const url = `${APIS.TASK}${cardDetailData?.id}/`
    const formData = {
      estimated_time: value
    }
    try {
      updateMutate({ url, formData })
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <section className='p-4 flex items-center text-gray-400 divide-x text-xs'>
        {/* CREATED TIME */}
        <span className='px-5'>
          <p>CREATED</p>
          <span className='flex gap-2 text-black'>
            <p>Jun 16</p><p>12:57</p>
          </span>
        </span>

        {/* TIME TRACKED */}
        <span className='px-5'>
          <p>TIME TRACKED</p>
          <span className='flex gap-2 text-black'>
            <p>00:00:00</p>
          </span>
        </span>

        <div className=' px-4 flex items-center justify-between w-full'>
          <span className='flex gap-5'>
            <DropDownMenu
              options={null}
              CustomMenuButton={
                <ClockIcon className='w-9 p-1 border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer ' />
              }
            >
              <div className='p-4 text-base '>
                <EstimatedTime
                  card2ValuesState={card2ValuesState}
                  setCard2ValuesState={setCard2ValuesState}
                  stateObjectKey="estimatedTime"
                  handleBlurFunction={handleBlurEstimateTime}
                />
              </div>
            </DropDownMenu>

            <DropDownListBox
              options={[{ id: null, title: "--" }, { id: 1, title: "1" }, { id: 2, title: "2" }, { id: 4, title: "4" }, { id: 6, title: "6" }, { id: 8, title: "8" }]}
              selected={kpiPoints}
              setSelected={setKpiPoints}
              handleAPICall={() => { }}
              customButton={
                kpiPoints ?
                  <>
                    <p>KPI POINTS</p>
                    <span className='flex items-center gap-2 text-black'>
                      <StarIcon className='w-5 text-btncolor cursor-pointer ' />
                      <p>{kpiPoints?.title}</p>
                    </span>
                  </>
                  :
                  <StarIcon className='w-9 p-1 -mt-1 border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer ' />
              }
            />

            <DropDownMenu
              options={null}
              CustomMenuButton={
                <CalendarIcon className='w-9 p-1 border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer ' />
              }
            >
              <div className='p-4 text-lg '>pasjdoij</div>
            </DropDownMenu >
          </span>

          <span>
            <EyeIcon className='w-9 p-1 rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer' />
          </span>
        </div>
      </section>
    </>
  )
}

export default CardPopupSection2