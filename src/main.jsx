import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayerOutlet from './Components/Outlet/LayerOutlet.jsx';
import ErrorPage from './Components/SharedPages/ErrorPage';
import Home from './Components/HomePage/Home.jsx';
import FullMenu from './Components/FullMenu/FullMenu.jsx';
import Contact from './Components/Contact/Contact.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import { HelmetProvider } from 'react-helmet-async';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LayerOutlet />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <FullMenu />
      },
      {
        path: '/contact',
        element: <Contact />
      }
      ,
      {
        path: '/about-us',
        element: <AboutUs />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HelmetProvider>
      <RouterProvider router={router} />


    </HelmetProvider>
  </React.StrictMode>,
)
