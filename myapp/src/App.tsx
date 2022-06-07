import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Topnav from './components/Topnav/Topnav';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path='/react-trello' element={<ReactTrello />} /> */}
           <Route path = "/login" element = {<Login />} />
           <Route path  = "/dashboard" element = {<Dashboard />}/>
           <Route path = "/topnav" element={<Topnav/>}/>
          </Routes>
         </BrowserRouter> 
    </>
  );
}

export default App;
