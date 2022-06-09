import React from 'react'
import {PlusIcon } from "@heroicons/react/solid"
type Props = {
    'icon':any
    'title':string
}

const FlexItem = () => {
  return (
    <>
       <div className="flex flex-row justify-between hover:bg-bgsearchbar p-1">
          
              
              {/* <PlusIcon className = "h-4 w-4 mt-1" /> */}
            <p className='ml-2'></p>
             
        </div>
    </>
  )
}

export default FlexItem