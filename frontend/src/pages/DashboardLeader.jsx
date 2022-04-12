import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../components/api";

const DashboardLeader = (props) => {

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

  const deleteUser = async (id) => {
    console.log(id)
    await api.delete(`api/delete-leader/${id}`)
    const newList = leaders.filter((leader)=> {
      return leader.id !== id
    })
    setLeaders(newList)
  }

  useEffect(()=>{
      fetchData()
  },[])

  return (
    <>
      
      <div className="container">
      <h1 className="text-center">Leaders</h1>
     
      <div className="container h-100" >

      <div className="row justify-content-center h-100">
      <div className="col-md-12">
      <button type="button" className="btn btn-outline-success">Add leader</button>
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
            <th scope="row"> {leader.id} </th>
            <td> {leader.name} </td>
            <td>{leader.email}</td>
            <td>{leader.adress}</td>
            <td>{leader.number}</td>
            <td>{leader.password} </td>
            <td>
              <a className="btn btn-outline-danger" onClick={() => deleteUser(leader._id)}>Delete</a>
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
