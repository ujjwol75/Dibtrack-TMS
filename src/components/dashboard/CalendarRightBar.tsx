import React, { Fragment, useState } from "react";
import { MenuAlt2Icon } from "@heroicons/react/solid";
import Tasks from "./Tasks";
import { Tab } from "@headlessui/react";

type Props = {};

const CalendarRightBar = (props: Props) => {
  const [openTask, setOpenTask] = useState(false);

  function handleBar() {
    setOpenTask(true);
  }
  return !openTask ? (

      <div className="flex flex-col w-6 text-center text-sm text-gray-500 ">
        <MenuAlt2Icon
          className="w-5 cursor-pointer -rotate-90 mt-8 "
          onClick={handleBar}
        />
        <div className="-rotate-90 mt-20">Unscheduled</div>
        <div className="-rotate-90 mb-3">0</div>
        <hr />
        <div className="-rotate-90 mt-8">Overdue</div>
        <div className="-rotate-90 mt-1">2</div>
      </div>
      
  ) : (
    <Tasks />
  );
};

export default CalendarRightBar;
