import { styled } from "styled-components";
import { StyledButton } from "../../styles/Global";

export const Pagination = ({ changePage }) => {
  return (
    <Paginate>
      <StyledButton onClick={() => changePage("prev")}>Prev Page</StyledButton>
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
