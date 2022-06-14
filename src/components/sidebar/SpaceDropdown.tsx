import React from 'react'
import { Menu } from "@headlessui/react";
import {
  ChevronRightIcon,
  PlusIcon,
  PencilIcon,
  LinkIcon , 
  DuplicateIcon , 
  StarIcon,
  EyeOffIcon ,
  TrashIcon,
  ShareIcon ,
  TemplateIcon,
  CogIcon ,  
  ArchiveIcon
  

} from "@heroicons/react/solid";
import SpacePlusTab from './SpacePlusTab';
import TemplateTab from './TemplateTab';
import SpaceSettingsTab from './SpaceSettingsTab';
type Props = {}

const SpaceDropdown = (props: Props) => {
  return (
    <div className="absolute bg-white opacity-100 p-4 rounded sm:left-[200px] md:bottom-[70px] left-[300px] text-txtcolor
    z-50 h-auto w-[300px]  border border-gray-200  shadow-md overflow-visible text-sm">
      <Menu.Item>
          <div className="flex flex-row justify-between hover:bg-bgsearchbar p-1">
              <div className='flex flex-row'>
              <PlusIcon className = "h-4 w-4 mt-1" />
               
                 <p className='ml-2'>Create new</p>
                 
                
              </div>
              <Menu>
                 <Menu.Button>
                 <ChevronRightIcon className = "h-5 w-5" />
                 </Menu.Button>
                 <Menu.Items>
                   <SpacePlusTab />
                 </Menu.Items>
              </Menu>
          </div>
      </Menu.Item>

      <Menu.Item>
          <div className="flex flex-row  hover:bg-bgsearchbar p-1">
              
              <PencilIcon className = "h-4 w-4 mt-1" />
                <p className='ml-2'>Rename</p>
             
          </div>
      </Menu.Item>


      <Menu.Item>
          <div className="flex flex-row  hover:bg-bgsearchbar p-1">
              
          <LinkIcon className = "h-4 w-4 mt-1" />
                <p className='ml-3'>Link</p>
             
          </div>
      </Menu.Item>


      <Menu.Item>
          <div className="flex flex-row  border-b border-gray-200 hover:bg-bgsearchbar p-1 pb-4">
             
          <DuplicateIcon className = "h-4 w-4 mt-1" />
                <p className='ml-3'>Duplicate</p>
             
          </div>
      </Menu.Item>



      <Menu.Item>
          <div className="flex flex-row hover:bg-bgsearchbar p-1 mt-2 ">
              
          <StarIcon className = "h-4 w-4 mt-1" />
                <p className='ml-3'>Add To Favorites</p>
             
          </div>
      </Menu.Item>


      <Menu.Item>
          <div className="flex flex-row pb-4 p-1 hover:bg-bgsearchbar border-b border-gray-200">
             
          <EyeOffIcon className = "h-4 w-4 mt-1" />
                <p className='ml-3'>Hide</p>
             
          </div>
      </Menu.Item>

      
    
      <Menu.Item>
          <div className="flex flex-row justify-between p-1 hover:bg-bgsearchbar">
              <div className='flex flex-row'>
              <TemplateIcon className = "h-4 w-4 mt-1" />
               
                  <p className='ml-3'>Template center</p>
                  
                  
                
              </div>
              <Menu>
                <Menu.Button>
                <ChevronRightIcon className = "h-5 w-5" />
                </Menu.Button>
                <Menu.Items>
                    <TemplateTab />
                  </Menu.Items>
                </Menu>
              
             
          </div>
      </Menu.Item>

      <Menu.Item>
          <div className="flex flex-row  p-1 justify-between border-b border-gray-200 hover:bg-bgsearchbar">
              <div className='flex flex-row'>
              <CogIcon className = "h-4 w-4 mt-1" />
                <p className='ml-3'>Space Settings</p>
              </div>
              <Menu>
                <Menu.Button>
                <ChevronRightIcon className = "h-5 w-5 " />
                </Menu.Button>
                <Menu.Items>
                      <SpaceSettingsTab />
                </Menu.Items>
              </Menu>
              
          </div>
      </Menu.Item>

    
      <Menu.Item>
          <div className="flex flex-row hover:bg-bgsearchbar p-1 mt-2">
              
          <ShareIcon className = "h-4 w-4 mt-1" />
                <p className='ml-3'>Share and Permissions</p>
             
          </div>
      </Menu.Item>


      <Menu.Item>
          <div className="flex flex-row  p-1 hover:bg-bgsearchbar">
              
          <ArchiveIcon className = "h-4 w-4 mt-1" />
                <p className='ml-3'>Archive</p>
             
          </div>
      </Menu.Item>


      <Menu.Item>
          <div className="flex flex-row  text-red-600 p-1 hover:bg-bgsearchbar">
             
          <TrashIcon className = "h-4 w-4 mt-1" />
                <p className='ml-3'>Delete</p>
             
          </div>
      </Menu.Item>
        
    </div>
  )
}

export default SpaceDropdown