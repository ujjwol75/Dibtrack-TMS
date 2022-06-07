import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topnav from "../components/Topnav/Topnav";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div>
          <Topnav />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
