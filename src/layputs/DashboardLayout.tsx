import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { accessToken } from "../helpers/sessionKey";


const PosScreenLayout = () => {
  const token = accessToken()
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, [token])
  return (
    <><Outlet /></>
  );
};

export default PosScreenLayout;
