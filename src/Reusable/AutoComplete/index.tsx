import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, MailIcon, SearchIcon, SelectorIcon } from '@heroicons/react/solid'
import React, { Fragment, useEffect, useState } from 'react'

type Props = {
  options?: any
  customButton?: any
  clearButtonStyle?: boolean
  multiSelect?: boolean
  selected?: any
  setSelected?: any
  handleAPICall: any
}


const AutoComplete = (props: Props) => {
  const { options,
    customButton,
    clearButtonStyle,
    multiSelect = false,
    selected,
    setSelected,
    handleAPICall,
  } = props

  const [query, setQuery] = useState<string>('')

  const handleChange = (e: any) => {
    setSelected(e)
  }

  let selectedList: any = []
  const afterListClose = () => {
    setQuery('')
    if (multiSelect) {
      selected?.map((elem: any) => {
        selectedList.push(elem.id)
      })
      handleAPICall(selectedList)
    }
  }

  const filteredItems =
    query === ''
      ? options
      : options.filter((option: any) =>
        option.title
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )

  return (
    <>
      <Combobox value={selected} onChange={(e) => handleChange(e)} multiple={multiSelect}>
        <div className='relative mt-1'>
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
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => afterListClose()}
          >
            <Combobox.Options className="absolute z-50 min-w-[15rem] mt-1 max-h-60 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {/* SEARCH BAR INSIDE  */}
              {
                customButton ?
                  <div className={`relative min-w-full cursor-default overflow-hidden  bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm`}>
                    <Combobox.Input
                      className="w-full py-2 pl-7 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 border-b"
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

              {filteredItems.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredItems?.map((elem: any) => (
                  <Combobox.Option
                    key={elem.id}
                    className={({ active }) =>
                      `relative cursor-default select-none ${active ? 'bg-indigo-100 text-indigo-800' : 'text-gray-900'}`
                    }
                    value={elem}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`flex items-center ${selected ? "bg-indigo-200" : ""}  px-4 py-2`}>
                          {
                            elem.icon ?
                              <span className='mr-2'>
                                {elem.icon}
                              </span> : null
                          }
                          <span className={`block truncate`}>
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