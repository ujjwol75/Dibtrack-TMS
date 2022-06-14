import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import DropDownListBox from '../../../../Reusable/DropDownList/DropDownListBox'
import DropDownMenu from '../../../../Reusable/DropDownList/DropDownMenu'
import GroupBy from '../GroupBy'
import RemainderPopOver from '../PopOver/RemainderPopOver'
import TodoBlock from './TodoBlock/TodoBlock'

type Props = {
    remainder:boolean
    setRemainder:any
}

const Today = (props: Props) => {
    const {remainder , setRemainder } = props
    const[task,setTask]=useState(false)
    return (
        <>
            <div>
                <Menu>
                    <div className='flex'>

                        <div >
                            <Menu.Button className={"flex"}>
                                <ChevronDownIcon
                                    className="ml-2h-5 w-5 text-violet-200 hover:text-violet-100 inline-block"
                                    aria-hidden="true" />
                                <span className='ml-2'>Today</span>
                            </Menu.Button>
                        </div>
                        <TodoBlock/>
                    </div>
                    
                    <Menu.Items>
                        <Menu.Item>
                            {({ active }) => (
                                <div className='w-full border-2 border-gray-200 p-6 text-center my-2'>
                                    <div className='flex justify-center'>

                                        <img src="/logo192.png" alt="" />
                                    </div>
                                    <p className='text-2xl'>Woohoo, Inbox zero!</p>
                                    <p >Tasks and Reminders that are scheduled for Today will </p>
                                    <p >appear here.</p>

                                </div>
                            )}
                        </Menu.Item>


                    </Menu.Items>
                </Menu>
            </div>
        </>
    )
}

export default Today