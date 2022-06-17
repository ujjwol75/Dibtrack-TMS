import { useState } from "react";

import Models from "./Models/Models";

import Subtopnav from "./Subtopnav/Subtopnav";
import { Popover } from "@headlessui/react";

// import Collapseasignees from "./Subtopnav/Collapseasignees"

import {
  ShareIcon,
  DesktopComputerIcon,
  ChevronDownIcon,
  PencilIcon,
  ChevronUpIcon,
  SparklesIcon,
  MenuAlt1Icon,
  HomeIcon,
} from "@heroicons/react/solid";

import useGetHook from "../../customHooks/useGetHook";
import { Link, useParams } from "react-router-dom";
import APIS from "../../constants/EndPoint";

type Props = {
  collapse?: any;
  setCollapse?: any;
};

const Navbar = ({ collapse, setCollapse }: Props) => {
  let [isOpen, setIsOpen] = useState(false);

  const [upShow, setUpShow] = useState(true);
  const [asignees, setAsignees] = useState(false);

  const params = useParams();

  const { data: boardsData, isLoading: boardDataLoading } = useGetHook({
    queryKey: `boardData${params?.spaceId}`,
    url: `${APIS.KANBAN_TASK}?workspace=${params?.spaceId}`,
  });
  console.log("boarddata", boardsData);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className=" flex flex-row justify-between border-b border-blue-300 w-full py-4">
        <div className="flex flex-row items-center w-full">
          {collapse && (
            <MenuAlt1Icon
              className="h-6 w-6  mr-2"
              onClick={() => setCollapse(!collapse)}
            />
          )}

          {/* space name */}
          {params.spaceId ? (
            <div className="flex flex-row">
              <span
                className={`bg-btncolor h-6 w-6 font-bold text-xs pt-1 text-center text-white ml-2 mr-2 `}
              >
                {boardsData?.lanes[0]?.workspace.charAt(0)?.toUpperCase()}
              </span>
              <p className=" flex ml-2 text-xs  font-bold text-[16px] mr-2 mt-1  border-r border-gray-300 pr-2 capitalize">
                {boardsData?.lanes[0]?.workspace}
              </p>
            </div>
          ) : (
            <div className="flex flex-row ml-2 text-gray-500 hover:text-btncolor">
              <span
                className={`bg-btncolor h-6 w-6 font-bold text-xs pt-1 text-center text-white ml-2 mr-2 `}
              >
                U
              </span>
              <p className=" flex ml-2 text-xs  font-bold text-[16px] mr-2 mt-1  border-r border-gray-300 pr-2 capitalize">
                untitled . . .
              </p>
            </div>
          )}

          {/* space name end */}

          {/* menu list */}
          <div className="flex flex-row w-[650px] overflow-x-auto no-scrollbar  px-2">
            {boardsData?.task_views?.map((value: any, index: number) => {
              return (
                <ul className="text-gray-400">
                  <Link
                    key={index}
                    to={`/${params?.spaceId}/${value.slug}/${value.id}`}
                  >
                    <li className="mr-5 flex flex-row pr-2 border-r border-gray-300 hover:border-b-2 border-gray-300">
                      <HomeIcon className="h-4 w-4 text-gray-400" />
                      <span className="text-sm ml-1 text-txtcolor capitalize">
                        {" "}
                        {value.view_type_name}
                      </span>
                    </li>
                  </Link>
                </ul>
              );
            })}
          </div>
        </div>
        {/* menu list end */}

        {/* right topnav */}

        {/* right topnav end */}
        <div className="flex flex-row">
          <div className="flex flex-row px-5 p-1 border border-gray-200 items-center cursor-pointer rounded">
            <DesktopComputerIcon className="h-5 w-5 text-gray-400 mr-1" />
            <span className="text-sm  pr-2 text-txtcolor">Automate</span>

            <Popover className="relative">
              {upShow ? (
                <Popover.Button className="outline-none">
                  <span>
                    <ChevronDownIcon
                      className="h-5 w-5 text-gray-400 ml-1 mt-2"
                      onClick={() => setUpShow(false)}
                    />
                  </span>
                </Popover.Button>
              ) : (
                <Popover.Button className="outline-none">
                  <span className="border-none">
                    <ChevronUpIcon
                      className="h-5 w-5 text-gray-400 ml-1 mt-2"
                      onClick={() => setUpShow(true)}
                    />
                  </span>
                </Popover.Button>
              )}
              {/* <Popover.Button><span><ChevronDownIcon className='h-5 w-5'/></span></Popover.Button> */}

              <Popover.Panel className="absolute shadow-2xl automate z-10 border w-40 bg-white p-4 text-sm ">
                <div className="grid grid-cols-1">
                  <div className="text-left py-2">
                    <span>CUSTOMIZE SPACE</span>
                  </div>
                  <div className="text-left flex flex-row py-2">
                    <span>
                      <SparklesIcon className="h-5 w-5" />
                    </span>
                    <span>Templates</span>
                  </div>
                  <div className="text-left flex flex-row py-2">
                    <span>
                      <PencilIcon className="h-5 w-5" />
                    </span>
                    <span>Statuses</span>
                  </div>
                </div>
                <img src="/solutions.jpg" alt="" />
              </Popover.Panel>
            </Popover>
          </div>

          {/* share */}
          <div className="flex flex-row px-5  items-center  rounded-md ml-2">
            <div className="flex flex-row items-center p-2 border border-gray-200 rounded">
              <ShareIcon className="h-4 w-5 text-gray-400 mr-2" />
              <span className="text-sm text-txtcolor">Share</span>
            </div>

            <Models isOpen={isOpen} closeModal={closeModal} />
          </div>
        </div>
      </div>{" "}
      {/*end of main div */}
      <Subtopnav asignees={asignees} setAsignees={setAsignees} />
    </>
  );
};

export default Navbar;
