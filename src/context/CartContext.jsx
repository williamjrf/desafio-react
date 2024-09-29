import React, { useContext, useState } from "react";
export const CartContext = React.createContext();
import { UserContext } from "./UserContext";
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { token } = useContext(UserContext);

  const addToCart = (item) => {
    if (cart?.some((i) => i.id === item.id)) {
      console.log("ya existe");
    } else {
      setCart([...cart, { item, counter: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    console.log("clear");
    setCart([]);
  };

  const inCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const incrementPizza = (id) => {
    setCart(
      cart.map((itemPizza) =>
        itemPizza.item.id === id
          ? { ...itemPizza, counter: itemPizza.counter + 1 }
          : itemPizza
      )
    );
  };

  const decrementPizza = (id) => {
    let item = cart.find((itemPizza) => itemPizza.item.id === id);
    if (item.counter === 1) {
      setCart(cart.filter((itemPizza) => itemPizza.item.id !== id));
      return;
    } else {
      setCart(
        cart.map((itemPizza) =>
          itemPizza.item.id === id && itemPizza.counter > 0
            ? { ...itemPizza, counter: itemPizza.counter - 1 }
            : itemPizza
        )
      );
    }
  };

  const sendCart = async () => {
    console.log("paso por sendCart");
    const response = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        cart: cart,
      }),
    });
    const responseSendCart = await response.json();
    console.log("responseSendCart", responseSendCart);
    console.log("statuscode", response.status);

    if (response.status == 200) {
      clearCart();
      alert("Su compra se ha realizado con exito")
    } else {
      console.log("error al enviar el carrito", responseSendCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        inCart,
        incrementPizza,
        decrementPizza,
        sendCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
