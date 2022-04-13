import Navbar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/register'
import DashboardDelevery from './pages/DashboardDelevery'
import DashboardLeader from './pages/DashboardLeader';
import CreateUser from './pages/AddLeader';

function App() {
  return (
    <>
    <Navbar />
    <Routes>      
        <Route path='/' element={<Home />} />      
        <Route path='/login' element={<Login />} />      
        <Route path='/register' element={<Register />} />      
        <Route path='/dashboard-livereur' element={<DashboardDelevery />} />      
        <Route path='/dashboard-leaders' element={<DashboardLeader />} />      
        <Route path='/add-leader' element={<CreateUser />} />      
    </Routes>
    </>
  );
}

export default App;
