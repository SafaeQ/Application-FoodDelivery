import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

const Register = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);
  // const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const {name, value} = event.target
    setUser({...user, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {name, email, password, adress, number, role} = user

    console.log('clicked');
    if (name=== '' || email === '' || password === '' || adress === '' || number === '' || role) {

      setError(true)

    }else {
      const response = axios.post('http://localhost:9988/auth/signup',user)
      console.log(user);
      // window.location.href = ('/login')
    }
  }


  return (
    <>
      <form className="form1" onSubmit={handleSubmit}>
            <h2>Register Form</h2><br/>
            <div className="d-flex flex-column">
            <div className="form-group">
            <div className="form-group">
            <label htmlFor="name" className="form-label m-2 h5">Name</label>
            <input type="text" name="name" placeholder="Name" className="form-control" onChange={handleChange} required/></div>
            <div className="form-group">
            <label htmlFor="email" className="form-label m-2 h5">Email</label>
            <input type="email" name="email" placeholder="Email" className="form-control" onChange={handleChange} required/></div>
            <div className="form-group">
            <label htmlFor="password" className="form-label m-2 h5">Password</label>
            <input type="password" name="password" placeholder="password" className="form-control" onChange={handleChange} required/></div>
            <div className="form-group">
            <label htmlFor="number" className="form-label m-2 h5">Number</label>
            <input type="number" name="number" placeholder="number" className="form-control" onChange={handleChange} required/></div>
            <div className="form-group">
            <label htmlFor="role" className="form-label m-2 h5">Role</label>
            <input type="role" name="role" placeholder="role" className="form-control" onChange={handleChange} required/></div>

            <label htmlFor="address" className="form-label m-2 h5">Address</label>
            <input type="text" name="adress" placeholder="Address" className="form-control" onChange={handleChange} required/></div>

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
