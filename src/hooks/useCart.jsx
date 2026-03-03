import React, { useEffect, useState } from "react";
import { db } from "../data/db.js";

const useCart = () => {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");

    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };
  const data = db;

  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const eliminarItem = (id) => {
    const updateItem = cart.filter((item) => item.id !== id);
    setCart(updateItem);
  };

  const handleClickAgregar = (item) => {
    const itemExist = cart.findIndex((auto) => auto.id === item.id);


    if (itemExist >= 0) {
      const updateCart = [...cart];
      updateCart[itemExist].quantity++;
      setCart(updateCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  };

  const restarItem = (id) => {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  };

  const sumarItem = (id) => {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity < 10) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  };

  const emptyCart = () => {
    setCart([]);
    console.log("Vaciar carro...");
  };

  const totalItem = cart?.reduce((total, { quantity, price }) => {
    return total + quantity * price;
  }, 0);

  return {
    data,
    cart,
    eliminarItem,
    handleClickAgregar,
    restarItem,
    sumarItem,
    emptyCart,
    totalItem
  };
};

export default useCart;
