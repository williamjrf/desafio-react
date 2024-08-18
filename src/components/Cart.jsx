import React, { useState } from "react";
import pizzaCart from "./pizzaCart";

const Cart = () => {
  
  // Inicializar el estado del carrito
  const [cart, setCart] = useState(pizzaCart.filter((pizza) => pizza.counter > 0));

  const handleIncrement = (id) => {
    setCart(prevCart => {
      // Incrementar el contador de la pizza correspondiente
      const updatedCart = prevCart.map(pizza =>
        pizza.id === id
          ? { ...pizza, counter: pizza.counter + 1 }
          : pizza
      );
      // Filtrar pizzas con counter > 0 y retornar el nuevo estado
      return updatedCart.filter(pizza => pizza.counter > 0);
    });
  };

  // Función para manejar el descuento de la cantidad
  const handleDecrement = (id) => {
    setCart(prevCart => {
      // Decrementar el contador de la pizza correspondiente
      const updatedCart = prevCart.map(pizza =>
        pizza.id === id && pizza.counter > 0
          ? { ...pizza, counter: pizza.counter - 1 }
          : pizza
      );
      // Filtrar pizzas con counter > 0 y retornar el nuevo estado
      return updatedCart.filter(pizza => pizza.counter > 0);
    });
  };


  // Calcular el total a pagar
  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.counter, 0);

  return (
    <div className="container text-center mt-4 mb-4 p-4">
      <div className="row align-items-center mt-4">
        <div className="col align-self-center">
          <h3>Shopping Cart</h3>

          {cart.map((pizza) => (
            <div key={pizza.id} className="row">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src={pizza.img}
                      className="img-fluid rounded-start"
                      alt={pizza.name}
                    />
                  </div>
                  <div className="col-md-3 align-self-center">
                    <div className="card-body">
                      <h5 className="card-title">{pizza.name}</h5>
                      <p className="card-text text-muted text-truncate">
                        {pizza.desc}
                      </p>
                      
                      <p className="card-text">
                        {pizza.ingredients.join(", ")}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Valor Unitario{" "}
                          <strong>
                            {pizza.price.toLocaleString("es-CL")}
                          </strong>
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col align-self-center">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      <button type="button" className="btn btn-danger" onClick={() => handleDecrement(pizza.id)}>
                        -
                      </button>
                      <input
                        type="text"
                        value={pizza.counter}
                        className="inputCantidad"
                        disabled
                      />
                      <button type="button" className="btn btn-success" onClick={() => handleIncrement(pizza.id)}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-md-3 col align-self-center">
                    <p className="card-text">
                      <small className="text-muted">
                        <strong>
                          {(pizza.price * pizza.counter).toLocaleString("es-CL")}
                        </strong>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row align-items-center mt-4 mb-4">
        <div className="col align-self-center">
          <h4>Total a pagar: <strong>{total.toLocaleString("es-CL")}</strong></h4>
          <button className="btn btn-info">Pagar</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
