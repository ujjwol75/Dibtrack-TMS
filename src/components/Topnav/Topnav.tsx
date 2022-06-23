import {useState } from "react";

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
  ChevronRightIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import useGetHook from "../../customHooks/useGetHook";
import { Link, useParams } from "react-router-dom";
import APIS from "../../constants/EndPoint";
import React from "react";

type Props = {
  collapse?: any;
  setCollapse?: any;
};

const Navbar = ({ collapse, setCollapse }: Props) => {
  let [isOpen, setIsOpen] = useState(false);
  const [upShow, setUpShow] = useState(true);
  const [asignees, setAsignees] = useState(false);
  const [activeItem , setActiveItem] = useState(2)
  console.log(activeItem)
  const params = useParams();

  const listItemRef = React.createRef<HTMLDivElement>()
 

  const { data: boardsData, isLoading: boardDataLoading } = useGetHook({
    queryKey: `boardData${params?.spaceId}`,
    url: `${APIS.KANBAN_TASK}?workspace=${params?.spaceId}`,
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  //scroll menu items on click
 

  return (
    <>
      <div className=" flex flex-row justify-between border-b border-blue-300 w-full py-1 ">
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
         
          <div className="flex flex-row w-[650px] overflow-x-auto  px-2" ref = {listItemRef}>
            {boardsData?.task_views?.map((value: any, index: number) => {
              return (
                <ul className="text-gray-400"  key={index} >
                  <Link
                    to={`/${params?.spaceId}/${value.slug}/${value.id}`}
                  >
                    <li 
                    onClick={() => setActiveItem(value.id)}
                    className={ activeItem === value.id ? " mr-5 flex flex-row text-btncolor pr-2 border-b border-r border-btncolor ":"mr-5 flex flex-row pr-2 border-r border-gray-300 text-gray-500" }>
                      <HomeIcon className="h-4 w-4" />
                      <span className="text-sm ml-1  capitalize"> 
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
        
        <ChevronRightIcon 
         
        className="h-10 w-10 text-gray-500 mr-24 hover:text-btncolor cursor-pointer"/> 
        {/* menu list end */}

        {/* right topnav */}

        {/* right topnav end */}
        <div className="inline-flex">
          <div className=" inline-flex border my-auto p-[1px] items-center rounded py-[3px]">
           <DesktopComputerIcon className="h-4 w-5 text-gray-400 " />
            <p className="text-sm text-txtcolor">Automate</p>
          
            <Popover className="relative">
              {upShow ? (
                <Popover.Button className="outline-none border-none flex items-center">
                  
                    <ChevronDownIcon
                      className="h-6 w-5 text-gray-400  ml-1 "
                      onClick={() => setUpShow(false)}
                    />
                  
                </Popover.Button>
              ) : (
                <Popover.Button className="outline-none">
                  
                    <ChevronUpIcon
                      className="h-5 w-5 text-gray-400 ml-1"
                      onClick={() => setUpShow(true)}
                    />
                  
                </Popover.Button>
              )}
              {/* <Popover.Button><span><ChevronDownIcon className='h-5 w-5'/></span></Popover.Button> */}
            
              <Popover.Panel className="absolute shadow-2xl automate z-10 border p-4 w-40 bg-white text-sm ">
                <div className="flex flex-col ">
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
            <div className="flex flex-row items-center p-1 px-2 border border-gray-200 rounded">
              <ShareIcon className="h-4 w-5 text-gray-400 mr-2" />
              <span className="text-sm text-txtcolor">Share</span>
            </div>

            <Models isOpen={isOpen} closeModal={closeModal} />
          </div>
        </div>
      </div>
      {" "}
      {/*end of main div */}
      <Subtopnav asignees={asignees} setAsignees={setAsignees} />
    </>
  );
};

export default Navbar;
