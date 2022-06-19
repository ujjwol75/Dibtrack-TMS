import React from 'react'
import {Menu} from "@headlessui/react";
import {RefreshIcon, SaveAsIcon, TemplateIcon} from '@heroicons/react/solid';

type Props = {}

const TemplateTab = (props: Props) => {
  return (
    <div className="absolute p-4 top-12 left-[195px] border border-gray-300 rounded shadow-md
     z-100 h-auto w-[200px] bg-white opacity-100 overflow-visible text-txtcolor text-sm">

      <Menu.Item>
        <h2 className="text-gray-500 text-center ">Template Center</h2>
      </Menu.Item>
      <Menu.Item>
        {({active}) => (
          <div className="flex flex-row text-[13px] mt-3">
            <TemplateIcon className="h-5 w-5  mr-3"/>
            <p>Browse Templates</p>
          </div>
        )}
      </Menu.Item>

      <Menu.Item>
        {({active}) => (
          <div className="flex flex-row  mt-3">
            <SaveAsIcon className="h-5 w-5 mr-3"/>
            <p>save as Templates</p>
          </div>
        )}
      </Menu.Item>

      <Menu.Item>
        <div className="flex flex-row justify-between  mt-3">

          <div className="flex flex-row">
            <RefreshIcon className="h-5 w-5  mr-3"/>
            <p>Update Existing Templates</p>
          </div>

        </div>
      </Menu.Item>
    </div>
  )
}

export default TemplateTab