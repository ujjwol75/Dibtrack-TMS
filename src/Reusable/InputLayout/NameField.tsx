import React, { useState } from 'react'

type Props = {

  name : string
  
  type:string
}

const NameField = (props: Props) => {
  const {name,  type} = props
  const[userInput, setUserInput] = useState('')
   
  const changeHandler=(e:any)=>{
    setUserInput(e.target.value)
  }

  return (
    <>
    <input type={type} name={name}   onChange={(e)=>changeHandler(e)} className='w-[17rem] h-[2rem] border-2 border-red-400 focus:border-red-500 outline-none font-light text-sm text-gray-400' />
                <div className='border-y-2 border-r-2 border-gray-300 '></div>
    </>
  )
}

export default NameField