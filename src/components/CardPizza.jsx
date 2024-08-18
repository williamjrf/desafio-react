import React from "react";

const CardPizza = (props) => {
  return (
    <div>
      <div className="card" >
        <img src={props.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <hr />
          <p className="card-text text-center text-muted">
          {props.desc}
          </p>
          <p className="card-text text-center">Ingredientes:</p>
          <div className="card-text text-center">
            {/* {props.ingredients.map(i=> i).join(', ')} */}
            <ul>
              {props.ingredients.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </div>
          <hr />
          <h3 className="text-center">
            Precio: $ {props.price.toLocaleString("es-CL")}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
