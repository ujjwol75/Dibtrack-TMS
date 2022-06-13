import React from 'react'

type Props = {
    color:any
    setThemeColor: any
}

const ColorDiv = ({color , setThemeColor}: Props) => {
  return (
    <div className={`h-5 w-5 rounded-full ml-2 ${color}`} onClick ={ () => setThemeColor(color)}></div> 
  )
}

export default ColorDiv