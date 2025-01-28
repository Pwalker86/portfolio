import React, { FC } from "react";
import "./Modal.css";

type ModalProps = {
  children?: React.ReactNode;
  visible: boolean;
};

// Making this as simple as possible right now. In the future there could be a use case for something more complex, like a Modal.Header, Modal.Body, Modal.Footer, etc. For now I'm leaving it simple and flexible
const Modal: FC<ModalProps> = ({ children, visible }) => {
  return (
    <>
      <div className={`Modal__container ${visible ? "" : "Modal__hidden"}`}>
        <div className="Modal__content">{children}</div>
      </div>
    </>
  );
};

// Decided to export as a separate component for now. Gives more flexibility to the user to decide if they want an overlay or not.
//
export const Overlay: FC<{ visible: boolean; clickHandler?: Function }> = ({
  visible,
  clickHandler = () => {},
}) => {
  return (
    <div
      className={`Modal__overlay ${visible ? "" : "Modal__hidden"}`}
      onClick={() => clickHandler()}
    />
  );
};

export default Modal;
