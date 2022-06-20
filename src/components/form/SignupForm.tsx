import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import APIS from '../../constants/EndPoint'
import usePostHook from '../../customHooks/usePostHook'

type Props = {}

const SignupForm = (props: Props) => {

  const {
    isPostLoading,
    mutate: signupUserMutate,
    successMsg,
    addSuccessSnackBar,
    setAddSuccessSnackBar,
  } = usePostHook({ queryKey: `signupUser`, setOpenAddPopup: "" });
  


  const [password, setPassword] = useState<string>('')
  const [confirmpassword, setConfirmPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [fullName , setFullName] = useState<string>('')

  const [passwordError, setPasswordError] = useState<string>('')
  const [confirmPasswordError , setconfirmPasswordError] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [fullNameError , setFullNameError] = useState<string>('')

  const navigate = useNavigate()
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const handleUserSignup = (e: any) => {
    e.preventDefault()
    //name validation
    if(!fullName){
      setFullNameError("Full name must be provided")
    }
   //email validation
   
    else if (!email) {
      setEmailError( "Email is required")
    } 

    else if (!email.match(validRegex)) {
      setEmailError("Format of email is incorrect")
    } 

    //password validation
    else if(!password){
      setPasswordError('Password must be provided')
    }

    //confirm password validation 
    else if(!confirmpassword){
      setconfirmPasswordError('Password must be confirmed')
    }

    else if(password !== confirmpassword){
      setconfirmPasswordError('Passwords donot match')
    }
    else{
      //handling api for sigining up new user
      const url = APIS.SIGNUP;
      const formData = {
        email: email,
      };
      
     navigate('/dashboard')
    }

    

   

  }
  return (
    <div className=" form-container  w-[400px]  bg-white-100 min-h-[400px] flex flex-col px-10 py-5 rounded-md">
      <h1 className="text-center text-2xl font-bold font-16">Let's go</h1>
      <div className="form mt-5">
        <form onSubmit={handleUserSignup}>
          <div className="flex flex-col justify-center">
            <label>Name:</label>
            <input
              type="text"
              name="fullname"
              value={fullName}
              placeholder="Your full name  here"
              className="p-2 mt-3 text-black-100 border-solid-black[1px] border border-black-100 focus:outline-none"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          {fullNameError && (<p className='text-red-500 text-xs'>{fullNameError}</p>)}
          <div className="flex flex-col justify-center">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Your email here"
              className="p-2 mt-3 text-black-100 border-solid-black[1px] border border-black-100 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {emailError && (<p className='text-red-500 text-xs'>{emailError}</p>)}
          <div className="flex flex-col justify-center w-full">
            <label className="mt-3">password:</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Your password here"
              className="input_password p-2 mt-3 text-black-100  border border-black-100 focus:outline-none
              focus:border-black-300"
              onChange={(e) => setPassword(e.target.value)}


            />

          </div>
          {passwordError && (<p className='text-red-500 text-xs'>{passwordError}</p>)}
          <div className="flex flex-col justify-center w-full">
            <label className="mt-3">confirm password:</label>
            <input
              type="password"
              name="password"
              value={confirmpassword}
              placeholder="Your password here"
              className="input_password p-2 mt-3 text-black-100  border border-black-100 focus:outline-none
              focus:border-black-300"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {confirmPasswordError && (<p className='text-red-500 text-xs'>{confirmPasswordError}</p>)}
          <div className="mt-5">
            <button className="bg-btncolor px-4 py-2 w-full rounded-lg hover:bg-blue-500 text-white">
              Sign Up
            </button>
          </div>
          <p className="text-center mt-5 text-xs">or signup with SSO</p>
        </form>
      </div>
    </div>
  )
}

export default SignupForm