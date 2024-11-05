import React, { FC } from "react";
import { EventType } from "@Src/main";
import "./Modal.css";

type ModalProps = {
  children?: React.ReactNode;
  visible: boolean;
};

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <div className="Modal__container">
      <div className="Modal__content">{children}</div>
    </div>
  );
};

export default Modal;
