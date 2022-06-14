

import { useNavigate } from "react-router-dom";
import { removeKey } from "../../helpers/sessionKey";


type Props = {}

const Logout = (props: Props) => {
  
  const navigate = useNavigate();

  const handleLogOut = () => {
    sessionStorage.clear()
    removeKey('userAuth');
    navigate("/login");
  }
  return (
    <div>
      <div className="mt-3 flex flex-row  cursor-pointer" onClick={handleLogOut}>
        Logout
      </div>
    </div>
  )
}

export default Logout