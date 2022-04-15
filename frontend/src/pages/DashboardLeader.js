import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../components/api";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../services/user-service";

const DashboardLeader = (props) => {

  const navigate = useNavigate();
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
      return leader._id !== id
    })
    setLeaders(newList)
  }

  // useEffect(()=>{
  //     fetchData()
  // },[])

  useEffect(() => {
      fetchData()
      console.log('zezezae');
    UserService.getAdminBoard().then(
      (response) => {
        setLeaders(response.data);
      },
    ).catch((err)=> {
      console.log(err);
      navigate('/login')
    })
  }, []);

  return (
    <>
      
      <div className="container">
      <h1 className="text-center">Leaders</h1>
     
      <div className="container h-100">

      <div className="row justify-content-center h-100">
      <div className="col-md-12">
      
      <Link to="/add-leader">  <button type="button" className="btn btn-outline-success" >Add leader</button> </Link>
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
        {leaders.length > 0 ? (
          leaders.map((leader, i ) => (
            <tr key={i}>
            <th scope="row"> {leader.id} </th>
            <td> {leader.name} </td>
            <td>{leader.email}</td>
            <td>{leader.role.name}</td>
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
