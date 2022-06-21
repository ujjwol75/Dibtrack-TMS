import { Listbox, Transition } from '@headlessui/react'
import { SelectorIcon, MailIcon } from '@heroicons/react/solid'
import { Fragment, useEffect, useState } from 'react'

type Props = {
  options?: any
  customButton?: any
  buttonStyle?: string
  selected: any
  setSelected: any
  handleAPICall?: any
  initialValue?: any
}

const DropDownListBox = ((props: Props) => {
  const { options, customButton, buttonStyle, selected, setSelected, handleAPICall, initialValue } = props
  const people = [
    { id: '1', title: 'Wade Cooper', icon: <MailIcon className='w-5 h-5' /> },
    { id: '2', title: 'Arlene Mccoy', icon: <MailIcon className='w-5 h-5' /> },
    { id: '3', title: 'Devon Webb', icon: <MailIcon className='w-5 h-5' /> },
    { id: '4', title: 'Tom Cook', icon: <MailIcon className='w-5 h-5' /> },
    { id: '5', title: 'Tanya Fox', icon: <MailIcon className='w-5 h-5' /> },
    { id: '6', title: 'Hellen Schmidt', icon: <MailIcon className='w-5 h-5' /> },
  ]

  const handleSelect = (e: any) => {
    handleAPICall(e.id)
    setSelected(e)
  }

  // SET INITIAL VALUE
  useEffect(() => {
    if (initialValue) {
      const found = options.find((object: any) => object.id == initialValue)
      setSelected(found)
    }
  }, [initialValue])


  return (
    <>
      <Listbox value={selected} onChange={(e) => handleSelect(e)} >
        <div className='relative mt-1'>
          {
            customButton ?
              <Listbox.Button>
                {customButton}
                {/* {selected ? selected?.clear ? customButton : selected?.icon : customButton} */}
              </Listbox.Button>
              :
              <Listbox.Button className={`${buttonStyle ? buttonStyle : "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"}`}>
                <span className="block truncate">{people[0]?.title}</span>
                {
                  buttonStyle ?
                    null :
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                }
              </Listbox.Button>
          }
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-50 absolute min-w-10 w-40 mt-1 max-h-60 overflow-auto rounded-md bg-white opacity-100 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {(options ? options : people)?.map((elem: any, index: number) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-2 ${active ? 'bg-indigo-100 text-indigo-800' : 'text-gray-900'
                    }`
                  }
                  value={elem}
                >
                  {({ selected }) => (
                    <>
                      <span className='flex items-center'>
                        {
                          elem.icon ?
                            <span className='mr-2'>
                              {elem.icon}
                            </span> : null
                        }
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'
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

export default DropDownListBox