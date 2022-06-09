import React from "react";
import { Menu } from "@headlessui/react";
import { DocumentTextIcon } from "@heroicons/react/solid";
type Props = {};

const ImportTab = () => {
  return (
    <div
      className="absolute p-4 rounded md:bottom-[50px] left-[195px] border border-gray-300 rounded shadow shadow-md
    z-100 h-auto w-[200px] bg-white opacity-100 overflow-visible"
    >
      <Menu.Item>
        {({ active }) => (
          <div className="flex flex-row text-[13px] mt-3">
            <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-3" />
            <p>CSV file</p>
          </div>
        )}
      </Menu.Item>

      <Menu.Item>
        {({ active }) => (
          <div className="flex flex-row text-[13px] mt-2">
            <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-3" />
            <p>Asana</p>
          </div>
        )}
      </Menu.Item>

      <Menu.Item>
        {({ active }) => (
          <div className="flex flex-row text-[13px] mt-2">
            <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-3" />
            <p>Jira Software</p>
          </div>
        )}
      </Menu.Item>

      <Menu.Item>
        {({ active }) => (
          <div className="flex flex-row text-[13px] mt-2">
            <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-3" />
            <p>Monday</p>
          </div>
        )}
      </Menu.Item>

      <Menu.Item>
        {({ active }) => (
          <div className="flex flex-row text-[13px] mt-2">
            <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-3" />
            <p>Todo List</p>
          </div>
        )}
      </Menu.Item>

      <Menu.Item>
        {({ active }) => (
          <div className="flex flex-row text-[13px] mt-2">
            <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-3" />
            <p>Trello</p>
          </div>
        )}
      </Menu.Item>

      <Menu.Item>
        {({ active }) => (
          <div className="flex flex-row text-[13px] mt-2">
            <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-3" />
            <p>BaseCamp</p>
          </div>
        )}
      </Menu.Item>

      <Menu.Item>
        {({ active }) => (
          <div className="flex flex-row text-[13px] mt-2">
            <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-3" />
            <p>Wrike</p>
          </div>
        )}
      </Menu.Item>
    </div>
  );
};

export default ImportTab;
