import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import SingleCard from "./components/SingleCard.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Create from "./components/Create.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/create", element: <Create /> },
      { path: "/rooms", element: <SingleCard /> },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
    ],
    errorElement: <div>error bro</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
