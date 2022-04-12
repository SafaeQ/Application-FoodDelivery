import Navbar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/register'
import DashboardDelevery from './pages/DashboardDelevery'

function App() {
  return (
    <>
    <Navbar />
    <Routes>      
        <Route path='/' element={<Home />} />      
        <Route path='/login' element={<Login />} />      
        <Route path='/register' element={<Register />} />      
        <Route path='/dashboard-livereur' element={<DashboardDelevery />} />      
    </Routes>
    </>
  );
}

export default App;
