import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";
import APIS from "../../constants/EndPoint";
import usePostHook from "../../customHooks/usePostHook";
import InviteTab from "./InviteTab";
import MemberDropdown from "./MemberDropdown";
import {toast } from "react-toastify";


type Props = {};

const InviteMain = (props: Props) => {
  const [email, setEmail] = useState<string>("");

  const {
    isPostLoading,
    mutate: inviteUserMutate,
    isPostSuccess: isInviteSuccess,
    successMsg,
    addSuccessSnackBar,
    setAddSuccessSnackBar,
  } = usePostHook({ queryKey: `inviteUser`, setOpenAddPopup: "" });

  //handle invite user API

  const handleInviteUser = () => {
    const url = APIS.INVITE;
    const formData = {
      email: email,
    };
    try {
      inviteUserMutate({ url, formData });
    } catch (e) {
      console.log(e);
    }
  };
  //notify
  const notify = () => {
    toast("user invited successfully");
  };

  if (isInviteSuccess) {
    notify();
  }

  return (
    <div className="p-5 text-gray-400 w-full flex flex-col h-full">
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
          <SearchIcon className="h-5 w-5 text-gray-500 absolute left-2  bottom-3" />
        </div>
        <div className=" relative flex flex-row">
          <input
            type="text"
            value={email}
            className="w-full bg-white border  border-gray-500 text-low focus:outline-none p-2 pl-10"
            placeholder="Invite by email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <MemberDropdown />

          <div className="bg-btncolor text-white border border-gray-500 py-3 ml-0 px-4 text-sm flex flex-row cursor-pointer">
            <p onClick={handleInviteUser}>invite</p>
            
          </div>
          <SearchIcon className="h-5 w-5 text-gray-500 absolute left-2  bottom-3 mt-1 ml-1" />
        </div>
      </div>
      <InviteTab />
    </div>
  );
};

export default InviteMain;
