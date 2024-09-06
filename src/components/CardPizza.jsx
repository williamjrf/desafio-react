import { React, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const CardPizza = (props) => {


  let { id } = useParams();
  if (id == undefined) {
    id = props.id;
  }

  const [pizza, setPizza] = useState([]);
  const { addToCart, inCart } = useContext(CartContext);

  const getPizzaById = async () => {

    const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
    const data = await response.json();

    setPizza(data);
  };

  useEffect(() => {
    getPizzaById();
  }, []);

  return (
    <div>
      <div className="card">
        <img src={pizza.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
          <hr />
          <p className="card-text text-center text-muted"><small>{pizza.desc}</small></p>
          <p className="card-text text-center">Ingredientes:</p>
          <div className="card-text text-center">

            {pizza?.ingredients?.length > 0 &&
              <ul>
                {pizza?.ingredients?.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            }
          </div>
          <hr />
          <div className="row">
            <h3 className="text-center">
              Precio: $ {pizza.price?.toLocaleString("es-CL")}
            </h3>
          </div>
          <div className="row">
            <button className="btn btn-outline-primary" type="button" onClick={() => { addToCart(pizza) }} >
              <i className="fa fa-shopping-cart" /> &nbsp; Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
