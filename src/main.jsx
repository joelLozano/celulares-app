import React from 'react'
import ReactDOM from 'react-dom/client'
import Card  from './components/card/Card.jsx'
import Menu from './components/menu/Menu.jsx'
import './index.css'

const celulares = [
  {
    title: 'iphone 15',
    description: 'Nuevo iphone super bonito y super caro',
    price: '$25000',
  },
  {
    title: 'Xiomi',
    description: 'Nuevo Xiomi super bonito y super caro',
    price: '$5000',
  },
  {
    title: 'Galaxi 9',
    description: 'Nuevo Galaxi super bonito y super caro',
    price: '$15000',
  }
]


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu/>
   <section className='celulares'>
    {
      celulares.map((item, index) => {
        return  <Card item={item} key={index} />
      })
    }

   </section>

   <Menu/>
  </React.StrictMode>,
)
