import { useEffect } from "react";
import { createContext, useState } from "react";
import { fetchProducts } from "../service/api";
import { toast } from "react-toastify";
import { useModal } from "../hooks/useModal";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [dataProducts, setDataProducts] = useState([]);
  const [limit, setLimit] = useState(4);
  const [skip, setSkip] = useState(0);
  const [cart, setCart] = useState([]);
  const {
    modalButtonClose,
    modalHandleClick,
    isOpenModal,
    toggleModal,
    openModal,
    content,
  } = useModal();
  const changePage = (option) => {
    if (option === "next") {
      setSkip(skip + limit);
    }
    if (option === "prev" && skip > 0) {
      setSkip(skip - limit);
    }
  };
  const addToCart = (product) => {
    const isExist = cart.findIndex((item) => item.id === product.id);
    if (isExist !== -1) {
      alert("Elem is exist");
      return;
    }
    setCart((prev) => [...prev, product]);
  };
  const removeFromCart = (product) => {
    let result = cart.filter((el) => el.id !== product.id);
    setCart(result);
  };
  const changeLimit = (e) => {
    setLimit(e.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchProducts({ limit, skip });
        setDataProducts(data.products);
      } catch (error) {
        toast.error("error");
      }
    };
    getData();
  }, [limit, skip]);

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
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
