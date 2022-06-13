import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import { accessToken } from '../helpers/sessionKey';

type Props = {}

const HomeLayout = (props: Props) => {

  const token = accessToken()
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, [token])

  const [collapse, setCollapse] = useState<boolean>(false);
  return (

    <>
      {
        collapse ? (
          <div className="grid grid-cols-5">
            <div className="col-span-5">
              <Outlet />
            </div>
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
                <Outlet />
              </div>
            </div>
          )
      }
    </>
  );
}

export default HomeLayout