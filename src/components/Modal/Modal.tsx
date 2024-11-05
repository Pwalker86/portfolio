import React, { FC } from "react";
import "./Modal.css";

type ModalProps = {
  children?: React.ReactNode;
};

const Modal: FC<ModalProps> = ({ children }) => {
  return <div className="Modal__container">Modal!</div>;
};

export default Modal;
