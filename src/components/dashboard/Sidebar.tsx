import logo from "../../images/logo5.png";
import { Menu } from "@headlessui/react";
import SettingsTab from "../sidebar/SettingsTab";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

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
  SearchIcon,
} from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";
import NewSpaceModal from "../sidebar/NewSpaceModal";
import User from "../sidebar/User";
import SpaceList from "../sidebar/SpaceList";
import APIS from "../../constants/EndPoint";
import useGetHook from "../../customHooks/useGetHook";
import LoaderAnimation from "../../Reusable/Loader/LoaderAnimation";
import usePostHook from "../../customHooks/usePostHook";
import { useState } from "react";
import Modal from "../../Reusable/Modal";
import ModalTabs from "../sidebar/ModalTabs";

type Props = {
  collapse?: any;
  setCollapse: any;
};

function Sidebar(props: Props) {
  const [parent, setParent] = useState<any>();

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
    setParent("");
  }

  const { collapse, setCollapse } = props;

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  const { data: workSpaceData, isLoading: workSpaceDataLoading } = useGetHook({
    queryKey: "workSpaceData",
    url: APIS.WORKSPACE,
  });

  //function for toastify
  const notify = () => toast("workspace successfully created!!!");

  //create new space api

  const {
    isPostLoading,
    mutate: createWorkSpaceMutate,
    isPostSuccess: createWorkSpaceSuccess,
    successMsg,
    addSuccessSnackBar,
    setAddSuccessSnackBar,
  } = usePostHook({ queryKey: `workSpaceData`, setOpenAddPopup: "" });

  //function for handling api call for new workspace

  const handleCreateNewWorkSpace = (name: any, parent: any, color: any) => {
    const url = APIS.CREATEWORKSPACE;
    const formData = {
      name: name,
      parent: parent,
      color: color
    };

    try {
      createWorkSpaceMutate({ url, formData });
    } catch (e) {
      console.log(e);
    }
    if (createWorkSpaceSuccess) {
      console.log('sucecesssfdk')
      notify()
      closeModal()
    }
  };

  return (
    <>
      <div className=" h-screen sm:w-[100vw] md:w-full">
        <div
          className={`sidebar border  h-full  border-black-100 overflow-auto no-scrollbar bg-white `}
        >
          <div className="flex flex-row justify-between p-4 items-center">
            <img src={logo} className="h-[80px] w-[100px]" alt="logo" />
            <div className="mt-2 flex flex-row">
              <Menu>
                <Menu.Button className="mr-5">
                  <CogIcon className=" settings h-5 w-5 text-gray-400" />
                </Menu.Button>
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
          <div className="search-bar  flex flex-row items-center  mt-3 p-2">
            <div className="search-input  relative w-full mr-[1%]">
              <input
                type="text"
                className=" bg-bgsearchbar focus:outline-none hover:text-btncolor
                border border-black-100 pl-12 text-sm text-gray-400 py-1 w-full"
                placeholder="Search"
              />
              <SearchIcon className="h-4 w-5 text-gray-400 absolute left-5 bottom-[20%] hover:text-blue-500" />
            </div>
            <div className="p-1 mt-[3px] flex justify-center items-center bg-bgsearchbar text-center text-gray-500  text-xs h-[30px] w-[40px]">
              <i className="fa-solid fa-bolt text-black-300 hover:text-blue-400  "></i>
            </div>
          </div>

          <div className="grid grid-cols-1 mt-4 text-xs text-gray-500">
            <div className="flex flex-col">
              <div className="flex flex-row mt-3  w-full hover:bg-bgsearchbar p-2">
                <div className="mr-3">
                  <HomeIcon className="h-4 w-5 " />
                </div>

                <Link to={"/"}>
                  <div>Home</div>
                </Link>
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
                <div>Show More</div>
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
                      className={`${open ? "rotate-180 transform" : ""
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

            <Disclosure defaultOpen={true}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className="flex w-full justify-between  bg-white-100 px-2  py-3
                text-left text-[12px] font-xs font-bold text-gray-400 hover:bg-bgsearchbar  border-b  border-black-100"
                  >
                    <span>SPACES</span>
                    <span className="flex flex-row">
                      <SearchIcon
                        className={`${open ? "block" : "hidden"
                          } h-5 w-4  text-gray-500`}
                      />
                      <ChevronUpIcon
                        className={`${open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-gray-500 ml-3`}
                      />
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-4 pb-2 text-gray-500 hover:cursor-pointer">
                    <div
                      className="flex flex-row justify-center w-[90%] mx-auto bg-bgsearchbar py-2 
                                   rounded-sm hover:bg-gray-300 text-xs"
                      onClick={openModal}
                    >
                      <span>
                        <PlusIcon className="h-4 w-3 text-xs" />
                      </span>
                      <span className="text-[12px] ml-1 ">NEW SPACE</span>
                    </div>

                    <div className="flex flex-row justify-start bg-white py-2  hover:bg-gray-300 text-xs mt-2">
                      <ViewGridIcon className="h-4 w-4 text-xs ml-2" />
                      <span className="text-[12px] ml-4 ">Everything</span>
                    </div>
                    {workSpaceDataLoading ? (
                      <LoaderAnimation />
                    ) : (
                      <SpaceList
                        workSpaceData={
                          Array.isArray(workSpaceData) ? workSpaceData : []
                        }
                        isOpen={isOpen}
                        openModal={setIsOpen}
                        closeModal={closeModal}
                        setParent={setParent}
                        handleCreateNewWorkSpace={handleCreateNewWorkSpace}
                      />
                    )}


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
                        className={`${open ? "block" : "hidden"
                          } h-5 w-4 text-gray-500`}
                      />
                      <ChevronUpIcon
                        className={`${open ? "rotate-180 transform" : ""
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
                      className={`${open ? "rotate-180 transform" : ""
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
                    <p className="w-full text-xs hover:bg-bgsearchbar mt-2  p-2">
                      All
                    </p>
                    <p className="w-full text-xs hover:bg-bgsearchbar mt-2 p-2">
                      Assigned to me
                    </p>
                    <p className="w-full text-xs hover:bg-bgsearchbar mt-2 p-2">
                      shared
                    </p>
                    <p className="w-full text-xs hover:bg-bgsearchbar mt-2 p-2">
                      private
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <div className="w-full sticky bottom-0">
              <User />
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={""}>
        <div>
          <h1 className="text-center text-4xl text-gray-300 ">
            CREATE NEW SPACE
          </h1>
          <ModalTabs
            handleCreateNewWorkSpace={handleCreateNewWorkSpace}
            parent={parent}
          />
        </div>
      </Modal>
    </>
  );
}

export default Sidebar;


{/* <div className="space flex flex-row justify-between p-2">
                    <div className="flex flex-row mt-2">
                      <ChevronRightIcon className="h-4 w-4 mt-1 hidden spaceicon" />
                      <div className="bg-btncolor h-6 w-6 font-bold text-xs pt-1 text-center text-white ml-2">
                        S
                      </div>
                      <span className="ml-2 text-xs mt-1">Space</span>
                    </div>
                    <div className="right-col  flex flex-row mt-2">
                    <Menu>
                      <Menu.Button>
                        <DotsHorizontalIcon className="h-4 w-4" />
                      </Menu.Button>
                      <Menu.Items>
                            <SpaceDropdown/>
                      </Menu.Items>
                    </Menu>
                    <div className="right-col  flex flex-row mt-2">
                      <Menu>
                        <Menu.Button>
                          <DotsHorizontalIcon className="h-4 w-4" />
                        </Menu.Button>
                        <Menu.Items>
                          <SpaceDropdown />
                        </Menu.Items>
                      </Menu>
                      <Menu>
                        <Menu.Button>
                          <PlusIcon className="h-4 w-4 ml-2" />
                        </Menu.Button>
                        <Menu.Items>
                          <SpacePlusTab />
                        </Menu.Items>
                      </Menu>

                    </div>
                  </div> */}