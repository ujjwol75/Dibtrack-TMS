import { Menu } from '@headlessui/react'
import React from 'react'

type Props = {
  size: string
  color: any

}

const CircleUserIcon1 = (props: Props) => {
  const { size, color } = props
  return (
    <>
      <span className={` ${size === "xs" ? "p-1 text-xs" : size === "md" ? "p-3" : size === "lg" ? "px-6 py-5" : size === "sm" ? "px-[6px] py-[3px]" : ""} 
      flex justify-center items-center rounded-full ${color} text-white cursor-pointer`}>
        SS
      </span>
    </>
  )
}
export default CircleUserIcon1