import { Listbox, Transition } from '@headlessui/react'
import { SelectorIcon, MailIcon } from '@heroicons/react/solid'
import { Fragment, useState } from 'react'

type Props = {
  options?: any
  customButton?: any
}

const DropDownListBox = ((props: Props) => {
  const { options, customButton } = props
  const people = [
    { id: '1', title: 'Wade Cooper', icon: <MailIcon className='w-5 h-5' /> },
    { id: '2', title: 'Arlene Mccoy', icon: <MailIcon className='w-5 h-5' /> },
    { id: '3', title: 'Devon Webb', icon: <MailIcon className='w-5 h-5' /> },
    { id: '4', title: 'Tom Cook', icon: <MailIcon className='w-5 h-5' /> },
    { id: '5', title: 'Tanya Fox', icon: <MailIcon className='w-5 h-5' /> },
    { id: '6', title: 'Hellen Schmidt', icon: <MailIcon className='w-5 h-5' /> },
  ]
  const [selected, setSelected] = useState(people[0])

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          {
            customButton ?
              <Listbox.Button>
                {customButton}
              </Listbox.Button>
              :
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selected.title}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
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
              {(options ? options : people).map((elem: any, index: number) => (
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