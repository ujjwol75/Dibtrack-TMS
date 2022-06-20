import { Menu } from '@headlessui/react'
import React from 'react'

type Props = {
  size: string
  color:any
  
}

const CircleUserIcon1 = (props: Props) => {
  const { size , color } = props
  return (
    <>
      <span className={` ${size === "xs" ? "px-[6px] py-[4px] text-xs" : size === "md" ? "px-3 py-2" : size === "lg" ? "px-6 py-5": size === "sm" ? "px-[6px] py-[6px]" : ""} 
      h-fit rounded-full ${color} text-white cursor-pointer`}>
        SS
      </span>
    </>
  )
}

export default CircleUserIcon1