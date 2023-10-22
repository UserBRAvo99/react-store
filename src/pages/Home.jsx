import { ProductList } from "../components/ProductList/ProductList";
import { Pagination } from "../components/Pagination/Pagination";
import { useContext } from "react";
import { StoreContext } from "../context/StoreProvider";
import { Modal } from "../components/Modal/Modal";

export const Home = () => {
  const { isOpenModal, modalButtonClose, modalHandleClick, content } =
    useContext(StoreContext);
  return (
    <>
      <ProductList />
      <Pagination />
      {isOpenModal && (
        <Modal
          modalButtonClose={modalButtonClose}
          modalHandleClick={modalHandleClick}
        >
          <img width={200} src={content.thumbnail} alt={content.title} />
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </Modal>
      )}
    </>
  );
};
