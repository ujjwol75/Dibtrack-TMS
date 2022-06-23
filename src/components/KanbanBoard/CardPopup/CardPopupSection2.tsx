import { CalendarIcon, ClockIcon, EyeIcon, StarIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import APIS from '../../../constants/EndPoint'
import usePatchHook from '../../../customHooks/usePatchHook'
import usePostHook from '../../../customHooks/usePostHook'
import DropDownListBox from '../../../Reusable/DropDownList/DropDownListBox'
import DropDownMenu from '../../../Reusable/DropDownList/DropDownMenu'
import CalendarMenu from '../../../Reusable/TaskComponents/CalendarMenu'
import EstimatedTime from '../../../Reusable/TaskComponents/EstimatedTime'
import KpiPoints from '../../../Reusable/TaskComponents/KpiPoints'

type Props = {
  cardDetailData: any
}

const CardPopupSection2 = (props: Props) => {

  const { cardDetailData } = props

  const [card2ValuesState, setCard2ValuesState] = useState<any>({
    estimatedTime: null,
    kpiPoints: null
  })
  const [kpiPoints, setKpiPoints] = useState<any>(null)

  // SETTING INITIAL VALUES
  useEffect(() => {
    setCard2ValuesState((prev: any) => ({ ...prev, estimatedTime: cardDetailData?.estimated_time }))
    setCard2ValuesState((prev: any) => ({ ...prev, kpiPoints: cardDetailData?.kpi_points }))
  }, [cardDetailData])

  const {
    isPatchLoading,
    mutate: updateMutate,
    addSuccessSnackBar: editSuccessSnackBar,
    setAddSuccessSnackBar: setEditSuccessSnackBar,
  } = usePatchHook({ queryKey: `cardDetail${cardDetailData?.id}`, setOpenEditPopup: "" })


  const {
    mutate: createMutate,
    addSuccessSnackBar,
    setAddSuccessSnackBar,
  } = usePostHook({ queryKey: `cardDetail${cardDetailData?.id}`, setOpenAddPopup: "" })


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

  const handleChangeKpiPoints = (value: any) => {
    const url = APIS.KPI_POINTS
    const formData = {
      points: value,
      content_type: cardDetailData?.get_content_type_id,
      object_id: cardDetailData?.id
    }
    try {
      createMutate({ url, formData })
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
          <span className='flex gap-2'>

            <EstimatedTime
              card2ValuesState={card2ValuesState}
              setCard2ValuesState={setCard2ValuesState}
              stateObjectKey="estimatedTime"
              handleBlurFunction={handleBlurEstimateTime}
            />

            <KpiPoints
              initialValue={card2ValuesState.kpiPoints}
              kpiPoints={kpiPoints}
              setKpiPoints={setKpiPoints}
              handleChangeKpiPoints={handleChangeKpiPoints}
            />

            <CalendarMenu />
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