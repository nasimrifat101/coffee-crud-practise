import Swal from 'sweetalert2'
import Nav from './nav';

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const product = { name, quantity, supplier, taste, category, details, photo };

    console.log(product);

    fetch("https://coffee-store-server-i9c45ds10-nasimrifat101.vercel.app/coffee", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then(res=> res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'Coffee added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          }).then(()=>{
            form.reset();
          })
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <Nav></Nav>
      <h1 className="text-5xl text-black font-bold">Add a coffee</h1>
      <form onSubmit={handleAddCoffee}>
        <div className="flex space-x-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Coffee name"
              className="input input-bordered w-full max-w-xs text-black"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Available quantity"
              className="input input-bordered w-full max-w-xs text-black"
            />
          </div>
        </div>
        {/* hfwygfwy */}
        <div className="flex space-x-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Supplier name"
              className="input input-bordered w-full max-w-xs text-black"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Describe test"
              className="input input-bordered w-full max-w-xs text-black"
            />
          </div>
        </div>
        {/* hfwygfwy */}
        <div className="flex space-x-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Coffee category"
              className="input input-bordered w-full max-w-xs text-black"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Write details"
              className="input input-bordered w-full max-w-xs text-black"
            />
          </div>
        </div>
        {/* hfwygfwy */}
        <div className="flex space-x-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo Url"
              className="input input-bordered w-full text-black"
            />
          </div>
        </div>
        {/* btn */}
        <div>
          <input
            type="submit"
            value="Add Coffee"
            className="btn btn-accent mt-5 w-full"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
