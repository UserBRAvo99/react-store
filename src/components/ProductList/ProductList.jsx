import { styled } from "styled-components";
import { Card } from "../Card/Card";
import { LimitProducts } from "../LimitProductsOnPage/LimitProducts";

export const ProductList = ({ data, addToCart, changeLimit }) => {
  return (
    <>
      <LimitProducts changeLimit={changeLimit} />
      <StyledList>
        {data.map((product) => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </StyledList>
    </>
  );
};

export const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 90vw;
  padding: 30px 0;
`;
