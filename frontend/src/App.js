import Navbar from './components/NavBar/NavBar';
import Dashboard from './pages/DashboardDelevery';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' render={<Home />} />
      </Switch>
    </Router>
    <Navbar/>
    <Dashboard />
    </>
  );
}

export default App;
