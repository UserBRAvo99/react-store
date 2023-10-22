import { ProductList } from "../components/ProductList/ProductList";
import { Header } from "../components/Header/Header";
import { Pagination } from "../components/Pagination/Pagination";
import { fetchProducts } from "../service/api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Cart } from "./Cart";
import { Modal } from "../components/Modal/Modal";
import { Route, Routes } from "react-router-dom";

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
    // cart.map((e) => {
    //   if (e.id === product.id) {
    //     return console.log(true);
    //   }
    // });
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
  const toggleModal = (open) => {
    return setIsOpenModal(!open);
  };
  const modalHandleClick = (e) => {
    if (
      e.target.id === "modalBtnClose" ||
      e.target.id === "modalWrapper" ||
      e.target.id === "modalBtnOpen"
    )
      toggleModal(isOpenModal);
    scrollStop(isOpenModal);
  };
  const modalButtonClose = (e) => {
    if (e.key === "Escape") {
      scrollStop(isOpenModal);
      toggleModal(isOpenModal);
    }
  };
  const scrollStop = (value) => {
    if (!value) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "scroll";
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

  useEffect(() => {
    if (isOpenModal) window.addEventListener("keydown", modalButtonClose);
    return () => {
      window.removeEventListener("keydown", modalButtonClose);
    };
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={
              <>
                <ProductList
                  isOpenModal={modalHandleClick}
                  data={dataProducts}
                  addToCart={addToCart}
                  changeLimit={changeLimit}
                />
                <Pagination changePage={changePage} skip={skip} />
              </>
            }
          />
          <Route
            path="cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
        </Route>
      </Routes>
      <Modal
        modalButtonClose={modalButtonClose}
        isOpenModal={isOpenModal}
        modalHandleClick={modalHandleClick}
      >
        <div></div>
      </Modal>
      {/* <Header />
      <ProductList
        isOpenModal={modalHandleClick}
        data={dataProducts}
        addToCart={addToCart}
        changeLimit={changeLimit}
      />
      <Pagination changePage={changePage} skip={skip} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <Modal
        modalButtonClose={modalButtonClose}
        isOpenModal={isOpenModal}
        modalHandleClick={modalHandleClick}
      >
        <div></div>
      </Modal> */}
    </>
  );
};
