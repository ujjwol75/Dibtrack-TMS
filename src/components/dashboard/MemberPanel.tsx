import { ChevronDownIcon, DotsHorizontalIcon } from "@heroicons/react/solid";
import React from "react";
import CircleUserIcon from "../../Reusable/CircleUserIcon";
import UserSettings from "./UserSettings";

type Props = {};

const users = [
  {
    id: 1,
    name: "hari",
    email: "hari@gmail.com",
    role: "admin",
    lastactive: "yesterday",
  },
  {
    id: 2,
    name: "ram",
    email: "ram@gmail.com",
    role: "admin",
    lastactive: "yesterday",
  },
  {
    id: 3,
    name: "sam",
    email: "sam@gmail.com",
    role: "admin",
    lastactive: "yesterday",
  },
];

const MemberPanel = (props: Props) => {
  return (
    <table className="  text-xs border border-slate-400 w-full">
      <thead className="border-b border-slate-400 rounded">
        <tr>
          <th className="ml-1 py-2 flex flex-row text-left">
            <div className="rounded-full bg-btncolor text-xs flex justify-center items-center text-white mr-1  h-5 w-5">
              <p className="mb-[2px]">x</p>
            </div>
            <p>NAME</p>
            <ChevronDownIcon className="h-5 w-5 text-btncolor" />
          </th>
          <th className="p-2 text-left">EMAIL</th>
          <th className="p-2 text-left">ROLE</th>
          <th className="p-2 text-left">LAST ACRIVE</th>
          <th className="p-2 text-left ">SETTINGS</th>
        </tr>
      </thead>
      <tbody className="text-txtcolor ml-1">
        {users.map((user) => (
          <tr>
            <td className="p-3">
              <CircleUserIcon size="sm" />

             <span className="ml-2">{user.name}</span> 
            </td>
            <td className="p-3 flex flex-row useremail">
              
                <button className="border border-btncolor py-[1px] px-[6px] text-[8px] text-white mr-2 text-btncolor rounded-md">
                  OWNER
                </button>
                <p>{user.email}</p>
                <button className="bg-btncolor py-[2px] px-[4px] rounded  text-white ml-2 invisible copy">
                  copy
                </button>
              
            </td>

            <td className="p-2 ">{user.role}</td>
            <td className="p-2 ">{user.lastactive}</td>
            <td className="p-2 ">
                <UserSettings />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MemberPanel;
