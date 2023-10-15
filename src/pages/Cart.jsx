import { styled } from "styled-components";
import { CartItem } from "../components/CartItem/CartItem";

export const Cart = ({ cart }) => {
  return (
    <>
      <TotalPrice>Total Price: {0}$</TotalPrice>
      <CartList>
        <hr />
        {cart.map((product) => (
          <CartItem {...product} key={product.id} />
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
