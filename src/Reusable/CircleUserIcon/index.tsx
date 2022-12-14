import { Menu } from '@headlessui/react'
import React from 'react'

type Props = {
  size: string;
  avatarIcon?: any;
  
}

const CircleUserIcon = (props: Props) => {
  const { size,avatarIcon} = props
  return (
    <>
      <span className={` ${size === "xs" ? "px-[6px] py-[4px] text-xs" : size === "md" ? "px-3 py-2" : size === "lg" ? "px-6 py-5": size === "sm" ? "px-[6px] py-[6px]" : ""} h-fit rounded-full bg-green-500 text-white cursor-pointer`}>
        {avatarIcon}
      </span>
    </>
  )
}

export default CircleUserIcon