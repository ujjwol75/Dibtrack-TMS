import React from 'react'
import {Menu} from "@headlessui/react";
import {CogIcon, EmojiHappyIcon, PencilAltIcon, ServerIcon, SortAscendingIcon} from '@heroicons/react/solid';

type Props = {}

const SpaceSettingsTab = (props: Props) => {
  return (
    <div className="absolute p-4 rounded bottom-[100px] md:left-[195px] border border-gray-300 rounded shadow shadow-md
    z-100 h-auto w-[250px] bg-white opacity-100 overflow-visible text-txtcolor">
      <Menu.Item>
        <div className="flex flex-row hover:bg-bgsearchbar p-1 text-sm">
          <CogIcon className="h-4 w-4 mt-1"/>
          <p className='ml-2'>All Space Settings</p>
        </div>
      </Menu.Item>
      <hr color='gray' className='mt-3 mb-3'/>
      <Menu.Item>
        <div className="flex flex-row hover:bg-bgsearchbar p-1 text-sm">
          <EmojiHappyIcon className="h-4 w-4 mt-1"/>
          <p className='ml-2'>Automation</p>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className="flex flex-row hover:bg-bgsearchbar p-1 text-sm">
          <EmojiHappyIcon className="h-4 w-4 mt-1"/>
          <p className='ml-2'>Avatar</p>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className="flex flex-row hover:bg-bgsearchbar p-1 text-sm">
          <EmojiHappyIcon className="h-4 w-4 mt-1"/>
          <p className='ml-2'>All Space Settings</p>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className="flex flex-row hover:bg-bgsearchbar p-1 text-sm">
          <PencilAltIcon className="h-4 w-4 mt-1"/>
          <p className='ml-2'>Custom Task Field</p>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className="flex flex-row hover:bg-bgsearchbar p-1 text-sm">
          <ServerIcon className="h-4 w-4 mt-1"/>
          <p className='ml-2'>Task Statuses</p>
        </div>
      </Menu.Item>
      <hr color='gray' className='mt-3 mb-3'/>
      <Menu.Item>
        <div className="flex flex-row hover:bg-bgsearchbar p-1 text-sm">
          <SortAscendingIcon className="h-4 w-4 mt-1"/>
          <p className='ml-2'>Task Statuses</p>
        </div>
      </Menu.Item>
    </div>
  )
}

export default SpaceSettingsTab