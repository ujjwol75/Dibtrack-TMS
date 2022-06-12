import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topnav from "../components/Topnav/Topnav";
import { accessToken } from "../helpers/sessionKey";

const DashboardLayout = () => {
  const [showPop, setShowPop] = useState(false)
  // const token = accessToken()

  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/login")
  //   }
  // }, [token])

  return (
    <>
      <div className="grid grid-cols-5">
        <Sidebar />
        {/* <div className="col-span-4">
          <Topnav /> 
          <Outlet />
        </div> */}
        <div className="h-[3.5rem] w-[92rem] bg-slate-600 flex justify-between">
          <div className="flex">
            <p>Home</p>
          </div>
          <div className="flex">
            <div>

          <p>Calender</p>
            </div>
            <div>

          <p>Calender</p>
            </div>
            <div>

          <p>Calender</p>
            </div>
         
          </div>

        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
