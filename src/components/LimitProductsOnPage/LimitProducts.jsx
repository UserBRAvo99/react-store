import { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../context/StoreProvider";

export const LimitProducts = () => {
  const { changeLimit } = useContext(StoreContext);
  return (
    <Wrapper>
      <Select onChange={changeLimit}>
        <Option autoFocus value="4">
          4
        </Option>
        <Option value="8">8</Option>
        <Option value="16">16</Option>
      </Select>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 0;
`;
const Select = styled.select`
  padding: 5px 10px;
  color: black;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    border: solid 1px green;
    background-color: rgba(0, 128, 0, 0.3);
  }
`;
const Option = styled.option`
  cursor: pointer;
`;
