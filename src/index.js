import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import Home from './pages/Home'
import PokeDetails from './pages/PokeDetails'
import HeaderLayout from './components/Header'
import Footer from './components/Footer'
import './scss/reset.css'
import './scss/app.scss'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/:id/details",
      element: <PokeDetails/>
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div id="app">
    <HeaderLayout></HeaderLayout>
    <RouterProvider router={router} />
    <Footer></Footer>
  </div>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals