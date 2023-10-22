import { createContext } from "react";
import { useModal } from "../hooks/useModal";
import { useHTTP } from "../hooks/useHTTP";
import { useCart } from "../hooks/useCart";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const {
    modalButtonClose,
    modalHandleClick,
    isOpenModal,
    toggleModal,
    openModal,
    content,
  } = useModal();
  const { dataProducts, skip, changeLimit, changePage } = useHTTP();
  const { addToCart, removeFromCart, cart, qtyChanger, total } = useCart();

  const value = {
    dataProducts,
    addToCart,
    cart,
    changeLimit,
    changePage,
    skip,
    modalButtonClose,
    isOpenModal,
    modalHandleClick,
    removeFromCart,
    openModal,
    content,
    toggleModal,
    qtyChanger,
    total,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
