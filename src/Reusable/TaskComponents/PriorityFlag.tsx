import { FlagIcon, XIcon } from '@heroicons/react/solid'
import React from 'react'
import DropDownListBox from '../DropDownList/DropDownListBox'

type Props = {
  initialValue: any
  priorityState: any
  setPriorityState: any
  handleAPICall: any
  size:any
}

const PriorityFlag = (props: Props) => {
  const { initialValue, priorityState, setPriorityState, handleAPICall   , size} = props

  const PriorityOptions = [
    { id: '1', title: 'Urgent', icon: <FlagIcon className='w-7 p-1 text-red-500' />, color: "rgb(239 68 68 )", },
    { id: '2', title: 'High', icon: <FlagIcon className='w-7 p-1 text-orange-500' />, color: "rgb(249 115 22)", },
    { id: '3', title: 'Medium', icon: <FlagIcon className='w-7 p-1 text-blue-500' />, color: "rgb(59 130 246)", },
    { id: '4', title: 'Low', icon: <FlagIcon className='w-7 p-1 text-gray-500' />, color: "rgb(107 114 128)", },
    { id: null, title: 'Clear', icon: <XIcon className='w-6 h-6 text-red-500' />, color: "rgb(239 68 68 )" },
  ]
  return (
    <DropDownListBox
      initialValue={initialValue}
      selected={priorityState}
      setSelected={setPriorityState}
      options={PriorityOptions}
      handleAPICall={handleAPICall ? handleAPICall : () => { }}
      customButton={
        priorityState?.id === null ?
          <FlagIcon className={`${size == 'sm' ? 'w-7': size == 'md' ? 'w-9': ''} p-1 border-2 border-dashed rounded-full text-gray-400 cursor-pointer`} />
          :
          <span title={`${priorityState ? priorityState.title : ""}`}>
            <FlagIcon
              className={`${size == 'sm' ? 'w-7': size == 'md' ? 'w-9': ''} p-1 border-2 border-dashed rounded-full text-gray-400 cursor-pointer ${priorityState ? "" : "hover:text-btncolor hover:border-btncolor"} `}
              style={{
                color: `${priorityState ? priorityState.color : null}`,
                border: `${priorityState ? priorityState.color : null} solid 1px`
              }}
            />
          </span>
      }
    />
  )
}

export default PriorityFlag