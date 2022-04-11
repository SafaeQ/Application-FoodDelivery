import Navbar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/register'

function App() {
  return (
    <>
    <Navbar />
    <Routes>      
        <Route path='/' element={<Home />} />      
        <Route path='/login' element={<Login />} />      
        <Route path='/register' element={<Register />} />      
    </Routes>
    {/* <Navbar/>
    <Dashboard /> */}
    </>
  );
}

export default App;
