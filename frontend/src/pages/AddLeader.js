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
          this.onSubmit = this.onSubmit.bind(this);
          this.state = {
              name: '',
              email: '',
              password: '', 
              number: '',
              adress: ''
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
      onSubmit(e) {
          e.preventDefault()
          const userObject = {
              name: this.state.name,
              email: this.state.email,
              password: this.state.password,
              number: this.state.number,
              adress: this.state.adress
          };
        api.post('api/add-leader', userObject)
              .then((res) => {
                  console.log(res.data)
              }).catch((error) => {
                  console.log(error)
              });
          this.setState({ name: '', email: '', password:'', number:'', adress:'' })
      }
  render(h) {

  return (
    <>
      <form onSubmit={this.onSubmit}>
        <label>
          Name:
          <input type="text" name='name' value={this.state.name} onChange={this.onChangeUserName}/>
        </label>
        <label>
          Email:
          <input type="email" name='email' value={this.state.email} onChange={this.onChangeUserEmail}/>
        </label>
        <label>
        Adress:
          <input type="text" name='adress' value={this.state.adress} onChange={this.onChangeUserAdress}/>
        </label>
        <label>
        Number:
          <input type="number" name='number' value={this.state.number} onChange={this.onChangeUserNumber}/>
        </label>
        <label>
        Password:
        <input type="password" name='password' value={this.state.password} onChange={this.onChangeUserPassword}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}
}

// export default AddLeader;
