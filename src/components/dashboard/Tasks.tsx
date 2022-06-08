import React, { useState, Fragment } from "react";
import {
  SearchIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  TicketIcon,
  ChevronRightIcon,
  PlusSmIcon,
  ChevronDoubleUpIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import CalendarRightBar from "./CalendarRightBar";
import { Tab, Menu, Transition, Disclosure } from "@headlessui/react";

type Props = {};

const Tasks = (props: Props) => {
  const [hide, setHide] = useState(false);

  function handleHide() {
    setHide(true);
  }
  return !hide ? (
    <>
      <div className="flex flex-col text-sm">
        <div className="w-[16rem] m-2">
          <div className="flex flex-row w-[16rem] text-center justify-between">
            <div>
              <h1 className="text-lg">Tasks</h1>
            </div>
            <div className="flex flex-row">
              <SearchIcon className="w-4 hover:bg-gray-300 mr-3 text-gray-500 hover:text-red-600 cursor-pointer" />
              <p
                className="hover:bg-gray-200 rounded-sm px-2 text-gray-500 hover:text-red-600 cursor-pointer"
                onClick={handleHide}
              >
                Hide
              </p>
            </div>
          </div>
          <Tab.Group>
            <Tab.List>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-red-500 border-box border-b-[2px] h-12 border-red-500"
                        : "text-black"
                    }
                    style={{ marginRight: "20px", marginLeft: "-6rem" }}
                  >
                    Unscheduled
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-red-500 border-box border-b-[2px] h-12 border-red-500"
                        : "text-black"
                    }
                  >
                    Overdue
                  </button>
                )}
              </Tab>
              <hr />
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="ml-4 mt-4 relative flex flex-col">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row">
                    Sort by
                    <span className="cursor-pointer">
                      <div className="pl-1">
                        <Menu>
                          <Menu.Button className="text-red-500">
                            Status
                          </Menu.Button>
                          <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Menu.Items className="flex flex-col bg-white w-28  drop-shadow-md absolute top-2 -right-1">
                              <Menu.Item>
                                <a
                                  className="bg-gray-100 pb-2 pt-2"
                                  href="/account-settings"
                                >
                                  Status
                                </a>
                              </Menu.Item>
                              <Menu.Item>
                                <a
                                  className="bg-gray-100 pb-2"
                                  href="/account-settings"
                                >
                                  Priority
                                </a>
                              </Menu.Item>
                              <Menu.Item>
                                <a
                                  className="bg-gray-100 pb-2"
                                  href="/account-settings"
                                >
                                  Assignees
                                </a>
                              </Menu.Item>
                              <Menu.Item>
                                <a
                                  className="bg-gray-100 pb-2"
                                  href="/account-settings"
                                >
                                  Name
                                </a>
                              </Menu.Item>
                              <Menu.Item>
                                <a
                                  className="bg-gray-100 pb-2"
                                  href="/account-settings"
                                >
                                  List name
                                </a>
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </span>
                    <ChevronUpIcon className="w-4 ml-0.5 cursor-pointer text-red-500" />
                  </div>
                  <div>
                    <h1>0 tasks</h1>
                  </div>
                </div>

                <div className="flex flex-row justify-between mt-4">
                  <div className="flex flex-row text-sm text-gray-500">
                    <TicketIcon className="w-5" />
                    <p>sdfsdfs</p>
                  </div>
                  <p className="text-red-500">2 days ago</p>
                </div>

                <div className="flex flex-row justify-between mt-4">
                  <div className="flex flex-row text-sm text-gray-500">
                    <TicketIcon className="w-5" />
                    <p>ssewewe</p>
                  </div>
                  <p className="text-red-500">1 days ago</p>
                </div>
              </Tab.Panel>

              <Tab.Panel className="ml-4 mt-4 relative">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row">
                    Sort by
                    <span className="cursor-pointer">
                      <div className="pl-1">
                        <Menu>
                          <Menu.Button className="text-red-500">
                            Due Date
                          </Menu.Button>
                          <Menu.Items className="flex flex-col bg-white w-28 drop-shadow-md absolute top-7 left-3">
                            <Menu.Item>
                              <a
                                className="bg-gray-100 pb-2 pt-2"
                                href="/account-settings"
                              >
                                Due Date
                              </a>
                            </Menu.Item>
                            <Menu.Item>
                              <a
                                className="bg-gray-100 pb-2"
                                href="/account-settings"
                              >
                                Status
                              </a>
                            </Menu.Item>
                            <Menu.Item>
                              <a
                                className="bg-gray-100 pb-2"
                                href="/account-settings"
                              >
                                Priority
                              </a>
                            </Menu.Item>
                            <Menu.Item>
                              <a
                                className="bg-gray-100 pb-2"
                                href="/account-settings"
                              >
                                Assignees
                              </a>
                            </Menu.Item>
                            <Menu.Item>
                              <a
                                className="bg-gray-100 pb-2"
                                href="/account-settings"
                              >
                                Name
                              </a>
                            </Menu.Item>
                            <Menu.Item>
                              <a
                                className="bg-gray-100 pb-2"
                                href="/account-settings"
                              >
                                List name
                              </a>
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </div>
                    </span>
                    <ChevronUpIcon className="w-4 ml-0.5 cursor-pointer text-red-500" />
                  </div>
                  <div>
                    <p>0 tasks</p>
                  </div>
                </div>

                <div className="flex flex-row justify-between mt-4">
                  <div className="flex flex-row text-sm text-gray-500">
                    <TicketIcon className="w-5" />
                    <p>sdfsdfs</p>
                  </div>
                  <p className="text-red-500">2 days ago</p>
                </div>

                <div className="flex flex-row justify-between mt-4">
                  <div className="flex flex-row text-sm text-gray-500">
                    <TicketIcon className="w-5" />
                    <p>ssewewe</p>
                  </div>
                  <p className="text-red-500">1 days ago</p>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          <hr className="mt-40" />

          <div>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex flex-row justify-between hover:bg-gray-200 cursor-pointer w-full h-10">
                    Is team pricing available?
                    <ChevronRightIcon
                      className={`${
                        open
                          ? "transform rotate-90 w-8 text-gray-400"
                          : "w-18 text-gray-400"
                      }`}
                    />
                  </Disclosure.Button>

                  <Disclosure.Panel className="flex flex-row">
                    <PlusSmIcon className="w-6 mt-3 bg-gray-300 mr-2" />
                    <p className="mt-3">Add Calendar</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <div className="flex flex-row justify-end text-sm">
            <button className="flex flex-row bg-white text-center text-red-500 font-bold py-2 px-4 rounded-lg shadow-lg mt-3 cursor ml-0">
              <p>Save</p>
              <ChevronDoubleUpIcon className="w-3 text-black ml-1" />
            </button>
          </div>

          <div className="flex flex-row justify-end mt-2 text-white text-sm">
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg cursor">
              <div className="flex flex-row">
                <PlusSmIcon className="w-4" />
                <p>Task</p>
              </div>
            </button>
            <div className="relative">
            <Menu>
              <Menu.Button className="flex flex-row bg-white text-center text-red-500 font-bold py-2 px-4 rounded-lg shadow-lg cursor ml-2">
                <ViewGridIcon className="w-4" />
              </Menu.Button>
              <Menu.Items className="bg-white w-20 absolute -top-[90px] right-[26px] drop-shadow-lg rounded-lg ">
                <Menu.Item>
                  <h1 className="text-black pt-2">Record Clip</h1>
                </Menu.Item>
                <Menu.Item>
                  <h1 className="text-black pt-2">Track Time</h1>
                </Menu.Item>
                <Menu.Item>
                  <h1 className="text-black pt-2">Reminder</h1>
                </Menu.Item>
                <Menu.Item>
                  <h1 className="text-black pt-2">Notepad</h1>
                </Menu.Item>
                <Menu.Item>
                  <h1 className="text-black pt-2">New Doc</h1>
                </Menu.Item>
                <Menu.Item>
                  <h1 className="text-black pt-2">Calendar</h1>
                </Menu.Item>
                <Menu.Item>
                  <h1 className="text-black pt-2">Task tray</h1>
                </Menu.Item>
              </Menu.Items>
            </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <CalendarRightBar />
  );
};

export default Tasks;
