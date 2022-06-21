import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SignupForm from '../../components/form/SignupForm'
import Navbar from '../../components/Navbar'
import APIS from '../../constants/EndPoint'
import usePostHookNoAuth from '../../customHooks/usePostHookNoAuth'
import { setKey } from '../../helpers/sessionKey'


const Signup = () => {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  const navigate = useNavigate()
  const [isPostLoading, mutate, isPostSuccess, postData, isPostError, successMsg, errorMsg] =
    usePostHookNoAuth();
  console.log('postsuccess' , isPostSuccess)
  const [credentials, setCredentials] = useState<any>({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword:""
  })

  const [errors , setErrors] = useState<any>({
     fullNameError :" ",
     emailError : "" ,
     passwordError: "",
     confirmPasswordError: ""
  })

  const handleSignUp = async (e: any) => {
    e.preventDefault()
    console.log('credentials' , credentials)

    if(!credentials.fullName){
    
      setErrors((prevState:any)=> ({...prevState , fullNameError: "Name cannot be empty"}))

    }
   //email validation
   
    else if (!credentials.email) {
      setErrors((prevState:any)=> ({...prevState , emailError: "email cannot be empty"}))
    } 

    else if (!credentials.email.match(validRegex)) {
      setErrors((prevState:any)=> ({...prevState , emailError: "Invalid email format"}))
    } 

    //password validation
    else if(!credentials.password){
      setErrors((prevState:any)=> ({...prevState , passwordError: "password cannot be empty"}))
    }

    //confirm password validation 
    else if(!credentials.confirmpassword){
      setErrors((prevState:any)=> ({...prevState , confirmpasswordError: "Password must be confirmed"}))
    }

    else if(credentials.password !== credentials.confirmpassword){
      setErrors((prevState:any)=> ({...prevState , confirmPasswordError: "Passwords didnot matched"}))
    }
    
      //handling api for sigining up new user
      const url = APIS.SIGNUP;
      const formData = {
        full_name:credentials.fullName , 
        email: credentials.email,
        password:credentials.password,
        mobile_number: credentials.mobileNumber
      };
      console.log('formdata' , formData)
      try {
        await mutate({ url, formData });
      } catch (e) {
        console.log('e');
      }
      
     if(isPostSuccess){
       navigate('/login')
     
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
      navigate("/signup");
    }
  }, [postData]);

  return (
    <div>

      <div className="login h-[100vh] w-screen overflow-hidden ">
        <Navbar text="login" text1="Already signed up ? " />
        <SignupForm credentials={credentials} setCredentials={setCredentials} handleFunction={handleSignUp} errors = {errors} />
        <div className='gradient w-[110%]  transform -rotate-12 '></div>
      </div>
    </div>
  )
}

export default Signup
