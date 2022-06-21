import { StarIcon } from '@heroicons/react/solid'
import React from 'react'
import DropDownListBox from '../DropDownList/DropDownListBox'

type Props = {
  kpiPoints: any
  setKpiPoints: any
  handleChangeKpiPoints: any
}

const KpiPoints = (props: Props) => {
  const { kpiPoints, setKpiPoints, handleChangeKpiPoints } = props

  const KpiOptions = [
    { id: null, title: "--", icon: <StarIcon className='w-7 p-1 text-gray-500' /> },
    { id: 1, title: "1", icon: <StarIcon className='w-7 p-1 text-gray-500' /> },
    { id: 2, title: "2", icon: <StarIcon className='w-7 p-1 text-gray-500' /> },
    { id: 4, title: "4", icon: <StarIcon className='w-7 p-1 text-gray-500' /> },
    { id: 6, title: "6", icon: <StarIcon className='w-7 p-1 text-gray-500' /> },
    { id: 8, title: "8", icon: <StarIcon className='w-7 p-1 text-gray-500' /> }
  ]
  return (
    <DropDownListBox
      options={KpiOptions}
      selected={kpiPoints}
      setSelected={setKpiPoints}
      handleAPICall={handleChangeKpiPoints}
      customButton={
        kpiPoints ?
          <>
            <span className='flex items-center gap-2 text-black' title={`${kpiPoints?.title} Points`}>
              <StarIcon className='w-5 text-btncolor cursor-pointer' />
              <p>{kpiPoints?.title}</p>
            </span>
          </>
          :
          <StarIcon className='w-9 p-1 border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer ' />
      }
    />
  )
}

export default KpiPoints