import { React, useState, useEffect } from "react";

const CardPizza = (props) => {
  console.log("cardpizza recibio este parametro: " + props.id);
  const id = props.id;

  const [pizza, setPizza] = useState([]);

  const getPizzaById = async () => {
    console.log("inicio getPizzaById");
    const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
    const data = await response.json();
    console.log(data);
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
          <p className="card-text text-center text-muted">{pizza.desc}</p>
          <p className="card-text text-center">Ingredientes:</p>
          <div className="card-text text-center">
            <ul>
         

              {pizza.ingredients?.map((i) => (
                <li>{i}</li>
              ))} 
            </ul>
          </div>
          <hr />
          <h3 className="text-center">
            Precio: $ {pizza.price?.toLocaleString("es-CL")}
          </h3>
          <h1>{id}</h1>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
