import React from 'react'
import { Menu } from "@headlessui/react";
import {ArchiveIcon , 
    MapIcon , 
    BellIcon,
    ViewListIcon,
    DocumentTextIcon,
    ClipboardIcon,
    FolderIcon,
    FolderAddIcon,
    TemplateIcon,
    ReceiptRefundIcon,
    ChevronLeftIcon,
    ChevronRightIcon


} from "@heroicons/react/solid";

import ImportTab from './ImportTab';
type Props = {
    'icon':any,
    'title':string
}


const SpacePlusTab = () => {
  return (
    <div className="absolute p-4 rounded bottom-[200px]  md:left-[195px] border border-gray-300 rounded shadow shadow-md
    z-100 h-auto w-[250px] bg-white opacity-100 overflow-visible text-txtcolor">
      
     <Menu.Item>
     <div className="flex flex-row hover:bg-bgsearchbar p-1 text-sm">
          
              
        <ViewListIcon className = "h-4 w-4 mt-1" />
        <p className='ml-2'>View List</p>
    </div>
     </Menu.Item>
     <Menu.Item >
       {({ active }) => (
         <div className="flex flex-row hover:bg-bgsearchbar p-1 text-sm">
          
              
         <ClipboardIcon  className = "h-4 w-4 mt-1" />
         <p className='ml-2'>Whiteboard</p>
     </div>
       )}
     </Menu.Item>


     <Menu.Item >
       {({ active }) => (
         <div className="flex flex-row hover:bg-bgsearchbar p-1 text-sm mt-4">
          
              
         <FolderIcon className = "h-4 w-4 mt-1" />
         <p className='ml-2'>folder</p>
     </div>
       )}
     </Menu.Item>


     <Menu.Item >
       {({ active }) => (
         <div className="flex flex-row hover:bg-bgsearchbar p-1 text-sm">
          
              
         <FolderAddIcon className = "h-4 w-4 mt-1" />
         <p className='ml-2'>sprintFolder</p>
     </div>
       )}
     </Menu.Item>

     <Menu.Item >
       {({ active }) => (
         <div className="flex flex-row hover:bg-bgsearchbar p-1 text-sm">
          
              
         <TemplateIcon className = "h-4 w-4 mt-1" />
         <p className='ml-2'>Template</p>
     </div>
       )}
    </Menu.Item>

     <Menu.Item >
         <div className="flex flex-row justify-between text-[13px] mt-3">

           <div className="flex flex-row">
            <ReceiptRefundIcon  className="h-5 w-5 text-gray-400 mr-3" />
             <p>Import</p>
           </div>
           <Menu>
               <Menu.Button>
               <ChevronRightIcon  className="h-5 w-5 text-gray-400 mr-3" />
               </Menu.Button>
               <Menu.Items> 
                <ImportTab />
           </Menu.Items>
           </Menu>
           
         </div>
     </Menu.Item>
   </div>
  )
}

export default SpacePlusTab