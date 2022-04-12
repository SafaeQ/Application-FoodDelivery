import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const [user, setUser] = useState([]);
  
  const handleChange = (event) => {
    const {name, value} = event.target
    setUser({...user, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('clicked');
    const {name, email, password, adress, number} = user
  }

  return (
    <>
      <form className="form1" onSubmit={handleSubmit}>
            <h2>Register Form</h2><br/>
            <div className="d-flex flex-column">
            <div className="form-group">
            <div className="form-group">
            <label htmlFor="email" className="form-label m-2 h5">Email</label>
            <input type="email" name="mail" placeholder="Email" className="form-control"  required/></div>
            <div className="form-group">
            <label htmlFor="password" className="form-label m-2 h5">Password</label>
            <input type="password" name="psd" placeholder="Password" className="form-control"  required/></div>
            <label htmlFor="address" className="form-label m-2 h5">Address</label>
            <textarea type="text" name="addr" placeholder="Address" className="form-control"  required/></div>
            <button className="btn btn-primary my-3 h4">Sign Up</button>
            <div className="h5 text-center" ></div>
            <hr/>
            <span>Already have an account?  |  <Link to="/login">Sign in</Link></span>              
            </div>
        </form>
    </>
  );
}

export default Register;
