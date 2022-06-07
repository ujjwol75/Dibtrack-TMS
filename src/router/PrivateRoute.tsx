import {Navigate} from 'react-router-dom';
import {getKey} from "../helpers/sessionKey";

const PrivateRoute = ({children}: { children: JSX.Element }) => {
  const token = getKey("token")
  if (token) {
    return <Navigate to="/login"/>;
  }
  return children;
};

export default PrivateRoute;
