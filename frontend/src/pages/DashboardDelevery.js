import React from 'react';
import axios from 'axios'
import {useState, useEffect} from 'react'

const DashboardDelevery = () => {

  const [deliveries, setDeliveries] = useState([])

    const fetchData = ()=>{
        axios
            .get('http://localhost:9988/api/livreurs')
            .then(response =>{
              setDeliveries(response.data)
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
      <div className="col-md-12">
      <button type="button" className="btn btn-outline-success">Add Delevery man</button>
      <br/>
      <br/>
        <table className="table table-striped table-dark table-hover" >
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Number</th>
            <th scope="col">Password</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        {deliveries.length > 0 ? (
          deliveries.map((deliverie, i ) => (
            <tr key={i}>
            <th scope="row"> {deliverie.id} </th>
            <td> {deliverie.name} </td>
            <td>{deliverie.email}</td>
            <td>{deliverie.role.name}</td>
            <td>{deliverie.number}</td>
            <td>{deliverie.password} </td>
            <td>
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
