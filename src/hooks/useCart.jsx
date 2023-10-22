import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const total = cart.reduce((total, item) => total + item.price * item.qty, 0);
  const addToCart = (product) => {
    const isExist = cart.findIndex((item) => item.id === product.id);
    if (isExist !== -1) {
      alert("Elem is exist");
      return;
    }
    setCart((prev) => [...prev, { ...product, qty: 1 }]);
  };
  const removeFromCart = (product) => {
    let result = cart.filter((el) => el.id !== product.id);
    setCart(result);
  };

  const qtyChanger = ({ product, type }) => {
    if (type === "plus") {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };

  return { addToCart, removeFromCart, cart, qtyChanger, total };
};
