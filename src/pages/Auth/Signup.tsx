import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SignupForm from '../../components/form/SignupForm'
import Navbar from '../../components/Navbar'
import APIS from '../../constants/EndPoint'
import usePostHookNoAuth from '../../customHooks/usePostHookNoAuth'


const Signup = () => {

  const url = APIS.LOGIN;
  const navigate = useNavigate()
  const [isPostLoading, mutate, isPostSuccess, postData, isPostError, successMsg, errorMsg] =
    usePostHookNoAuth();

  const [credentials, setCredentials] = useState<any>({
    email: "",
    password: ""
  })

  const handleSignUp = async (e: any) => {
    e.preventDefault()
    console.log(credentials)
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
        <Navbar text="login" text1="Already signed up ? " />
        <SignupForm /*  credentials={credentials} setCredentials={setCredentials} handleFunction={handleSignUp}  *//>
        <div className='gradient w-[110%]  transform -rotate-12 '></div>
      </div>
    </div>
  )
}

export default Signup
