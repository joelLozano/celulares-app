import React, {useEffect, useState} from 'react'
import Card from '../card/Card'

export default function Productos() {
    const [productos, setProductos] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
        fetch('https://api-pelis-back.onrender.com/celulares')
        .then(response => response.json())
        .then(data => {
            setProductos(data)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <h1>Cargando...</h1>
    } else {
        return (
            <>
            <section className='celulares'>
            {
              productos.celulares.map((item, index) => {
                return  <Card item={item} key={index} />
              })
            }
           </section>
            </>
         )
    }
}
