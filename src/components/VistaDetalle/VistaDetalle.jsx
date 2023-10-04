import React from 'react'
import { useLocation } from 'react-router-dom'

export default function VistaDetalle() {
    const location = useLocation();
    let item = location.state
    console.log(item)
  return (
    <>
    <h2>{item.title}</h2>
    <p>{item.description}</p>
    {/* <h1>{item.title}</h1> */}
    </>
  )
}
