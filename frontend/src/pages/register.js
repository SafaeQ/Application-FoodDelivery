import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import api from '../components/api';

class Register extends React.Component {

  state = {
    name: '',
    email:'',
    password:'',
    number: '',
    role: '',
    adress: ''
}

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({ [name]: value})
  }

  handleSubmit = (e) => {
      e.preventDefault()
      console.log('rr');
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        number: this.state.number,
        adress: this.state.adress,
        role: this.state.role
    };
    console.log(user);
    api.post('/auth/signup', user)
        .then((res) => {
          console.log(res.data)
      }).catch((error) => {
          console.log(error)
      });
    this.setState({ name: '', email: '', password:'', number:'', adress:'', role:'leader' })
  }

  render() {
  return (
    <>
    <div className="container">
      <form className="form1" onSubmit={this.handleSubmit}>
            <h2 className="text-center">Register Form</h2>
            <br/>
            <div className="container h-100">
          <div className="row justify-content-center h-100">
            <div className="d-flex flex-column">
            
            <div className="form-group">
            <label htmlFor="name" className="form-label m-2 h5">Name</label>
            <input type="text" name="name" placeholder="Name" className="form-control" onChange={this.handleChange} required/></div>
            <div className="form-group">
            <label htmlFor="email" className="form-label m-2 h5">Email</label>
            <input type="email" name="email" placeholder="Email" className="form-control" onChange={this.handleChange} required/></div>
            <div className="form-group">
            <label htmlFor="password" className="form-label m-2 h5">Password</label>
            <input type="password" name="password" placeholder="password" className="form-control" onChange={this.handleChange} required/></div>
            <div className="form-group">
            <label htmlFor="number" className="form-label m-2 h5">Number</label>
            <input type="number" name="number" placeholder="number" className="form-control" onChange={this.handleChange} required/></div>
            <div className="form-group">
            <label htmlFor="role" className="form-label m-2 h5">Role</label>
            <input type="role" name="role" placeholder="role" className="form-control" onChange={this.handleChange} required/></div>

            <label htmlFor="address" className="form-label m-2 h5">Address</label>
            <input type="text" name="adress" placeholder="Address" className="form-control" onChange={this.handleChange} required/></div>

            <button className="btn btn-primary my-3 h4">Sign Up</button>
            <div className="h5 text-center" ></div>
            <hr/>
            <span>Already have an account?  |  <Link to="/login">Sign in</Link></span>              
            </div>
            
        </div>
        </form>
        </div>
    </>
  );
}
}

export default Register;
