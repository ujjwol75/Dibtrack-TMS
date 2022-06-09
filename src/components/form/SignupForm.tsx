import React , {useState} from 'react'
import {useNavigate} from 'react-router-dom'
type Props = {}

const SignupForm = (props: Props) => {

    const[password, setPassword] = useState<string>('')
    const[confirmpassword, setConfirmPassword] = useState<string>('')
   const[email , setEmail] = useState<string>('')

   const navigate =useNavigate()
   const handleSubmit = (e:any) => {
     e.preventDefault()
     navigate('/dashborad')
     console.log('email: ' , email)
     console.log('password: ' , password)
   }
  return (
    <div className=" form-container  w-[400px]  bg-white-100 min-h-[400px] flex flex-col px-10 py-5 rounded-md">
      <h1 className="text-center text-2xl font-bold font-16">Let's go</h1>
      <div className="form mt-5">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="&#xf0e0;    Your email here"
              className="p-2 mt-5 text-black-100 border-solid-black[1px] border border-black-100 focus:outline-none"
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col justify-center w-full">
            <label className="mt-3">password:</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="&#xf023; Your password here"
              className="input_password p-2 mt-5 text-black-100  border border-black-100 focus:outline-none
              focus:border-black-300"
              onChange={(e) => setPassword(e.target.value)}

            
            />
            
          </div>

          <div className="flex flex-col justify-center w-full">
            <label className="mt-3">confirm password:</label>
            <input
              type="password"
              name="password"
              value={confirmpassword}
              placeholder="&#xf023; Your password here"
              className="input_password p-2 mt-5 text-black-100  border border-black-100 focus:outline-none
              focus:border-black-300"
              onChange={(e) => setConfirmPassword(e.target.value)}

            
            />
            
          </div>
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