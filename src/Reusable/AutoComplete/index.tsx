import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, MailIcon, SearchIcon, SelectorIcon } from '@heroicons/react/solid'
import React, { Fragment, useState } from 'react'

type Props = {
  options?: any
  customButton?: any
  clearButtonStyle?: boolean
}


const AutoComplete = (props: Props) => {
  const { options, customButton, clearButtonStyle } = props
  const people: any = [
    { id: 1, title: 'Wade Cooper', icon: <MailIcon className='w-5 h-5 text-indigo-600' /> },
    { id: 2, title: 'Arlene Mccoy', icon: <MailIcon className='w-5 h-5 text-indigo-600' /> },
    { id: 3, title: 'Devon Webb', icon: <MailIcon className='w-5 h-5 text-indigo-600' /> },
    { id: 4, title: 'Tom Cook', icon: <MailIcon className='w-5 h-5 text-indigo-600' /> },
    { id: 5, title: 'Tanya Fox', icon: <MailIcon className='w-5 h-5 text-indigo-600' /> },
    { id: 6, title: 'Hellen Schmidt', icon: <MailIcon className='w-5 h-5 text-indigo-600' /> },
  ]

  const [selected, setSelected] = useState<any>()
  const [query, setQuery] = useState<string>('')


  const filteredPeople =
    query === ''
      ? people
      : people.filter((person: any) =>
        person.title
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )

  return (

    <>
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          {
            customButton ?
              <Combobox.Button>
                {customButton}
              </Combobox.Button> :
              <div className={`relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm`}>
                <Combobox.Input
                  className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  displayValue={(person: any) => person?.name}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
          }
          <Transition
            as={Fragment}
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute min-w-[13rem] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {/* SEARCH BAR INSIDE  */}
              {
                customButton ?
                  <div className={`relative min-w-full cursor-default overflow-hidden  bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm`}>
                    <Combobox.Input
                      className="w-full py-2 pl-7 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                      displayValue={(person: any) => person?.name}
                      onChange={(event) => setQuery(event.target.value)}
                      style={{ outline: "none" }}
                    />
                    <Combobox.Button className="absolute inset-y-0 left-0 flex items-center pl-1">
                      <SearchIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>
                  </div> :
                  null
              }

              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((elem: any) => (
                  <Combobox.Option
                    key={elem.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 ${active ? 'bg-indigo-100 text-indigo-800' : 'text-gray-900'
                      }`
                    }
                    value={elem}
                  >
                    {({ selected, active }) => (
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
                        {/* {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                              }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null} */}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </>
  )
}

export default AutoComplete