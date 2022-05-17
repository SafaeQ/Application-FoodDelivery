import Navbar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/register'
import DashboardDelevery from './pages/DashboardDelevery'
import DashboardLeader from './pages/DashboardLeader';
import CreateUser from './pages/AddLeader';
import CreateLivreur from './pages/AddDeleveryMan';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
    <Navbar />
    <Routes>      
        <Route path='/' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute> 
          } /> 
        <Route path='/login' element={<Login />} />      
        <Route path='/register' element={<Register />} />      
        <Route path='/dashboard-livreur' element={
        <PrivateRoute>
          <DashboardDelevery />
        </PrivateRoute>
        } />      
        <Route path='/dashboard-leaders' element={
          <PrivateRoute user={'admin'}>
            <DashboardLeader />
          </PrivateRoute>
        } />      
        <Route path='/add-leader' element={
        <PrivateRoute user={'leader'}>
          <CreateUser />
        </PrivateRoute>} />      
        <Route path='/add-livreur' element={<CreateLivreur />} />      
    </Routes>
    </>
  );
}

export default App;
