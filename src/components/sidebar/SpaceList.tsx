import {Menu} from "@headlessui/react";
import {DotsHorizontalIcon} from "@heroicons/react/outline";
import {ChevronRightIcon, PlusIcon} from "@heroicons/react/solid";

import SpaceDropdown from "./SpaceDropdown";
import SpacePlusTab from "./SpacePlusTab";
import {Disclosure} from "@headlessui/react";

import {useNavigate} from "react-router-dom";

type Props = {
  workSpaceData?: any;
  isOpen:boolean 
  closeModal:any 
  openModal:any
  handleCreateNewWorkSpace:any
  setParent?:any
};

const SpaceList = (props: Props) => {
  const {workSpaceData , isOpen , closeModal , openModal , handleCreateNewWorkSpace, setParent} = props;
  const navigate = useNavigate();

  const handleSpaceRoute = (item: any) => {
    if (item?.children?.length === 0) {
      navigate(`/${item.id}/board/2`);
    }
  };
  
  return (
    <div className="flex flex-col">
      {workSpaceData?.map((item: any) => (
        <Disclosure key={item.id}>
          <>
            <div
              className="flex flex-row  hover:bg-bgsearchbar p-1 w-full justify-between"
              onClick={() => handleSpaceRoute(item)}
            >
              <div className="flex flex-row mt-2">
                <Disclosure.Button>
                  <ChevronRightIcon className="h-4 w-4 mt-1 spaceicon"/>
                </Disclosure.Button>
                <div
                  className={`bg-btncolor h-6 w-6 font-bold text-xs pt-1 text-center text-white ml-2`}
                >
                  {item?.get_title}
                </div>
                <span className="ml-2 text-xs mt-1">{item?.name}</span>
              </div>

              <div className=" flex flex-row mt-2">
                <Menu>
                  <Menu.Button>
                    <DotsHorizontalIcon className="h-4 w-4"/>
                  </Menu.Button>
                  <Menu.Items>
                    <SpaceDropdown setParent={setParent} parentId={item?.id} isOpen = {isOpen} openModal = {openModal} closeModal = {closeModal} handleCreateNewWorkSpace = {handleCreateNewWorkSpace}/>
                  </Menu.Items>
                </Menu>
                <Menu>
                  <Menu.Button>
                    <PlusIcon className="h-4 w-4 ml-2"/>
                  </Menu.Button>
                  <Menu.Items>
                    <SpacePlusTab/>
                  </Menu.Items>
                </Menu>
              </div>
            </div>

            {item?.children?.length ? (
              <Disclosure.Panel className="ml-4 pl-4">
                  <span>
                    <SpaceList workSpaceData={item?.children || []} 
                      isOpen = {isOpen}
                      openModal = {openModal}
                      closeModal = {closeModal}
                      handleCreateNewWorkSpace = {handleCreateNewWorkSpace}
                      setParent={setParent}
                    />
                  </span>
              </Disclosure.Panel>
            ) : null}
          </>
        </Disclosure>
      ))}
    </div>
  );
};

export default SpaceList;
