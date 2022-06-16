import { useEffect } from 'react'
import APIS from '../../../constants/EndPoint'
import useGetHook from '../../../customHooks/useGetHook'
import CardPopupSection1 from './CardPopupSection1'
import CardPopupSection2 from './CardPopupSection2'
import CardPopupSection3 from './CardPopupSection3'
import CardPopupSection4 from './CardPopupSection4'
import CardPopupSection5 from './CardPopupSection5'
import CardPopupSection6 from './CardPopupSection6'

type Props = {
  clickedCardInfo?: any
}

const CardPopup = (props: Props) => {
  const { clickedCardInfo } = props

  const { data: cardDetailData, isLoading: cardDetailDataLoading } = useGetHook({
    queryKey: `cardDetail${clickedCardInfo?.cardId}`,
    url: `${APIS.TASK}${clickedCardInfo?.cardId}`
  })

  return (
    <div className='w-full grid grid-cols-5 divide-x divide-y '>

      {/* CARD SECTION 1 */}
      <div className='col-span-3'>
        {
          cardDetailDataLoading ? null : <CardPopupSection1 cardDetailData={cardDetailData} />
        }
      </div>

      {/* CARD SECTION 2 */}
      <div className='col-span-2'>
        <CardPopupSection2 />
      </div>

      {/* CARD SECTION 3 */}
      <div className='col-span-3 min-h-[25rem]'>
        <CardPopupSection3 />
      </div>

      {/* CARD SECTION 4 */}
      <div className='col-span-2 min-h-[25rem]'>
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