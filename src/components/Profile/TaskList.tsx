import {
  FlagIcon,
  ClockIcon,
  UsersIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { CheckIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import UserContainer from "../../Reusable/TaskComponents/AssignedUser/UserContainer";
import PriorityFlag from "../../Reusable/TaskComponents/PriorityFlag";
import useGetHook from "../../customHooks/useGetHook";
import APIS from "../../constants/EndPoint";
type Props = {};

const TaskList = (props: Props) => {
  const { data: usersData, isLoading: usersDataLoading } = useGetHook({
    queryKey: "userData",
    url: APIS.USER,
  });

  const [initialValuesState, setInitialValuesState] = useState({
    user: null,
    board: null,
    priority: null,
  });

  const [priorityState, setPriorityState] = useState<any>();
  const [displayIcons, setDisplayIcons] = useState<boolean>(true);
  const [userListState, setUserListState] = useState<any>([]);
  const [userState, setUserState] = useState<any>([]);

  // GENERATE USERS LIST
  useEffect(() => {
    let emptyUserList: any = [];
    setUserListState(null);
    if (usersData) {
      usersData?.map((elem: any) => {
        const dropDownObject = {
          id: elem.id,
          title: elem.email,
          icon: (
            <div className="w-8 h-8 bg-orange-400 flex justify-center items-center rounded-full ">
              ss
            </div>
          ),
        };
        emptyUserList.push(dropDownObject);
        setUserListState(emptyUserList);
      });
    }
  }, [usersData]);
  return (
    <div
      className=" mt-[40px] py-1 ml-4 mr-5 shadow-lg rounded-md h-auto bg-white 
     outline-black border  border-gray-300 hover:bg-bgsearchbar"
    >
      <div
        className="flex flex-row px-2 justify-between"
        onMouseOver={() => setDisplayIcons(true)}
        onMouseLeave={() => setDisplayIcons(false)}
      >
        <div
          className="flex flex-row space-x-2 items-center"
          title="set to closed items-center"
        >
          <CheckIcon className="h-5 w-5 text-gray-400" />

          <div className="flex flex-col space-y-1 text-xs">
            <div className="flex flex-row space-x-2 text-[11px]">
              <span className="hover:text-btncolor">google is big</span>
              <span>/</span>
              <span className="hover:text-btncolor">list</span>
            </div>

            <span>task name</span>
          </div>
          <div></div>
        </div>

        <div className="flex flex-row space-x-3 items-center text-txtcolor mr-5">
          <PriorityFlag
            initialValue={initialValuesState.priority}
            priorityState={priorityState}
            setPriorityState={setPriorityState}
            handleAPICall={() => {}}
            size="sm"
          />
          <span title=" Change Date">
            <ClockIcon className="h-5 w-5" />
          </span>
          <UserContainer
            userState={userState}
            setUserState={setUserState}
            handleAssignUser={undefined}
            userListState={userListState || []}
            size="xs"
          />
          <span title="Delete">
            {" "}
            <TrashIcon className="h-5 w-5 hover:text-red-500" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
