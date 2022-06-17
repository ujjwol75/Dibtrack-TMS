import { ChevronDownIcon, DotsHorizontalIcon } from "@heroicons/react/solid";
import React , {useState} from "react";
import CircleUserIcon from "../../Reusable/CircleUserIcon";
import FlyoutMenu from "./FlyoutMenu";
import UserSettings from "./UserSettings";
import ViewProfile from "../Profile/ViewProfile";
import APIS from "../../constants/EndPoint";
import useGetHook from "../../customHooks/useGetHook";

type Props = {
  
};

const use = [
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
  
  const[copystatus , setCopyStatus] = useState<string>('copy')
  
  const { data: usersData } = useGetHook({
    queryKey: "user",
    url: `${APIS.USER}`
  })

  console.log('userData:  ' , usersData)
 
 

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
        {usersData?.map((user:any) => (
          <tr key = {user.id}>
                  <ViewProfile user = {user} />
            {/* <td className="p-3">
              <span className="flex flex-row">
              <FlyoutMenu />
              {/* <CircleUserIcon size="sm" /> */}

             {/* <span className="ml-2">{user.name}</span> 
        </span> */}
              
            {/* </td> */} 
            <td className="p-3 flex flex-row useremail">
              
                <button className="border border-btncolor py-[1px] px-[6px] text-[8px] text-white mr-2 text-btncolor rounded-md">
                  OWNER
                </button>
                <p>{user.email}</p>
                <button className="bg-btncolor py-[2px] px-[4px] rounded  text-white ml-2 invisible copy" 
                 onClick={() => {
                  navigator.clipboard.writeText(user?.email)
                  setCopyStatus('copied')
                 } }
                >
                  {copystatus}
                </button>
              
            </td>

            <td className="p-2 ">{user?.role}</td>
            <td className="p-2 ">{user?.last_login.substring(0 , 10)}</td>
            <td className="p-2 ">
                <UserSettings  id = {user?.id}/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MemberPanel;
