import React from "react";
import CardPizza from "./CardPizza";
import pizzas from "./pizzas.js";

const HomePage = () => {
  return (
    <>
      <div className="row mt-4 p-4 mb-4">
        {pizzas.map((pizza) => (
          <div className="col-3 p-4" key={pizza.id}>
            <CardPizza
              id={pizza.id}
              imagen={pizza.img}
              name={pizza.name}
              price={pizza.price}
              desc={pizza.desc}
              ingredients={pizza.ingredients}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
