import React from 'react';
import axios from 'axios'
import {useState, useEffect} from 'react'

const DashboardDelevery = () => {
  const [users, setUsers] = useState([])

    const fetchData = ()=>{
        axios
            .get('http://localhost:9988/api/livreurs')
            .then(response =>{
            setUsers(response.data)
            })
            .catch(error => {
                console.log({error});
            })
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <>
      <div className="container">
      <h1 className="text-center">Delevery Men</h1>

      <div className="container h-100" >

      <div className="row justify-content-center h-100">
      <div className="col-md-8">
      <button type="button" className="btn btn-outline-success">Add Delevery man</button>
      <br/>
      <br/>
        <table className="table table-striped table-dark table-hover" >
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Adress</th>
            <th scope="col">Number</th>
            <th scope="col">Password</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        {users.length > 0 ? (
          users.map((user, i ) => (
            <tr >
            <th key={i} scope="row">1</th>
            <td> {user.name} </td>
            <td>{user.email}</td>
            <td>{user.adress}</td>
            <td>{user.number}</td>
            <td>{user.password} </td>
            <td>
              <a className="btn btn-outline-primary">Edit</a>
              <a className="btn btn-outline-danger">Delete</a>
            </td>
          </tr>
          ))
        ): (
          <tr>
            <td> NOthing here </td>
          </tr>
        )}
        </tbody>
      </table>
      </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default DashboardDelevery;
