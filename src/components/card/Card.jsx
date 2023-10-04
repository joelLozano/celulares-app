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
        <img src="data:image/jpeg;base64,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" alt=""/>
      
            <div className="d-flex">
              <h2>{props.item.title}</h2>
              {like ? <FaHeart onClick={handlerLike}></FaHeart> : <FaRegHeart onClick={handlerLike}></FaRegHeart> }
            </div>

          <p>{props.item.description}</p>
          <p>
            <strong>{props.item.price}</strong>
          </p>
          {/* <h4>contador :D : {counter}</h4> */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={handlerCounter2}
          >
            push me
          </button>

            {/* <Link to="/detalle" state={props.item}>  Ver detalle</Link> */}
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