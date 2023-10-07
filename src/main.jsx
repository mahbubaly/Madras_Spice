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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
