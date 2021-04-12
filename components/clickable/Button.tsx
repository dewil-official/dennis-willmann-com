import { useState } from "react";
import styled from "styled-components";

interface ButtonProps {
  label: string;
  classes: string;
}

const StyledButton = styled.button`
  :focus {
    box-shadow: 0 0 0 3px hsl(216, 100%, 50%, 40%);
    outline: none;
  }
`;

export default function Button(props: ButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <StyledButton
      className={`rounded px-8 py-2 font-medium select-none outline-none transition-transform transform duration-75 ease-in ${
        props.classes
      } ${isAnimating ? "scale-95" : ""}`}
      onMouseDown={() => {
        setIsAnimating(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 75);
      }}
    >
      {props.label}
    </StyledButton>
  );
}
