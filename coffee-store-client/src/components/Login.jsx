/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./nav";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext);

  
  
  const hadnleLogIn = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);

    signIn(email, password)
    .then(res=>{
      console.log(res.user)
      const user ={email,
      lastLoggedAt: res.user?.metadata?.lastSignInTime
      }


      fetch('https://coffee-store-server-i9c45ds10-nasimrifat101.vercel.app/users',{
        method: 'PUT',
        headers:{
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res=> res.json())
      .then(data=> console.log(data))


    })
    .catch(error=> console.log(error))

  };

  return (
    <div>
      <Nav></Nav>
      <div>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="grid h-fit card rounded-box place-items-center">
            <div className="">
              <div className="hero-content flex-col">
                <div className="card lg:w-[500px] max-w-xl border border-black bg-base-100">
                  <h1 className="text-2xl px-8 pt-10 font-bold">Login</h1>
                  <form onSubmit={hadnleLogIn} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="email"
                        name="email"
                        className="input input-bordered font-sans"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="password"
                        name="password"
                        className="input input-bordered font-sans"
                        required
                      />
                      <div className="flex justify-between mt-2 text-sm">
                        <div className="flex items-center space-x-2 hidden lg:block">
                          <input
                            type="checkbox"
                            name="checkbox"
                            id="remember-me"
                          />
                          <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <div className="text-yellow-400 font-bold">
                          <Link> Forgot Password?</Link>
                        </div>
                      </div>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn bg-yellow-400">Login</button>
                    </div>
                    <p className="text-center text-sm">
                      Don't Have An Account?
                      <span className="text-yellow-400 underline ml-2 font-medium">
                        <Link to="/signup">Register</Link>
                      </span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="divider">OR</div>
          <div className="grid h-fit card rounded-box place-items-center">
            <div className="space-y-3 flex flex-col mb-10">
              <button
                className="btn btn-outline rounded-full lg:w-96"
             
              >
                <BsGoogle className="text-xl"></BsGoogle>Continue With Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;