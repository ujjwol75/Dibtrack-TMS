import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

type Props = {};

const Dependecies = (props: Props) => {
  return (

    

    <div className="w-[40rem] bg-white drop-shadow-lg rounded-lg p-6">
        <span className="flex flex-start">Dependcies</span>
      <div className="flex flex-col border bg-yellow-100 p-3">
        <div className="flex flex-row">
          <CheckCircleIcon className="w-4" />
          <span>WAITING ON</span>
        </div>
        <p className="-ml-[13rem]">Tasks that must be completed before this task</p>
        <div className="flex flex-row">
          <CheckCircleIcon className="w-4" />
          <span>Add waiting on task</span>
        </div>
      </div>

      <div className="flex flex-col border bg-yellow-100">
        <div className="flex flex-row">
          <CheckCircleIcon className="w-4" />
          <span>BLOCKING</span>
        </div>
        <div className="-ml-[13rem]">Tasks that can't start until this task is completed</div>
        <div className="flex flex-row">
          <CheckCircleIcon className="w-4" />
          <span>Add task that is blocked</span>
        </div>
      </div>

      <div className="flex flex-col border bg-yellow-100">
        <div className="flex flex-row">
          <CheckCircleIcon className="w-4" />
          <span>TASKS</span>
        </div>
        <div className="-ml-[3rem]">Tasks that relate to each other but aren't actually dependent on the other</div>
        <div className="flex flex-row">
          <CheckCircleIcon className="w-4" />
          <span>Add linked task</span>
        </div>
      </div>
    </div>
  );
};

export default Dependecies;
