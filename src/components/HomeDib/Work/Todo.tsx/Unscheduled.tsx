import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import React from 'react'

type Props = {}

const Unscheduled = (props: Props) => {
    return (
        <>
            <div>
                <Menu>
                    <div className='flex'>

                        <div >
                        <Menu.Button className={"flex"}>
                            <ChevronDownIcon
                            className="ml-2h-5 w-5 text-violet-200 hover:text-violet-100 inline-block"
                            aria-hidden="true"/> 
                            <span className='ml-2'>Unscheduled</span>
                            </Menu.Button>
                        </div>
                        <div className='flex justify-between w-full '>


                            <div >
                                <span className='ml-4 text-sm text-gray-400'>+Task</span> <span className='ml-2 text-sm text-gray-400'> +Remainder</span>
                            </div>
                            <div >

                                <span className=' text-sm text-gray-400'>fsd</span>
                            </div>
                        </div>
                    </div>
                    <Menu.Items>
                        <Menu.Item>
                            {({ active }) => (
                                <div className='flex justify-center w-full my-4 mx-4  p-1'>
                                    <div className="w-full border-2 border-gray-400  flex justify-center p-2">
                                        <p className='text-xs text-gray-400'>No unscheduled tasks assigned to you.</p>
                                    </div>
                                </div>
                            )}
                        </Menu.Item>

                    </Menu.Items>
                </Menu>
            </div>
        </>
    )
}

export default Unscheduled