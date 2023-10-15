/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Nav from "./nav";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const updateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedProduct = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(updatedProduct);

    fetch(`https://coffee-store-server-i9c45ds10-nasimrifat101.vercel.app/coffee/${_id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          }).then(() => {
            form.reset();
          });
        }
      });
  };

  return (
    <div>
        <Nav></Nav>
      <div className="bg-[#F4F3F0] p-24">
        <h1 className="text-5xl text-black font-bold mb-5">Update coffee</h1>
        <form onSubmit={updateCoffee}>
          <div className="flex space-x-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">New Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder={name}
                className="input input-bordered w-full max-w-xs text-black"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">New Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder={quantity}
                className="input input-bordered w-full max-w-xs text-black"
              />
            </div>
          </div>
          {/* hfwygfwy */}
          <div className="flex space-x-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">New Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder={supplier}
                className="input input-bordered w-full max-w-xs text-black"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">New Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder={taste}
                className="input input-bordered w-full max-w-xs text-black"
              />
            </div>
          </div>
          {/* hfwygfwy */}
          <div className="flex space-x-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">New Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder={category}
                className="input input-bordered w-full max-w-xs text-black"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">New Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder={details}
                className="input input-bordered w-full max-w-xs text-black"
              />
            </div>
          </div>
          {/* hfwygfwy */}
          <div className="flex space-x-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">New Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder={photo}
                className="input input-bordered w-full text-black"
              />
            </div>
          </div>
          {/* btn */}
          <div>
            <input
              type="submit"
              value="Update Coffee"
              className="btn btn-accent mt-5 w-full"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
