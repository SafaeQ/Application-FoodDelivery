import Navbar from './components/NavBar/NavBar';
import Dashboard from './pages/DashboardDelevery';
import { Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    
    <Navbar/>
    <Dashboard />
    </>
  );
}

export default App;
