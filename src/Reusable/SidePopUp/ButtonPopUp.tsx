import { TrendingDownIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import MidBox from '../BoxLayout/MidBox'
import SidePopUp from './SidePopUp'

type Props = {
    sidePopUp:any
    popUp :boolean
    children:any
}

const ButtonPopUp = (props: Props) => {
    const{sidePopUp,popUp,children} =props
    const [show, setShow] = useState(false)

  const showHandler = () => {
    // setShow(!show)
    // sidePopUp(!popUp)
  }
  return (
    <>
    <div className="flex flex-row-reverse p-4 relative">
        <div className='flex' onClick={() => { sidePopUp(!popUp) }}>
        
        {children}
        </div>


        {/* { show && <MidBox  /> } */}

      </div>
    </>
  )
}

export default ButtonPopUp