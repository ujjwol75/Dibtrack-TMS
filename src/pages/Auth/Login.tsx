import React from 'react'
import Form from '../../components/form/Form'
import Navbar from '../../components/Navbar'
function Login() {
  return (
    <div>
      
      <div className="login h-[100vh] w-screen overflow-hidden ">
      <Navbar text = "signup" text1='Dont have an account? '/>
      <Form />
      <div className='gradient w-[110%]  transform -rotate-12 '></div>
      </div>
    </div>
  )
}

export default Login
