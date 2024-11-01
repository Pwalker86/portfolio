import Button from "../../components/Button";
import React, { FC } from "react";

const ButtonDemo: FC = () => {
  return (
    <>
      <Button>Default</Button>
      <Button onClick={() => alert("Good job!")}>Click Me!</Button>
      <Button color="primary">Primary</Button>
      <Button corners="square" color="secondary">
        Secondary
      </Button>
      <Button corners="rounded-square">Rounded Square</Button>
      <Button color="transparent">transparent</Button>
    </>
  );
};

export default ButtonDemo;
