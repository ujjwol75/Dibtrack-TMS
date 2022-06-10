import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from '../../components/form/Form'
import Navbar from '../../components/Navbar'
import APIS from '../../constants/EndPoint';
import usePostHookNoAuth from '../../customHooks/usePostHookNoAuth';

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
    console.log(credentials)
    const url = APIS.LOGIN;
    // try {
    //   await mutate({ url, formData });
    // } catch (e) {
    //   navigate("/login");
    //   console.log(e);
    // }
  };


  return (
    <div>

      <div className="login h-[100vh] w-screen overflow-hidden ">
        <Navbar text="signup" text1='Dont have an account? ' />
        <Form credentials={credentials} setCredentials={setCredentials} handleFunction={handleLogin} />
        <div className='gradient w-[110%]  transform -rotate-12 '></div>
      </div>
    </div>
  )
}

export default Login
