import { FC, useState, ReactNode } from "react";
import "./Accordian.css";

type AccordianProps = {
  headerText: string;
  content: string;
  children?: ReactNode;
};

const Accordian: FC<AccordianProps> = ({ headerText, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="Accordian__header" onClick={toggleOpen}>
        {headerText}
        <span className="material-icons Accordian__openIndicator">
          arrow_drop_down
        </span>
      </div>
      <div
        className={`Accordian__content ${isOpen ? "Accordian__content--open" : ""}`}
      >
        {children}
      </div>
    </>
  );
};

export default Accordian;
