import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Home from './components/Home/Home.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Productos from './components/Productos/Productos';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <h1>Lo siento no encontre la ruta</h1>,
    children: [
      {
        path: '/',
        element: <Productos/>
      },
      {
        path: '/pantallas',
        element: <h2>Pantallas </h2>
      }
    ]

  },
  {
    path: '/about',
    element: <h1>About us</h1>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
