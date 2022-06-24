import { ClockIcon } from '@heroicons/react/outline'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import moment from 'moment'
import React from 'react'
import DropDownMenu from '../DropDownList/DropDownMenu'

type Props = {
  card2ValuesState: any
  setCard2ValuesState: any
  stateObjectKey?: any
  handleBlurFunction?: any
  size?: any
}

const EstimatedTime = (props: Props) => {
  const { card2ValuesState, setCard2ValuesState, stateObjectKey, handleBlurFunction, size = "md" } = props

  return (
    <>
      <DropDownMenu
        options={null}
        CustomMenuButton={
          card2ValuesState[stateObjectKey] ?
            <span className='text-xs' title={moment().subtract(7, 'hours').format("hh").toString() + "hrs remaining"}>
              <p>ESTIMATED</p>
              <span className='text-gray-900'>{card2ValuesState[stateObjectKey]}</span>
            </span>
            :
            <ClockIcon className={` ${size == 'sm' ? 'w-7 p-[2px]' : size == 'md' ? 'w-9 p-1 ' : ''} mt-1 border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer `} />
        }
      >
        <div className='flex items-center gap-2 -mt-2 p-4 text-base'>
          <div className='block'>
            Time Estimate:
          </div>
          <span title='6h is equal to 6 hours, 2d is equal to 2 days'>
            <QuestionMarkCircleIcon className='w-5' />
          </span>
          <span>
            <input
              type="time"
              value={stateObjectKey ? card2ValuesState[stateObjectKey] : card2ValuesState}
              onChange={
                stateObjectKey ?
                  (e) => setCard2ValuesState((prev: any) => ({ ...prev, [stateObjectKey]: e.target.value }))
                  :
                  (e) => setCard2ValuesState(e.target.value)
              }
              onBlur={handleBlurFunction ? (e) => handleBlurFunction(e.target?.value) : () => { /* EMPTY FUUNCTION */ }}
              className='p-2 h-full border rounded'
              style={{ outline: "none" }}
            />
          </span>
          <button
            className='bg-btncolor hover:bg-indigo-600 rounded px-2 h-fit text-sm text-white'
            onClick={
              stateObjectKey ?
                () => setCard2ValuesState((prev: any) => ({ ...prev, [stateObjectKey]: "" }))
                :
                () => setCard2ValuesState("")
            }
          >
            Clear
          </button>
        </div>
      </DropDownMenu>
    </>
  )
}

export default EstimatedTime