import React from "react";
import { Menu } from "@headlessui/react";
import {ArchiveIcon , MapIcon , BellIcon} from "@heroicons/react/solid";
type Props = {};

const SettingsTab = (props: Props) => {
  return (
    <div className="absolute bg-opacity-100 p-4 rounded top-12 left-[195px] 
     z-100 h-50 w-50 bg-bgsearchbar overflow-visible">
       
      <Menu.Item>
      <h4 className="text-gray-500 text-center ">Account settings</h4>
      </Menu.Item>
      <Menu.Item >
        {({ active }) => (
          <div className="flex flex-row text-[13px] mt-3">
              <ArchiveIcon className="h-5 w-5 text-gray-400 mr-3" />
              <p>show archived</p>
          </div>
        )}
      </Menu.Item>

      <Menu.Item >
        {({ active }) => (
          <div className="flex flex-row text-[13px] mt-3">
              <MapIcon className="h-5 w-5 text-gray-400 mr-3" />
              <p>Layout size and style</p>
          </div>
        )}
      </Menu.Item>

      <Menu.Item >
          <div className="flex flex-row justify-between text-[13px] mt-3">

            <div className="flex flex-row">
             <BellIcon className="h-5 w-5 text-gray-400 mr-3" />
              <p>Dark side(bar)</p>
            </div>

          </div>
      </Menu.Item>
    </div>
  );
};

export default SettingsTab;
