import { FC } from "react";
import Button from "@Components/Button";
import "./ButtonDemo.css";

const ButtonDemo: FC = () => {
  return (
    <div className="ButtonDemo__container">
      <Button>Default</Button>
      <Button onClick={() => alert("Good job!")}>Click Me!</Button>
      <Button color="primary">Primary</Button>
      <Button corners="square" color="secondary">
        Secondary
      </Button>
      <Button color="transparent">transparent</Button>
      <Button corners="rounded">Rounded</Button>
      <Button corners="square">Square</Button>
      <Button corners="rounded-square">Rounded Square</Button>
      <Button size="tiny">★</Button>
      <Button corners="rounded-square" size="small">
        Small
      </Button>
      <Button corners="rounded-square" size="medium">
        Medium
      </Button>
      <Button corners="rounded-square" size="large">
        Large
      </Button>
    </div>
  );
};

export default ButtonDemo;
