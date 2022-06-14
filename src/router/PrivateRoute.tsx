import { Navigate, useNavigate } from 'react-router-dom';
import { accessToken, getKey } from "../helpers/sessionKey";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {


  const token = accessToken()
  const navigate = useNavigate()
  if (!token) {
    navigate("/login")
  }
  return children;
};

export default PrivateRoute;
