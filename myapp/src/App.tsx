import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <>
        
         <BrowserRouter>
         <Routes>
           <Route path = "/login" element = {<Login />} />
           <Route path  = "/dashboard" element = {<Dashboard />}/>
          </Routes>
         
         </BrowserRouter> 
          
          
        
    </>
  );
}

export default App;
