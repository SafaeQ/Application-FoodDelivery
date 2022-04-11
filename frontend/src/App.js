import Navbar from './components/NavBar/NavBar';
import Dashboard from './pages/DashboardDelevery';
import { Router, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Router>      
        <Route path='/' render={<Home />} />      
    </Router>
    <Navbar/>
    <Dashboard />
    </>
  );
}

export default App;
