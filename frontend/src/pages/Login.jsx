import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <form className="form1" >
        <h2>Login</h2><br/>
        <div className="form-group d-flex flex-column g-2">
        <label htmlFor="email" className="form-label m-2 h5">Email</label>
        <input type="email" name="email" className="form-control-lg"  placeholder="Email" required/></div>
        <div className="form-group d-flex flex-column g-2">
        <label htmlFor="password" className="form-label m-2 h5">Password</label>
        <input type="password" name="password" className="form-control-lg"  placeholder="Password" required/>
        </div>
        <button className="btn btn-primary btn-lg m-3 ms-0">Sign in</button>
        <hr/>
         <span>Don't have an account?  |   <Link to="/register">Register Here</Link></span> 
      </form>
    </>
  );
}

export default Login;
