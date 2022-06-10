import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import SignupForm from '../../components/form/SignupForm'
import Navbar from '../../components/Navbar'

const Signup = () => {
    
  return (
    <div>
      
      <div className="login h-[100vh] w-screen overflow-hidden ">
      <Navbar text = "login" text1 = "Already signed up ? "/>
      <SignupForm />
      <div className='gradient w-[110%]  transform -rotate-12 '></div>
      </div>
    </div>
  )
}

export default Signup
