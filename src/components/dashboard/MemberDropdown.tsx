import React, {useState} from "react";
import {Menu} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/solid";
import MemberType from "./MemberType";

type Props = {};

const MemberDropdown = (props: Props) => {
  let [isMember, setIsMember] = useState<boolean>(true)
  let [isAdmin, setIsAdmin] = useState<boolean>(false)

  return (
    <div>
      <Menu>
        <Menu.Button>
          <div className="bg-bgsearchbar border border-gray-500 py-3 ml-0 px-3 text-sm flex flex-row">
            <p>Member</p>
            <ChevronDownIcon className="h-5 w-5 "/>
          </div>
        </Menu.Button>
        <Menu.Items>
          <div
            className="absolute bg-white opacity-100 p-2 rounded right-[40px] text-txtcolor
                     z-10000 h-auto w-[200px]  border border-gray-200 shadow shadow-md overflow-visible  text-sm"
          >
            <Menu.Item>
              <>
                <div onClick={() => {
                  setIsMember(true)
                  setIsAdmin(false)
                }
                }>
                  <MemberType

                    userType="Member"
                    description="Access to public Spaces, Docs and Dashboards."
                    isMember={isMember}
                    isAdmin={isAdmin}

                  />
                </div>
                <hr className="w-full text-gray-500 mt-2 mb-2"/>
                <div onClick={() => {
                  setIsMember(false)
                  setIsAdmin(true)
                }}>
                  <MemberType
                    userType="Admin"
                    description="Manage Spaces, People, Billing, and other Workspace settings"
                    isAdmin={isAdmin}
                    isMember={isMember}
                  />
                </div>
              </>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default MemberDropdown;
