import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layputs/AuthLayout";
import WorkSpaceLayout from "../layputs/WorkSpaceLayout";

import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Dashboard from "../pages/Dashboard";
import DynamicDashboard from "../pages/Dashboard/DynamicDashboard";
import WorkSpaceDashboard from "../pages/Dashboard/WorkSpaceDashboard";
import DashboardNotFound from "../pages/Error/DashboardNotFound";
import PrivateRoute from "./PrivateRoute";

// https://adarshaacharya.com.np/blog/role-based-auth-with-react-router-v6

/**
 * Top level application router
 *
 * @returns {Component}
 */
const Router = () => {
  return (
    <Routes>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        
      </Route>

      
      
      <Route
        element={
          <PrivateRoute>
            <WorkSpaceLayout />
          </PrivateRoute>
        }
      >
        
        <Route path={"/"} element={<WorkSpaceDashboard />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/dashboard/:name"} element={<DynamicDashboard />} />
        <Route path="/*" element={<DashboardNotFound />} />
        
      </Route>
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Router;
