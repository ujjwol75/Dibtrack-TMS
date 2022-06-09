import { Menu } from '@headlessui/react'
import React from 'react'

type Props = {
  size: string
}

const CircleUserIcon = (props: Props) => {
  const { size = "xs" } = props
  return (
    <>
      <Menu>
        <Menu.Button>
          <span className={` ${size === "xs" ? "px-[6px] py-[4px] text-xs" : size === "md" ? "px-3 py-2" : ""} h-fit rounded-full bg-green-500 text-white cursor-pointer`}>
            SS
          </span>
        </Menu.Button>
        <Menu.Items>
          <Menu.Item>
            <div className='w-20 h-20 bg-slate-500'>

            </div>
          </Menu.Item>
        </Menu.Items>
      </Menu>

    </>
  )
}

export default CircleUserIcon