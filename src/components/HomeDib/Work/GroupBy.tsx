import { Listbox, Transition } from '@headlessui/react'
import { SelectorIcon, CheckIcon, MailIcon, FlagIcon } from '@heroicons/react/solid'
import React, { forwardRef, Fragment, useState } from 'react'

type Props = {
  options?: any
  customButton?: any
}

const GroupBy = ((props: Props) => {
  const { options, customButton } = props
  const people = [
    // { id: '0', title: 'GroupBy', icon: <MailIcon className='w-5 h-5' /> },
    { id: '1', title: 'Status', icon: <MailIcon className='w-5 h-5' /> },
    { id: '2', title: 'Due date', icon: <MailIcon className='w-5 h-5' /> },
    { id: '3', title: 'Date Created', icon: <MailIcon className='w-5 h-5' /> },
    { id: '4', title: 'Date Update', icon: <MailIcon className='w-5 h-5' /> },
    { id: '5', title: 'Priority', icon: <MailIcon className='w-5 h-5' /> },
    
  ]
  const [selected, setSelected] = useState(people[0])

  return (
    <>
      <Listbox value={selected} onChange={setSelected} >
        <div className="relative mt-1 ">
          {
            customButton ?
              <Listbox.Button>
                {customButton}
              </Listbox.Button>
              :
              <Listbox.Button className="">
                <span className="block truncate">{selected.title}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  
                </span>
              </Listbox.Button>
          }
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute min-w-[8rem] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <div className='flex justify-center'>
                <div>

                GroupBy
                </div>
                </div>
              {(options ? options : people).map((elem: any, index: number) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-2 bg-white ${active ? 'bg-indigo-100 text-indigo-800' : 'text-gray-900 bg-white'
                    }`
                  }
                  value={elem}
                >
                  {({ selected }) => (
                    <>
                      <span className='flex items-center bg-white'>
                        {
                          elem.icon ?
                            <span className='mr-2 bg-white'>
                              {elem.icon}
                            </span> : null
                        }
                        <span
                          className={`block truncate bg-white ${selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {elem.title}
                        </span>
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  )
})

export default GroupBy