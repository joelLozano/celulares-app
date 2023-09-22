import React, {useEffect} from 'react'
import Card from '../card/Card'

export default function Productos() {

    useEffect(() =>{
        fetch('./productos.json')
        .then(response => response.json())
        .then(data => console.log(data))
    }, [])

  return (
    <>
    <section className='celulares'>
    {/* {
      celulares.map((item, index) => {
        return  <Card item={item} key={index} />
      })
    } */}
   </section>
    </>
  )
}
