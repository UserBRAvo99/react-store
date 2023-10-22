import { styled } from "styled-components";
import { CartItem } from "../components/CartItem/CartItem";
import { useContext } from "react";
import { StoreContext } from "../context/StoreProvider";

export const Cart = () => {
  const { cart, removeFromCart, total } = useContext(StoreContext);

  return (
    <>
      <TotalPrice>Total Price: {total}$</TotalPrice>
      <CartList>
        <hr />
        {cart.map((product) => (
          <CartItem
            product={product}
            key={product.id}
            removeFromCart={removeFromCart}
          />
        ))}
      </CartList>
    </>
  );
};

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  max-height: 400px;
  overflow: hidden;
`;

export const TotalPrice = styled.h1`
  text-align: center;
`;
