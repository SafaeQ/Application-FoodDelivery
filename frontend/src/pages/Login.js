import React from 'react';
import { Link } from 'react-router-dom';
import api from '../components/api';

class Login  extends React.Component  {

    constructor(props){
      super(props)
      this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
      this.onChangeUserPassword = this.onChangeUserPassword.bind(this);

      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        email: '',
        password: ''
      }
    }

    onChangeUserEmail(e) {
      this.setState({email: e.target.value})
    }
    onChangeUserPassword(e) {
      this.setState({password: e.target.value})
    }
    
    onSubmit(e) {
      e.preventDefault()
      console.log('llll');
      const user = {
        email: this.state.email,
        password: this.state.password,
      }

      api.post('/auth/login', user)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        this.setState({ email: '', password: ''})
    }

  render() {
  return (
    <>
      <form className="form1" onSubmit={this.onSubmit} >
        <h2>Login</h2><br/>
        <div className="form-group d-flex flex-column g-2">
        <label htmlFor="email" className="form-label m-2 h5">Email</label>
        <input type="email" name="email" className="form-control-lg" value={this.state.email} onChange={this.onChangeUserEmail} placeholder="Email" /></div>
        <div className="form-group d-flex flex-column g-2">
        <label htmlFor="password" className="form-label m-2 h5">Password</label>
        <input type="password" name="password" className="form-control-lg" value={this.state.password} onChange={this.onChangeUserPassword} placeholder="Password" />
        </div>
        <button className="btn btn-primary btn-lg m-3 ms-0">Sign in</button>
        <hr/>
         <span>Don't have an account?  |   <Link to="/register">Register Here</Link></span> 
      </form>
    </>
  );
}
}

export default Login;
