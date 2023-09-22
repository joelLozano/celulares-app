import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './components/menu/Menu.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Productos from './components/Productos/Productos.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu/>
    <Productos />
  </React.StrictMode>,
)
