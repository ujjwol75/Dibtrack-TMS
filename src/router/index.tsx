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
import DashboardLayout from "../layputs/DashboardLayout";
import HomeDib from "../components/HomeDib/HomeDib";
import HomeLayout from "../layputs/HomeLayout";


// https://adarshaacharya.com.np/blog/role-based-auth-with-react-router-v6

/**
 * Top level application router
 *
 * @returns {Component}
 */
const Router = () => {
  return (
    <Routes>

      {/* LAYOUT FOR AUTHENTICATION PROCESSES */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* LAYOUT WITH SIDEBAR AND TOPNAV */}
      <Route
        element={
          <PrivateRoute>
            <WorkSpaceLayout />
          </PrivateRoute>
        }
      >
        <Route path={"/:spaceId"} element={<WorkSpaceDashboard />} />
        <Route path={"/:spaceId/:slug/:id"} element={<WorkSpaceDashboard />} />
        <Route path={"/dashboard/:name"} element={<DynamicDashboard />} />
        <Route path="/*" element={<DashboardNotFound />} />
      </Route>

      {/* PLAIN LAYOUT */}
      <Route
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path="/*" element={<DashboardNotFound />} />
      </Route>


      {/* LAYOUT WITH SIDEBAR ONLY */}
      <Route element={
        <PrivateRoute>
          <HomeLayout />
        </PrivateRoute>
      }
      >
        <Route path={"/"} element={<HomeDib />} />
      </Route>


    </Routes>
  );
};

export default Router;
