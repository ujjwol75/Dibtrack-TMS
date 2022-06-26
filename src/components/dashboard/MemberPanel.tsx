import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";
import UserSettings from "./UserSettings";
import ViewProfile from "../Profile/ViewProfile";
import APIS from "../../constants/EndPoint";
import useGetHook from "../../customHooks/useGetHook";
import LoaderAnimation from "../../Reusable/Loader/LoaderAnimation";
import MemberTableBody from "./MemberTableBody";

type Props = {};

const MemberPanel = (props: Props) => {
  

  const { data: usersData  , isLoading:usersDataLoading} = useGetHook({
    queryKey: "user",
    url: `${APIS.USER}`,
  });
  
  return usersDataLoading ? (
         <div className="flex justify-center"><LoaderAnimation /></div>
  ) :(
    <table className="text-xs border border-slate-400 w-full table table-auto">
      <thead className="border-b border-slate-400 rounded">
      <tr>
        <th className="ml-1 py-2 flex flex-row text-left">
          <span className="rounded-full bg-btncolor text-xs flex justify-center items-center text-white mr-1  h-5 w-5">
            <p className="mb-[2px]">x</p>
          </span>
          <p>NAME</p>
          <ChevronDownIcon className="h-5 w-5 text-btncolor"/>
        </th>
        <th className="p-2 text-left">EMAIL</th>
        <th className="p-2 text-left">ROLE</th>
        <th className="p-2 text-left">LAST ACRIVE</th>
        <th className="p-2 text-left ">SETTINGS</th>
      </tr>
      </thead>
      <tbody className="text-txtcolor ml-1 w-full">
        {usersData?.map((user: any) => (
          <MemberTableBody user = {user} />
          
        ))}
      </tbody>
    </table>
  );
};

export default MemberPanel;
