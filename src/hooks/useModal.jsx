import { useState } from "react";
import { useEffect } from "react";

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [content, setContent] = useState();
  const toggleModal = () => {
    return setIsOpenModal((prev) => !prev);
  };
  const openModal = (product) => {
    setContent(product);
    toggleModal();
    scrollStop();
  };

  const scrollStop = (value) => {
    if (!value) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "scroll";
  };
  const modalButtonClose = (e) => {
    if (e.key === "Escape") {
      scrollStop(isOpenModal);
      toggleModal();
    }
  };

  const modalHandleClick = (e) => {
    if (
      e.target.id === "modalBtnClose" ||
      e.target.id === "modalWrapper" ||
      e.target.id === "modalBtnOpen"
    )
      toggleModal();
    scrollStop(isOpenModal);
  };
  useEffect(() => {
    if (isOpenModal) window.addEventListener("keydown", modalButtonClose);
    return () => {
      window.removeEventListener("keydown", modalButtonClose);
    };
  });

  return {
    modalButtonClose,
    openModal,
    content,
    modalHandleClick,
    isOpenModal,
    toggleModal,
  };
};
