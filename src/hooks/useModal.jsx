import { useCallback, useState } from "react";
import { useEffect } from "react";

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [content, setContent] = useState();
  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpenModal]);
  const modalButtonClose = useCallback((e) => {
    console.log(e);
    if (e.key === "Escape") {
      toggleModal();
    }
  }, []);
  useEffect(() => {
    if (isOpenModal) window.addEventListener("keydown", modalButtonClose);
    return () => {
      window.removeEventListener("keydown", modalButtonClose);
    };
  }, [isOpenModal, modalButtonClose]);

  const toggleModal = () => {
    return setIsOpenModal((prev) => !prev);
  };
  const openModal = (product) => {
    setContent(product);
    toggleModal();
  };

  const modalHandleClick = (e) => {
    if (e.target === e.currentTarget) toggleModal();
  };

  return {
    modalButtonClose,
    openModal,
    content,
    modalHandleClick,
    isOpenModal,
    toggleModal,
  };
};
