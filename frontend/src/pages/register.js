import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import api from '../components/api';

const Register = ()=> {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [adress,setAdress] = useState('');
    const [role,setRole] = useState('');

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name , value} = e.target;

        if(name === "name"){
            setName(value);
        }
        if(name === "number"){
            setNumber(value);
        }
        if(name === "email"){
            setEmail(value);
        }
        if(name === "password"){
            setPassword(value);
        }
        if(name === "adress"){
          setAdress(value);
        }
        if(name === "role"){
          setRole(value);
        }

      }
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('clicked');
        let obj = {
          name : name,
          email:email,
          password:password,
          adress:adress,
          number:number,
          role:role,
        }
      console.log(obj);

      api.post('/auth/signup', obj)
          .then((res) => {
            console.log(res.data)
            navigate('/login')
        }).catch((error) => {
            console.log(error)
            navigate('/')
        });

  }
  return (
    <>
    <div className="container">
      <form className="form1" >
            <h2 className="text-center">Register Form</h2>
            <br/>
            <div className="container h-100">
          <div className="row justify-content-center h-100">
            <div className="d-flex flex-column">
            
            <div className="form-group">
            <label htmlFor="name" className="form-label m-2 h5">Name</label>
            <input type="text" name="name" placeholder="Name" className="form-control" onChange={(e) => handleInputChange(e)} /></div>
            <div className="form-group">
            <label htmlFor="email" className="form-label m-2 h5">Email</label>
            <input type="email" name="email" placeholder="Email" className="form-control" onChange={(e) => handleInputChange(e)} /></div>
            <div className="form-group">
            <label htmlFor="password" className="form-label m-2 h5">Password</label>
            <input type="password" name="password" placeholder="password" className="form-control" onChange={(e) => handleInputChange(e)} /></div>
            <div className="form-group">
            <label htmlFor="number" className="form-label m-2 h5">Number</label>
            <input type="number" name="number" placeholder="number" className="form-control" onChange={(e) => handleInputChange(e)} /></div>
            <div className="form-group">
            <label htmlFor="role" className="form-label m-2 h5">Role</label>
            <input type="role" name="role" placeholder="role" className="form-control" onChange={(e) => handleInputChange(e)} /></div>

            <label htmlFor="address" className="form-label m-2 h5">Address</label>
            <input type="text" name="adress" placeholder="Address" className="form-control" onChange={(e) => handleInputChange(e)} /></div>

            <button className="btn btn-primary my-3 h4" onSubmit = {()=>handleSubmit()}>Sign Up</button>
            <div className="h5 text-center" ></div>
            <hr/>
            <span>Already have an account?  |  <Link to="/login">Sign in</Link></span>              
            </div>
            
        </div>
        </form>
        </div>
    </>
  )
}
export default Register