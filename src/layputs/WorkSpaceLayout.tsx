import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topnav from "../components/Topnav/Topnav";

const DashboardLayout = () => {
  const[showPop, setShowPop]= useState(false)
  return (
    <>
      <div className="grid grid-cols-5">
        <Sidebar />
        <div className="col-span-4">
          <Topnav />
          <Outlet />
        </div>
        <div>
          mm
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
