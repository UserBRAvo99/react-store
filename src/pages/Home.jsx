import { ProductList } from "../components/ProductList/ProductList";
import { Header } from "../components/Header/Header";
import { Pagination } from "../components/Pagination/Pagination";
import { fetchProducts } from "../service/api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Cart } from "./Cart";
import { Modal } from "../components/Modal/Modal";

// 1. Додати видалення з корзини
// 2. Додати модалку
// 3. Підрахунок тотал в корзинці
// 4. Додаит селект з кількосю елементів
//5 . Додати стиль для дісейблед кнопок
//6. Почати робити роути

export const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [limit, setLimit] = useState(4);
  const [skip, setSkip] = useState(0);
  const [cart, setCart] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const changePage = (option) => {
    if (option === "next") {
      setSkip(skip + limit);
    }
    if (option === "prev" && skip > 0) {
      setSkip(skip - limit);
    }
  };
  const addToCart = (product) => {
    // Щось пішло не так
    cart.map((e) => {
      if (Number(e.id) === Number(product.id)) {
        return console.log(true);
      }
    });
    setCart((prev) => [...prev, product]);
  };
  const removeFromCart = (product) => {
    let result = cart.filter((el) => el.id !== product.id);
    setCart(result);
  };
  const changeLimit = (e) => {
    setLimit(e.target.value);
  };
  const toggleModal = (open) => {
    return setIsOpenModal(!open);
  };
  const modalHandleClick = () => {
    toggleModal(isOpenModal);
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
  return (
    <>
      <Header />
      <ProductList
        isOpenModal={modalHandleClick}
        data={dataProducts}
        addToCart={addToCart}
        changeLimit={changeLimit}
      />
      <Pagination changePage={changePage} skip={skip} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <Modal isOpenModal={isOpenModal} modalHandleClick={modalHandleClick}>
        <div></div>
      </Modal>
    </>
  );
};
