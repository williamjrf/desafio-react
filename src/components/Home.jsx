import React, { useEffect, useState } from "react";
import CardPizza from "./CardPizza";


const HomePage = () => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas");
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);
  return (
    <>
    <div > <img  className="imagenheader" src=".//img/banner.webp" alt="" /></div>
      <div className="row mt-4 p-4 mb-4">
        {pizzas.map((pizza) => (
          <div className="col-3 p-4" key={pizza.id}>
            <CardPizza
              id={pizza.id}
              // imagen={pizza.img}
              // name={pizza.name}
              // price={pizza.price}
              // desc={pizza.desc}
              // ingredients={pizza.ingredients}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
