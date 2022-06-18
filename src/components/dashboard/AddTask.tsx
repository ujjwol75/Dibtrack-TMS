import React, {useState} from "react";
import {PlusSmIcon, StopIcon, TrashIcon} from "@heroicons/react/solid";

type Props = {};

const AddTask = (props: Props) => {
  const [userInput, setUserInput] = useState("");
  const [plus, setPlus] = useState(false);

  const handleForm = (e: any) => {
    e.preventDefault()
  }
  return (
    <>
      <form onSubmit={handleForm}>
        <span className="flex flex-start ml-4 my-2">tasks</span>

        <div className="flex flex-row mx-2 ml-4">
          <StopIcon className="w-4"/>
          <input
            type="text"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            className="w-[30rem] bg-white outline-none border-gray-200 border mx-2"
          />
          <StopIcon className="w-6 ml-4 mr-2"/>
          <TrashIcon className="w-6"/>
        </div>
      </form>
      <PlusSmIcon className="w-8 cursor-pointer text-red-500 hover:bg-red-200 ml-4" onClick={() => {
        setPlus(true)
      }}/>

      {plus ? (
          <div className="flex flex-row mx-2 ml-4 mt-2">
            <StopIcon className="w-4"/>
            <input
              type="text"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
              className="w-[30rem] bg-white outline-none border-gray-200 border mx-2"
            />
            <StopIcon className="w-6 ml-4 mr-2"/>
            <TrashIcon className="w-6"/>
          </div>
        ) :
        null
      }
    </>
  );
};

export default AddTask;
