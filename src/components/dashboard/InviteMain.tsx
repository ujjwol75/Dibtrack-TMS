import {SearchIcon} from "@heroicons/react/solid";
import React from "react";
import InviteTab from "./InviteTab";
import MemberDropdown from "./MemberDropdown";

type Props = {};

const InviteMain = (props: Props) => {
  return (
    <div className="p-5 text-gray-400 w-full">
      <div className="flex flex-row justify-between w-full">
        <p className="text-2xl font-bold ">Manage People</p>
        <p className="text-blue-300">learn More</p>
      </div>
      <div className="flex flex-row justify-between mt-5">
        <div className="w-[50%] relative">
          <input
            type="text"
            className="w-full bg-white border border-gray-500  focus:outline-none p-2 pl-10"
            placeholder="search by name or email"
          ></input>
          <SearchIcon className="h-5 w-5 text-gray-500 absolute left-2  bottom-3"/>
        </div>
        <div className=" relative flex flex-row">
          <input
            type="text"
            className="w-ful bg-white border  border-gray-500 text-low focus:outline-none p-2 pl-10"
            placeholder="Invite by email"
          ></input>
          <MemberDropdown/>
          <div className="bg-btncolor text-white border border-gray-500 py-3 ml-0 px-4 text-sm flex flex-row">
            <p>invite</p>
          </div>
          <SearchIcon className="h-5 w-5 text-gray-500 absolute left-2  bottom-3 mt-1 ml-1"/>
        </div>
      </div>
      <InviteTab/>
    </div>
  );
};

export default InviteMain;
