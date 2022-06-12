import React, { useState } from "react";
import { PlusCircleIcon, StopIcon, TrashIcon } from "@heroicons/react/solid";


type Props = {};
let array: any;
array = [
        
]
console.log("first")

const AddTask = (props: Props) => {
  const [userInput, setUserInput] = useState("");
  

  const handleSubtask = () => {
    console.log("hello subtask");
    array.push(userInput)

  };

  return (
    <>
      
      console.log("ramu")
      <form action="">
        <div className="flex flex-row mx-2 ml-4">
        <StopIcon className="w-4" />
        <input
          type="text"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          className="w-[30rem] bg-white outline-none border-gray-200 border mx-2"
        />
        <StopIcon className="w-6 ml-4 mr-2" />
        <TrashIcon className="w-6" />
      </div>
</form>
    </>
  );
};

export default AddTask;
