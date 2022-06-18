import React from "react";
import logo from "../images/logo.png";

type Props = {
  text: string
  text1: string
}

function Navbar({text, text1}: Props) {
  return (
    <div className="p-2">
      <div className="flex flex-row justify-between mt-2">
        <div className="logo">
          <img src={logo} alt="logo" height="40px" width="190px"/>
        </div>

        <div>
          <span className="mr-3">dont have an account ? </span>
          <button className="bg-btncolor hover:bg-blue-700 px-5 py-2 text-white font-bold rounded">
            sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
