import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AuthProvider from "./authProvider/AuthProvider";
import Users from "./components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("https://coffee-store-server-i9c45ds10-nasimrifat101.vercel.app/coffee"),
  },
  {
    path: "/addcoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch("https://coffee-store-server-i9c45ds10-nasimrifat101.vercel.app/users"),
  },
  {
    path: "/updatecoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffee-store-server-i9c45ds10-nasimrifat101.vercel.app/coffee/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
