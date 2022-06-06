import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ReactTrello from "./components/ReactTrello/ReactTrello"


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/react-trello' element={<ReactTrello />} />
        </Routes>

      </BrowserRouter>



    </>
  );
}

export default App;
