import React from 'react'
import LoaderButton from '../Loader/LoaderButton'

type Props = {
  text: string
}

const Button = (props: Props) => {
  return (
    <>
      <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        {props.text}
      </button>
    </>
  )
}

export default Button