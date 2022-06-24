import { StarIcon, XIcon } from '@heroicons/react/solid'
import React from 'react'
import DropDownListBox from '../DropDownList/DropDownListBox'

type Props = {
  initialValue?: any
  kpiPoints: any
  setKpiPoints: any
  handleChangeKpiPoints: any
  size?: any
}

const KpiPoints = (props: Props) => {
  const { kpiPoints, setKpiPoints, handleChangeKpiPoints, initialValue, size = "md" } = props

  const KpiOptions = [
    { id: null, title: "--", icon: <XIcon className='w-6 h-6 text-red-500' /> },
    { id: 1, title: "1", icon: <StarIcon className='w-7 p-1 text-yellow-500' /> },
    { id: 2, title: "2", icon: <StarIcon className='w-7 p-1 text-yellow-500' /> },
    { id: 4, title: "4", icon: <StarIcon className='w-7 p-1 text-yellow-500' /> },
    { id: 6, title: "6", icon: <StarIcon className='w-7 p-1 text-yellow-500' /> },
    { id: 8, title: "8", icon: <StarIcon className='w-7 p-1 text-yellow-500' /> }
  ]
  return (
    <DropDownListBox
      initialValue={initialValue}
      options={KpiOptions}
      selected={kpiPoints}
      setSelected={setKpiPoints}
      handleAPICall={handleChangeKpiPoints}
      customButton={
        kpiPoints?.id ?
          <>
            <span className='flex items-center mt-1 gap-1 text-black' title={`${kpiPoints?.title} Points`}>
              <StarIcon className='w-6  text-yellow-500 cursor-pointer' />
              <p className='text-base'>{kpiPoints?.title}</p>
            </span>
          </>
          :
          <StarIcon className={`${size == 'sm' ? 'w-7' : size == 'md' ? 'w-9 p-1' : ''}   border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer `} />
      }
    />
  )
}

export default KpiPoints