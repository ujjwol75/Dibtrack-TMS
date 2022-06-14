import { Tab } from '@headlessui/react'
import { InformationCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import Comment from './Comment/Comment'
import Delegated from './Delegated/Delegated'
import Done from './Done/Done'
import Todo from './Todo.tsx/Todo '

type Props = {
    remainder:boolean
    setRemainder:any
}

const Work = (props: Props) => {
    const {remainder , setRemainder } = props
    function classNames(...classes:any) {
        return classes.filter(Boolean).join(' ')
      }
    return (
        <>
                <div>
                    <p className='text-2xl '>Work<InformationCircleIcon className='w-4 h-4 inline-block text-gray-400 ' /><span className='text-gray-400 text-lg ml-1'>(0)</span></p>
                </div>
            <div className='w-full p-4 flex-col'>

                <div className='flex-col justify-center w-full my-6 mx-4  p-1'>

                    <Tab.Group>
                        <Tab.List className=''>
                            
                            <Tab className={({ selected }) =>
                                classNames(
                                    'mx-4 text-gray-400 text-sm outline-none pb-4',
                                    '',
                                    selected
                                        ? 'text-black border-b-4 border-blue-400'
                                        : ''
                                )
                            }>To do</Tab>
                            <Tab className={({ selected }) =>
                                classNames(
                                    'mx-4 text-gray-400 text-sm outline-none pb-4',
                                    '',
                                    selected
                                        ? 'text-black border-b-4 border-blue-400'
                                        : ''
                                )
                            }>Comments</Tab>
                            <Tab className={({ selected }) =>
                                classNames(
                                    'mx-4 text-gray-400 text-sm outline-none pb-4',
                                    '',
                                    selected
                                        ? 'text-black border-b-4 border-blue-400'
                                        : ''
                                )
                            }>Done</Tab>
                            <Tab className={({ selected }) =>
                                classNames(
                                    'mx-4 text-gray-400 text-sm outline-none pb-4',
                                    '',
                                    selected
                                        ? 'text-black border-b-4 border-blue-400'
                                        : ''
                                )
                            }>Delegated</Tab>
                        </Tab.List>
                        <hr />
                        <Tab.Panels>
                            <Tab.Panel className='m-2'><Todo  remainder ={remainder} setRemainder = {setRemainder} /></Tab.Panel>
                            <Tab.Panel><Comment/></Tab.Panel>
                            <Tab.Panel><Done/></Tab.Panel>
                            <Tab.Panel><Delegated/></Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>

            </div>
        </>
    )
}

export default Work