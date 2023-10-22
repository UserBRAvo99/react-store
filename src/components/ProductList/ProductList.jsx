import { styled } from "styled-components";
import { Card } from "../Card/Card";
import { LimitProducts } from "../LimitProductsOnPage/LimitProducts";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreProvider";

export const ProductList = () => {
  const { dataProducts } = useContext(StoreContext);
  return (
    <>
      <LimitProducts />
      <StyledList>
        {dataProducts.map((product) => (
          <Card key={product.id} product={product} />
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
