import { useLoaderData } from "react-router-dom";
import Nav from "./nav";
import { useState } from "react";


const Users = () => {
  const loadedUsers = useLoaderData();

  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = id =>{
    console.log(id)

    fetch(`https://coffee-store-server-i9c45ds10-nasimrifat101.vercel.app/users/${id}`,{
        method: 'delete',
    })
    .then(res=> res.json())
    .then(data =>{
        if(data.deletedCount > 0){
            console.log('Deleted Successfully');
            // remove user
            const remaining = users.filter(user => user._id !== id)
            setUsers(remaining);
        }
    })
  }


  return (
    <div>
      <Nav></Nav>
      <h1 className="text-4">users</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
          {
            users.map(user =>   <tr key={user._id}>
                <th>1</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user._id}</td>
                <button onClick={()=>handleDelete(user._id)} className="btn w-full mb-2">X</button>
              </tr>)
          }
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
