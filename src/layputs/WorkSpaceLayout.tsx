import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topnav from "../components/Topnav/Topnav";

const DashboardLayout = () => {
  
  const [collapse, setCollapse] = useState<boolean>(false);

   console.log('workspace collapse: ' , collapse )
  return (
    <>
     { 
     collapse ? (
      <div className="grid grid-cols-5">
      <div className="col-span-5">
        
          <Topnav collapse = {collapse}  setCollapse =  {setCollapse}/>
    </div>
      
       <Outlet />
      
       
    </div>)
     
    : (
      <div className="grid grid-cols-5">
        <div className="col-span-1">
        <Sidebar
        
      collapse={collapse}
      setCollapse={setCollapse}
        />
        </div>
       
        <div className="col-span-4">
          <Topnav  collapse = {collapse} setCollapse =  {setCollapse}/>
          <Outlet />
        </div>
       
      </div>
    ) 
    }
    </>
  );
};

export default DashboardLayout;
