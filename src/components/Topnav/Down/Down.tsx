import { Switch } from '@headlessui/react'
import React from 'react'

type Props = { 
    enabled:any,
    setEnabled:any,
    name:any
}

const Down = (props: Props) => {
    const {enabled,setEnabled,name} = props
  return (
    <> 
            <div className="grid grid-cols-1 px-4 py-2">
              <div className='flex flex-row justify-between items-center'>
                <span>{name}</span>
                <span>
                  <div className="">
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
                        relative inline-flex h-6 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={`${enabled ? 'translate-x-4' : 'translate-x-0'}
                          pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                      />
                    </Switch>
                  </div>
                </span>
              </div>
              
            </div>

            <img src="/solutions.jpg" alt="" />
    </>
  )
}

export default Down