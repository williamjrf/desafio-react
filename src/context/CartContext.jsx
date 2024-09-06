import React, { useState } from "react";
export const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addToCart = (item) => {
        if (cart?.some((i) => i.id === item.id)) {
            console.log("ya existe");
        } else {
            setCart([...cart, { item, counter: 1 }]);
        
        }
    }

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
   
    }

    const clearCart = () => {
        console.log("clear");
        setCart([]);
    }

    const inCart = (id) => {
        return cart.some((item) => item.id === id);
    }

    const incrementPizza = (id) => {
        setCart(
            cart.map((itemPizza) =>
                itemPizza.item.id === id ? { ...itemPizza, counter: itemPizza.counter + 1 } : itemPizza
            )
        );
    };

    const decrementPizza = (id) => {
        
        let item = cart.find((itemPizza) => itemPizza.item.id === id);
        if (item.counter === 1) {
            setCart(cart.filter((itemPizza) => itemPizza.item.id !== id));
            return;
        }else{
            setCart(
                cart.map((itemPizza) =>
                    itemPizza.item.id === id && itemPizza.counter > 0
                        ? { ...itemPizza, counter: itemPizza.counter - 1 }
                        : itemPizza
                )
            );
        }
       
    }

  
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, inCart, incrementPizza, decrementPizza }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;