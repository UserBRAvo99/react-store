import { styled } from "styled-components";
import { StyledButton } from "../../styles/Global";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreProvider";

export const Pagination = () => {
  const { changePage, skip } = useContext(StoreContext);
  return (
    <Paginate>
      <StyledButton
        disabled={Number(skip) <= 0 ? true : false}
        skip={skip}
        onClick={() => changePage("prev")}
      >
        Prev Page
      </StyledButton>
      <StyledButton onClick={() => changePage("next")}>Next Page</StyledButton>
    </Paginate>
  );
};

const Paginate = styled.nav`
  display: flex;
  padding: 20px 0;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
