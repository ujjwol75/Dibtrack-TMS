import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import HomeDib from "../components/HomeDib/HomeDib";
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
     <div className="col-span-4">
          <Topnav /> 
         <Outlet />
        {/* <HomeDib/> */}
        </div> 
      </div>
    </>
  );
};

export default DashboardLayout;
