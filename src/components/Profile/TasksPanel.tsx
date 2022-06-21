import { Tab } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskLIst from "./TaskList";

type Props = {};
const TasksPanel = (props: Props) => {
  const [displayText, setDisplayText] = useState<boolean>(true);
  return (
    <Tab.Panel>
      <div className="mt-3 h-full flex flex-col text-txtcolor ">
        <div
          className="flex flex-row mt-1 justify-between px-2 py-2 hover:text-visible"
          onMouseOver={() => setDisplayText(true)}
          onMouseLeave={() => setDisplayText(false)}
        >
          <div className="flex flex-row space-x-4">
            <span className="text-sm text-txtcolor hover:text-btncolor py-1">
              Unscheduled
            </span>
            {displayText && (
              <span className="text-xs px-2 py-1 hover:bg-gray-300 rounded-sm flex items-center ">
                + Task
              </span>
            )}
          </div>
          {displayText && (
            <span className="flex flex-row space-x-1 text-xs py-1 px-2 hover:bg-gray-300 rounded-sm items-center">
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              <span>Date Created</span>
            </span>
          )}
        </div>
        <div className="mt-3 flex flex-row space-x-3">
          <hr className="w-full mt-2" />
          <p className="text-[10px] w-full inline-block flex items-center">
            Tasks assigned to punya dahal that have not been scheduled
          </p>
          <hr className="w-full mt-2 " />
        </div>

        <TaskList />
      </div>
    </Tab.Panel>
  );
};

export default TasksPanel;
