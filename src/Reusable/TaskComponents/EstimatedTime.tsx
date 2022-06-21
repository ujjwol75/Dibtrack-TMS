import { ClockIcon } from '@heroicons/react/outline'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import DropDownMenu from '../DropDownList/DropDownMenu'

type Props = {
  card2ValuesState: any
  setCard2ValuesState: any
  stateObjectKey?: string
  handleBlurFunction?: any
}

const EstimatedTime = (props: Props) => {
  const { card2ValuesState, setCard2ValuesState, stateObjectKey, handleBlurFunction } = props
  return (
    <>
      <DropDownMenu
        options={null}
        CustomMenuButton={
          <ClockIcon className='w-9 p-1 mt-1 border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer ' />
        }
      >
        <div className='flex items-center gap-2 p-4 text-base'>
          <div className='block'>
            Time Estimate:
          </div>
          <span title='6h is equal to 6 hours, 2d is equal to 2 days'>
            <QuestionMarkCircleIcon className='w-5' />
          </span>
          <span>
            <input
              type="time"
              value={stateObjectKey ? `${card2ValuesState}${stateObjectKey}` : card2ValuesState}
              onChange={
                stateObjectKey ?
                  (e) => setCard2ValuesState((prev: any) => ({ ...prev, stateObjectKey: e.target.value }))
                  :
                  (e) => setCard2ValuesState(e.target.value)
              }
              onBlur={handleBlurFunction ? () => handleBlurFunction(card2ValuesState.stateObjectKey) : () => { /* EMPTY FUUNCTION */ }}
              className='p-2 h-full border rounded'
              style={{ outline: "none" }}
            />
          </span>
        </div>
      </DropDownMenu>
    </>
  )
}

export default EstimatedTime