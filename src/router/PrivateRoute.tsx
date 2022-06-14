import { Navigate, useNavigate } from 'react-router-dom';
import { accessToken, getKey } from "../helpers/sessionKey";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {


  const token = accessToken()
  console.log(token)
  const navigate = useNavigate()
  if (!token) {
    navigate("/login")
  }
  return children;
};

export default PrivateRoute;
