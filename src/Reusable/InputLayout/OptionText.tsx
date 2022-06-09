import React, { useState } from 'react'

type Props = {
  name : string
  
  type:string
}


  

const OptionText = (props: Props) => {
  const {name,  type} = props
  const[userInput, setUserInput] = useState('')
   
  const changeHandler=(e:any)=>{
    setUserInput(e.target.value)
  }
  return (
    <>
    <input type={type} name={name}   onChange={(e)=>changeHandler(e)} className='w-[31.3rem] h-[2rem] ml-[12px] border-2 border-gray-400 focus:border-red-500  font-light text-sm py-2 text-gray-400' />
    </>
  )
}

export default OptionText

