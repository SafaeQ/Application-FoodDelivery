import React, {Component} from 'react';
import api from '../components/api';


export default class CreateUser extends Component {
      constructor(props) {
          super(props)
          this.onChangeUserName = this.onChangeUserName.bind(this);
          this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
          this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
          this.onChangeUserNumber = this.onChangeUserNumber.bind(this);
          this.onChangeUserAdress = this.onChangeUserAdress.bind(this);
          this.onChangeUserRole = this.onChangeUserRole.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
          this.state = {
              name: '',
              email: '',
              password: '', 
              number: '',
              adress: '',
              role: 'leader'
          }
      }
      onChangeUserName(e) {
          this.setState({ name: e.target.value })
      }
      onChangeUserEmail(e) {
          this.setState({ email: e.target.value })
      }
      onChangeUserPassword(e) {
          this.setState({ password: e.target.value })
      }
      onChangeUserNumber(e) {
          this.setState({ number: e.target.value })
      }
      onChangeUserAdress(e) {
          this.setState({ adress: e.target.value })
      }
      onChangeUserRole(e) {
          this.setState({ role: e.target.value })
      }
      onSubmit(e) {
          e.preventDefault()
          const userObject = {
              name: this.state.name,
              email: this.state.email,
              password: this.state.password,
              number: this.state.number,
              adress: this.state.adress,
              role: this.state.role
          };
          
        api.post('/api/add-leader', userObject)
              .then((res) => {
                  console.log(res.data)
              }).catch((error) => {
                  console.log(error)
              });
          this.setState({ name: '', email: '', password:'', number:'', adress:'', role:'leader' })
      }
  render(h) {

  return (
    <>
      <form onSubmit={this.onSubmit} className="wrapper">
        <div className="form-group">
        <label>
          Name:
          <input type="text" name='name' value={this.state.name} onChange={this.onChangeUserName} className="form-control"/>
        </label>
        </div>
        <div className="form-group">
        <label>
          Email:
          <input type="email" name='email' value={this.state.email} onChange={this.onChangeUserEmail} className="form-control"/>
        </label>
        </div>
        <div className="form-group">
        <label>
        Adress:
          <input type="text" name='adress' value={this.state.adress} onChange={this.onChangeUserAdress} className="form-control"/>
        </label>
        </div>
        <div className="form-group">
        <label>
        Number:
          <input type="number" name='number' value={this.state.number} onChange={this.onChangeUserNumber} className="form-control"/>
        </label>
        </div>
        <div className="form-group">
        <label>
        Password:
        <input type="password" name='password' value={this.state.password} onChange={this.onChangeUserPassword} className="form-control"/>
        </label>
        </div>
        <div className="form-group">
        <label>
        Role:
        <input type="role" name='role' value={this.state.role} onChange={this.onChangeUserRole} className="form-control"/>
        </label>
        </div>

        <input type="submit" className="btn btn-success btn-block" value="Submit" />
      </form>
    </>
  )
}
}
