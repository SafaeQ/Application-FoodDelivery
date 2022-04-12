import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const DashboardLeader = () => {

  const [leaders, setLeaders] = useState([]);

  const fetchData = ()=>{
    axios
        .get('http://localhost:9988/api/leaders')
        .then(response =>{
          setLeaders(response.data)
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
      
      <div class="container">
      <h1 className="text-center">Leaders</h1>
     
      <div class="container h-100" >

      <div class="row justify-content-center h-100">
      <div class="col-md-12">
      <button type="button" class="btn btn-outline-success">Add leader</button>
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
        {leaders.length > 0 ? (
          leaders.map((leader, i ) => (
            <tr key={i}>
            <th scope="row"> {leader._id} </th>
            <td> {leader.name} </td>
            <td>{leader.email}</td>
            <td>{leader.adress}</td>
            <td>{leader.number}</td>
            <td>{leader.password} </td>
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

export default DashboardLeader;
