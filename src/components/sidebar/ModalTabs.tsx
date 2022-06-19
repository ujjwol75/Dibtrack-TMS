import React from 'react'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import ColorThemePopup from '../Space/ColorThemePopup'

type Props = {}


const ModalTabs = (props: Props) => {
const [spaceName , setSpaceName] = useState<string>('')
let [isOpen, setIsOpen] = useState(false);

function closeModal() {
  setIsOpen(false);
}

function openModal() {
  setIsOpen(true);
}

const handleSubmit  = (e:any) => {
   openModal()
   e.preventDefault()
  
  console.log('space' , spaceName)
  
}
  return (
    <div className='mt-[30px]'>
        <Tab.Group>
      <Tab.List className= "flex flex-row text-txtcolor p-3 ">
      <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected ? 'text-btncolor border-b-2 border-solid border-btncolor  mr-4' : 'bg-white text-txtcolor mr-4 p-3'
              }
            >
              New
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected ? 'text-btncolor border-b-2 border-solid border-btncolor  mr-4' : 'bg-white text-txtcolor mr-4 p-3'
              }
            >
              Templates
            </button>
          )}
        </Tab>
        
      </Tab.List>
      <Tab.Panels className="border-t border-gray-100 bg-bgsearchbar w-full">
        <Tab.Panel>
            <form className='p-5 text-txtcolor' onSubmit={(e) => handleSubmit(e)}>
                <label className='text-xs'>name</label>
                <input type="text" name="" id=""  
                className = "bg-bgsearchbar mt-4 mb-4 pb-3 border-b border-gray-200  w-full focus:outline-none "
                placeholder='ENTER SPACE NAME'
                onChange={(e)=>  setSpaceName(e.target.value)}
                />
                
                <ColorThemePopup handleSubmit={handleSubmit} isopen = {isOpen}  closeModal = {closeModal} openModal = {openModal}/>
                {/* <button className='w-full bg-btncolor mt-5 p-4 text-white '>Next</button> */}
            </form>
        </Tab.Panel>
        
        
      </Tab.Panels>
    </Tab.Group>
    </div>
  )
}

export default ModalTabs

function e(e: any): void {
  throw new Error('Function not implemented.')
}
