import { FC, useState } from "react";
import Button from "@Components/Button";
import Modal from "@Components/Modal";
import Accordian from "@Components/Accordian";
import { Overlay } from "@Components/Modal";
import "./ModalDemo.css";

export const ModalDemo: FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="ModalDemo__container">
      <Button onClick={() => setShowModal(true)}>Open Modal</Button>
      <div>
        <Overlay visible={showModal} clickHandler={() => setShowModal(false)} />
        <Modal visible={showModal}>
          <div className="Modal__header">
            <span
              className="ModalDemo__close"
              onClick={() => setShowModal(false)}
            >
              X
            </span>
            <h2>Events</h2>
            <Accordian headerText="Some Content">
              <Button
                className="ModalDemo__accordianButton"
                onClick={() => alert("Good job!")}
              >
                Click Me!
              </Button>
            </Accordian>
            <Button
              className="ModalDemo__closeButton"
              onClick={() => setShowModal(false)}
            >
              Close Modal
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ModalDemo;
