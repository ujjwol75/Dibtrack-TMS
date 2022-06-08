import { TrendingDownIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import MidBox from '../BoxLayout/MidBox'

type Props = {}

const ButtonPopUp = (props: Props) => {
    const [show, setShow] = useState(false)

  const showHandler = () => {
    setShow(!show)
  }
  return (
    <>
    <div className="flex flex-row-reverse p-4 relative">
        <div onClick={() => { showHandler() }}>
          {/* <ButtonPopUp /> */}fsfsdfs
        </div>


        { show && <MidBox  /> }

      </div>
    </>
  )
}

export default ButtonPopUp