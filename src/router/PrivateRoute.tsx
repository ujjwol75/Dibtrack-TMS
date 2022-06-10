import { Navigate, useNavigate } from 'react-router-dom';
import { accessToken, getKey } from "../helpers/sessionKey";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate()
  const token = accessToken()
  if (!token) {
    navigate("/login")
  }
  return children;
};

export default PrivateRoute;
