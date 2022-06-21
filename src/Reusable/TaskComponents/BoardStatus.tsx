import React from 'react'
import DropDownListBox from '../DropDownList/DropDownListBox'

type Props = {
  initialValue: any
  boardState: any
  setBoardState: any
  handleAPICall: any
  boardDropDownList: any
  fullButton?: boolean
}

const BoardStatus = (props: Props) => {
  const { boardState, initialValue, setBoardState, handleAPICall, boardDropDownList, fullButton = true } = props
  return (
    <DropDownListBox
      initialValue={initialValue}
      selected={boardState}
      setSelected={setBoardState}
      options={boardDropDownList || []}
      handleAPICall={handleAPICall ? handleAPICall : () => { }}
      customButton={
        fullButton ?
          <span
            title={`${boardState ? boardState.title : ""}`}
            className={`flex items-center p-1 px-5 
          border rounded text-white divide-x divide-white hover:border-black`}
            style={{
              backgroundColor: `${boardState ? boardState.color : boardDropDownList && boardDropDownList[0].color}`,
            }}
          >
            <div
              className='pr-3 text-sm'>{boardState ? boardState.title : boardDropDownList && boardDropDownList[0].title}</div>
            <span className='pl-3'>&gt;</span>
          </span>
          :
          <span
            title={`${boardState ? boardState.title : ""}`}
            className={`flex items-center p-[6px] -mt-2 border rounded `}
            style={{
              backgroundColor: `${boardState ? boardState.color : "#d8d8d8"}`,
            }}
          >
          </span>
      }
    />
  )
}

export default BoardStatus