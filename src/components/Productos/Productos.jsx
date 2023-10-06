import React, {useEffect, useState} from 'react'
import Card from '../card/Card'
import { Link } from 'react-router-dom'
import './Productos.css'

export default function Productos() {
    const [productos, setProductos] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [searchState, setSearchState] = useState('')
    const [productosFilterState, setProductosFilterState] = useState()

    useEffect(() =>{
        fetch('https://api-pelis-back.onrender.com/celulares')
        .then(response => response.json())
        .then(data => {
            setProductos(data)
            setProductosFilterState(data.celulares)
            setIsLoading(false)
        })
    }, [])


    const handlerSearch = (event) => {
        setSearchState(event.target.value)
        if (!event.target.value){
            setProductosFilterState(productos.celulares)
        } else {
            let productoFilter = productos.celulares.filter(item => item.title.toLowerCase().includes(searchState.toLowerCase()))
            setProductosFilterState(productoFilter)
        }
        
    }

    if (isLoading) {
        return <h1>Cargando...</h1>
    } else {
        return (
            <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col text-center">
                        <input onChange={handlerSearch} type="text" placeholder='buscar producto' />
                    </div>
                </div>
            </div>
           
           <div className="container">
            <div className="row">
            {productosFilterState.map((item, index) => {
                return  (
                 <div className="col mt-2 mb-4 itemsCol"  key={index}>
                    <Link to={`/celulares/${item.title}`} state={item}>
                    <Card item={item} key={index} />
                </Link>
                 </div>
                )
              })
            }
            </div>
           </div>
            </>
         )
    }
}
