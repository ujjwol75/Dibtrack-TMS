import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from '../../components/form/Form'
import Navbar from '../../components/Navbar'
import APIS from '../../constants/EndPoint';
import usePostHookNoAuth from '../../customHooks/usePostHookNoAuth';
import { setKey } from '../../helpers/sessionKey';

function Login() {

  const navigate = useNavigate()
  const [isPostLoading, mutate, isPostSuccess, postData, isPostError, successMsg, errorMsg] =
    usePostHookNoAuth();

  const [credentials, setCredentials] = useState<any>({
    email: "",
    password: ""
  })

  const handleLogin = async (e: any) => {
    e.preventDefault()
    const url = APIS.LOGIN;
    const formData = {
      email: credentials.email,
      password: credentials.password
    };
    try {
      await mutate({ url, formData });
    } catch (e) {
      navigate("/");
      console.log(e);
    }
  };

  useEffect(() => {
    if (postData?.status === 200) {
      const userAuth = {
        accessToken: postData.data.access,
        refreshToken: postData.data.refresh,
        // permissions: postData.data.user.permissions,
        // user: postData.data.user,
      };
      setKey("userAuth", JSON.stringify(userAuth));
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [postData]);


  return (
    <div>
      <div className="login h-[100vh] w-screen overflow-hidden ">
        <Navbar text="signup" text1='Dont have an account? ' />
        <Form credentials={credentials} setCredentials={setCredentials} handleFunction={handleLogin} loading={isPostLoading} />
        <div className='gradient w-[110%]  transform -rotate-12 '></div>
      </div>
    </div>
  )
}

export default Login
