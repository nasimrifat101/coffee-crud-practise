/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleDelete = _id =>{
    console.log(_id)
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
         
          fetch(`https://coffee-store-server-i9c45ds10-nasimrifat101.vercel.app/coffee/${_id}`,{
            method: 'delete'
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.deletedCount > 0){
                Swal.fire(
                    'Deleted!',
                    'Your coffee has been deleted.',
                    'success'
                  )
                  const remaining =coffees.filter(cof=> cof._Id !== _id)
                  setCoffees(remaining)
            }
          })
        }
      })
    //   swal end

  }

  return (
    <div>
      <div className="card card-side text-black text-left shadow-xl">
        <figure>
          <img src={photo} alt={name} className="w-36" />
        </figure>
        <div className="flex justify-between w-full pt-8 px-3">
          <div>
          <h2 className="card-title">{name}</h2>
          <p>{supplier}</p>
          <p>Quantity: {quantity}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical space-y-2">
              <button className="btn">View</button>
              <Link to={`/updatecoffee/${_id}`}>
              <button className="btn">Edit</button>
              </Link>
              <button onClick={()=>handleDelete(_id)} className="btn btn-error">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
