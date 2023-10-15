import { styled } from "styled-components";
import { Card } from "../Card/Card";

export const ProductList = ({ data }) => {
  return (
    <StyledList>
      {data.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </StyledList>
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
