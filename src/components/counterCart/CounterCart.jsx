import { useContext } from "react";
import { StoreContext } from "../../context/StoreProvider";

export const CounterCart = ({ product }) => {
  const { qtyChanger } = useContext(StoreContext);
  return (
    <div>
      <button onClick={() => qtyChanger({ type: "minus", product })}>-</button>
      <span>{product.qty}</span>
      <button onClick={() => qtyChanger({ type: "plus", product })}>+</button>
    </div>
  );
};
