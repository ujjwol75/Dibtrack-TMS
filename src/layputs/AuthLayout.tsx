import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC<any> = () => {
  return (
    <><Outlet /></>
  );
};

export default AuthLayout;
