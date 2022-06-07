import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import { Menu } from '@headlessui/react'
import SettingsTab from "../sidebar/SettingsTab";

import {
  CogIcon,
  ChevronDoubleLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ArrowNarrowDownIcon,
  HomeIcon,
  BellIcon,
  PlusIcon,
  ViewGridIcon,
  DotsHorizontalIcon,
  SearchIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";
import SpaceDropdown from "../sidebar/SpaceDropdown";
function Sidebar() {
  const [collapse, setCollapse] = useState<boolean>(false);

  const handleCollapse = () => {
    setCollapse(true);
    console.log("collapse: ", collapse);
  };

  return !collapse ? (
    <div className="grid grid-cols-1 h-[100vh] overflow-scroll z-1">
      <div
        className="sidebar  md:w-[300px] xs:w-
        [100vw] bg-white-100 border border-black-100 overflow-scroll"
      >
        <div className="flex flex-row justify-around p-2">
          <img src={logo} className="h-[45px] w-[100px]" />
          <div className="mt-2 flex flex-row">
            <Menu>
            <Menu.Button className = "mr-5"><CogIcon className=" settings h-5 w-5 text-gray-400" /></Menu.Button>
            <Menu.Items>
               <SettingsTab />
            </Menu.Items>
            </Menu>
           

            <ChevronDoubleLeftIcon
              className="text-blue-400 ml-5 h-5 w-5 justify mt-2"
              onClick={() => handleCollapse()}
            />
          </div>
        </div>

        <div className="search-bar  flex flex-row justify-between mt-3 p-2">
          <div className="search-input w-full relative ">
          <input
            type="text"
            className=" bg-bgsearchbar focus:outline-none 
                border border-black-100 p-1 w-[75%]"
            placeholder="&nbsp; &nbsp;&nbsp;&nbsp;Search"
          />
          <SearchIcon className = "h-4 w-5 text-gray-400 absolute left-0 top-2"/>
          </div>
          

          <div className="p-1 bg-bgsearchbar text-center text-gray-500  text-xs w-[20%]">
            <i className="fa-solid fa-bolt p-2 text-black-300 hover:text-blue-400"></i>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-4 text-xs text-gray-500">
          <div className="flex flex-col">
            <div className="flex flex-row mt-3  w-full hover:bg-bgsearchbar p-2">
              <div className="mr-3">
                <HomeIcon className="h-4 w-5 " />
              </div>
              <div>home</div>
            </div>
            <div className="flex flex-row mt-3  w-full hover:bg-bgsearchbar p-2">
              <div className="mr-3">
                <BellIcon className="h-4 w-5 " />
              </div>
              <div>Notifications</div>
            </div>
            <div className="flex flex-row mt-3 w-full hover:bg-bgsearchbar p-2">
              <div className="mr-3">
                <ArrowNarrowDownIcon className="h-4 w-5 " />
              </div>
              <div>show more</div>
            </div>
          </div>
        </div>

        <div className="grid-cols-1 w-full mt-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className="flex w-full justify-between  bg-white-100 px-2  py-3
                text-left text-[12px] font-bold font-sm text-gray-400 hover:bg-bgsearchbar border-t border-b  border-black-100"
                >
                  <span>FAVOURITES</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-gray-500`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="px-4 pt-4 pb-2 text-xs text-gray-500">
                  You don't have any Favorites yet. Learn how to create one or
                  hide this.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className="flex w-full justify-between  bg-white-100 px-2  py-3
                text-left text-[12px] font-xs font-bold text-gray-400 hover:bg-bgsearchbar  border-b  border-black-100"
                >
                  <span>SPACES</span>
                  <span className="flex flex-row">
                    <SearchIcon
                      className={`${
                        open ? "block" : "hidden"
                      } h-5 w-4  text-gray-500`}
                    />
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-gray-500 ml-3`}
                    />
                  </span>
                </Disclosure.Button>

                <Disclosure.Panel className="pt-4 pb-2 text-gray-500 hover:cursor-pointer">
                  <div className="flex flex-row justify-center w-[90%] mx-auto bg-bgsearchbar py-2 rounded-sm hover:bg-gray-300 text-xs">
                    <span>
                      <PlusIcon className="h-4 w-3 text-xs" />
                    </span>

                    {/* Add space */}
                    <span className="text-[12px] ml-1 ">NEW SPACE</span>
                  </div>
                  <div className="flex flex-row justify-start bg-white py-2  hover:bg-gray-300 text-xs mt-2">
                    
                      <ViewGridIcon className="h-4 w-4 text-xs ml-2" />
                      
                    <span className="text-[12px] ml-4 ">Everything</span>
                  </div>

                  <div className="space flex flex-row justify-between p-2">
                    <div className="flex flex-row mt-2">
                      <ChevronRightIcon className="h-4 w-4 mt-1 hidden spaceicon" />
                      <div className="bg-btncolor h-6 w-6 font-bold text-xs pt-1 text-center text-white ml-2">
                        S
                      </div>
                      <span className="ml-2 text-xs mt-1">Space</span>
                    </div>
                    <div className="right-col hidden flex flex-row mt-2">
                    <Menu>
                      <Menu.Button>
                        <DotsHorizontalIcon className="h-4 w-4" />
                      </Menu.Button>
                      <Menu.Items>
                            <SpaceDropdown/>
                      </Menu.Items>
                    </Menu>
                      <PlusIcon className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className="flex w-full justify-between  bg-white-100 px-2  py-3
                text-left text-[12px] font-bold font-sm text-gray-400 hover:bg-bgsearchbar  border-b  border-black-100"
                >
                  <span>DASHBOARDS</span>
                  <span className="flex flex-row">
                    <SearchIcon
                      className={`${
                        open ? "block" : "hidden"
                      } h-5 w-4 text-gray-500`}
                    />
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-gray-500 ml-3`}
                    />
                  </span>
                </Disclosure.Button>

                <Disclosure.Panel className=" pb-2 text-sm text-gray-500 hover:bg-bgsearchbar">
                  <div className="space flex flex-row justify-between p-2">
                    <div className="flex flex-row mt-2">
                      <ChevronRightIcon className="h-4 w-4 mt-1" />

                      <span className="ml-2 text-xs mt-1">My Dashboards</span>
                    </div>

                    <PlusIcon className="h-4 w-4 ml-2 mt-2" />
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className="flex w-full justify-between  bg-white-100 px-2  py-3 
                text-left text-[12px] font-bold font-sm text-gray-400 hover:bg-bgsearchbar border-b  border-black-100"
                >
                  <span>DOCS</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-gray-500`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className=" pt-4 pb-2 text-sm text-gray-500 cursor-pointer">
                  <div className="flex flex-row justify-center w-[95%] mx-auto bg-bgsearchbar py-2 rounded-sm hover:bg-gray-300 text-xs">
                    <span>
                      <PlusIcon className="h-4 w-3 text-xs" />
                    </span>
                    <span className="text-[12px] ml-1 ">NEW DOCS</span>
                  </div>
                  <p className="w-ull text-xs hover:bg-bgsearchbar mt-2  p-2">
                    All
                  </p>
                  <p className="w-ull text-xs hover:bg-bgsearchbar mt-2 p-2">
                    Assigned to me
                  </p>
                  <p className="w-ull text-xs hover:bg-bgsearchbar mt-2 p-2">
                    shared
                  </p>
                  <p className="w-ull text-xs hover:bg-bgsearchbar mt-2 p-2">
                    private
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
     
      
    </div>
  ) : (
    <h1>collapse</h1>
  );
}

export default Sidebar;
