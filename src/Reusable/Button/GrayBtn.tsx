import React from 'react'

type Props = {
    text:string
}

const GrayBtn = (props: Props) => {

    
  return (
    <>
    <button className="py-2 px-4 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
    {props.text}
    </button>
    </>
  )
}

export default GrayBtn