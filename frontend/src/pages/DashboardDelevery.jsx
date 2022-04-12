import React from 'react';

const DashboardDelevery = () => {
  const [user, setUser] = useState([])

    const fetchData = ()=>{
        axios
            .get('http://localhost:9988/auth/signup')
            .then(response =>{
            setRooms(response.data)
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
      <h1 className="text-center">Delevery Men</h1>

      <div class="container h-100" >

      <div class="row justify-content-center h-100">
      <div class="col-md-8">
      <button type="button" class="btn btn-outline-success">Add Delevery man</button>
      <br/>
      <br/>
            <table class="table table-striped table-dark table-hover" >
        <thead class="thead-dark">
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>
              <a className="btn btn-outline-primary">Edit</a>
              <a className="btn btn-outline-danger">Delete</a>
            </td>
          </tr>
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
