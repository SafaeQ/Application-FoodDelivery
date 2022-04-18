import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../components/api';


const Login = () => {

      const navigate = useNavigate();

      const [user, setUser] = useState({
        email: '',
        password: ''
      });
      
      const handleInputChange = (event) => {
       const {name, value} = event.target
       setUser(values => ({...values, [name]: value}))
      }
    
    const onSubmit = (e) => {
      e.preventDefault()
      console.log('llll');
      api.post('/auth/login', user)
        .then((res) => {
          if (user.role === 'leader') {
            console.log(res.data);
            navigate('/dashboard-livreur')
          }else if (user.role === 'admin') {
            console.log(res.data);
            navigate('/dashboard-leaders')
          }else {
            alert('oh oh')
          }
          
        })
        .catch((err) => {
          console.log(err);
          navigate('/login')
        })
    }
  
  return (
    <>
      <form className="form1" onSubmit={onSubmit} >
        <h2>Login</h2><br/>
        <div className="form-group d-flex flex-column g-2">
        <label htmlFor="email" className="form-label m-2 h5">Email</label>
        <input type="email" name="email" className="form-control-lg"  onChange={handleInputChange} placeholder="Email" /></div>
        <div className="form-group d-flex flex-column g-2">
        <label htmlFor="password" className="form-label m-2 h5">Password</label>
        <input type="password" name="password" className="form-control-lg" onChange={handleInputChange} placeholder="Password" />
        </div>
        <button className="btn btn-primary btn-lg m-3 ms-0">Sign in</button>
        <hr/>
         <span>Don't have an account?  |   <Link to="/register">Register Here</Link></span> 
      </form>
    </>
  );
}


export default Login;
