import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./Card.css";
import { Link } from "react-router-dom";

function Card(props) {
  // Un estado se crea coin base a una constante y teniendo un valor inicial
  var [counter, setCounter] = useState(0);
  // el counter es el valor que se va a modificar, (es una variable)
  // el setCounter es la funcion que se va a encargar de modificar el valor de counter
  var [like, setLike] = useState(false);

  let handlerCounter2 = () => {
    setCounter(counter + 1);
  };

  let handlerLike = () => {
    setLike(!like)
  }
  return (
    <>
      <div className="card-style">
        <img src={props.item.image} alt=""/>
      
            <div className="d-flex">
              <h2>{props.item.title}</h2>
              {like ? <FaHeart onClick={handlerLike}></FaHeart> : <FaRegHeart onClick={handlerLike}></FaRegHeart> }
            </div>

          <p>{props.item.description}</p>
          <p>
            <strong>{props.item.price}</strong>
          </p>
          {/* <h4>contador :D : {counter}</h4> */}
          {/* <button
            type="button"
            className="btn btn-primary"
            onClick={handlerCounter2}
          >
            push me
          </button> */}

            {/* <Link to={`/celulares/${props.item.title}`} state={props.item}>  Ver detalle</Link> */}
      </div>
    </>
  );
}

export default Card;

// State - estados en react-


// Un operador ternario es una forma de hacer un if else en una sola linea
// (edad > 18) ? console.log('eres mayor de edad') : console.log('eres menor de edad')


// operador de negacion (!) - niega el valor de una variable

// true = true 
// !true = false 
// !false = true