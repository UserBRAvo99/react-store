import { styled } from "styled-components";
import { StyledButton } from "../../styles/Global";
import { CounterCart } from "../counterCart/CounterCart";
export const CartItem = ({ product, removeFromCart }) => {
  const { title, price, thumbnail, id } = product;
  return (
    <ItemCard id={id}>
      <img alt={title} src={thumbnail} />
      <span>{title}</span>
      <span>{price}$</span>
      <CounterCart product={product} />
      <StyledButton onClick={() => removeFromCart(product)}>
        Delete
      </StyledButton>
    </ItemCard>
  );
};
export const ItemCard = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  border: 2px solid gray;
  padding: 10px 20px;
  border-radius: 8px;

  & img {
    width: 100px;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
`;
