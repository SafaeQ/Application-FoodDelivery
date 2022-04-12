import React from 'react';
import api from '../components/api';
import { useState } from 'react';

const AddLeader = (props) => {

  const [leader, setLeader] = useState([])

    const handleInputChange = (event)=> {
        console.log(event)
        const {name, value} = event.target
        setLeader(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (e)=> {
        e.preventDefault();
        console.log('its work')
      const response = await api.post('/api/add-leader')
      console.log(response);
      setLeader([...leader, response.data])
      if (response.ok) {
        window.location.href = 'dashboard-leaders'
      }else {
        window.location.href = 'add-leader'
      }
        
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name='name' value={leader.name} onChange = {handleInputChange}/>
        </label>
        <label>
          Email:
          <input type="email" name='email' value={leader.email} onChange = {handleInputChange}/>
        </label>
        <label>
        Adress:
          <input type="text" name='adress' value={leader.adress} onChange = {handleInputChange}/>
        </label>
        <label>
        Number:
          <input type="number" name='number' value={leader.number} onChange = {handleInputChange}/>
        </label>
        <label>
        Password:
        <input type="password" name='password' value={leader.password} onChange = {handleInputChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default AddLeader;
