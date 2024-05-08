//import React from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer"; // assuming you have a Footer component
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../contact/Contact";
import Github from "../Github/Github";

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // use the layout component here
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "github",
        element: <Github/>
      }
    ]
  }
]);

export default function Navbar() {
  return <RouterProvider router={router} />;
}