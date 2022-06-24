import moment from 'moment'
import { useEffect, useState } from 'react'
import APIS from '../../../constants/EndPoint'
import usePatchHook from '../../../customHooks/usePatchHook'
import usePostHook from '../../../customHooks/usePostHook'
import CalendarMenu from '../../../Reusable/TaskComponents/CalendarMenu'
import EstimatedTime from '../../../Reusable/TaskComponents/EstimatedTime'
import KpiPoints from '../../../Reusable/TaskComponents/KpiPoints'

type Props = {
  cardDetailData: any
}

const CardPopupSection2 = (props: Props) => {

  const { cardDetailData } = props
  console.log(cardDetailData)
  const [card2ValuesState, setCard2ValuesState] = useState<any>({
    estimatedTime: null,
    kpiPoints: null,
    startDate: null,
    endDate: null
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
      <section className='py-4 px-2 flex items-center text-gray-400 divide-x text-xs'>
        {/* CREATED TIME */}
        <span className='px-3'>
          <p>CREATED</p>
          <span className=' text-black'>
            {moment(cardDetailData?.created).format('MMM D, h:mm a')}
          </span>
        </span>

        {/* TIME TRACKED */}
        <span className='px-3'>
          <p>TIME TRACKED</p>
          <span className='flex text-black'>
            <p>00:00:00</p>
          </span>
        </span>

        <span className='px-3'>
          <EstimatedTime
            card2ValuesState={card2ValuesState}
            setCard2ValuesState={setCard2ValuesState}
            stateObjectKey="estimatedTime"
            handleBlurFunction={handleBlurEstimateTime}
          />
        </span>

        <span className='px-2'>
          <KpiPoints
            initialValue={card2ValuesState.kpiPoints}
            kpiPoints={kpiPoints}
            setKpiPoints={setKpiPoints}
            handleChangeKpiPoints={handleChangeKpiPoints}
          />
        </span>

        <span className='px-4'>
          <CalendarMenu
            calendarState={card2ValuesState}
            setCalendarState={setCard2ValuesState}
            startDateKey="startDate"
            endDateKey="endDate"
            handleAPICall={() => { }}
            detail={true}
          />
        </span>

      </section>
    </>
  )
}

export default CardPopupSection2