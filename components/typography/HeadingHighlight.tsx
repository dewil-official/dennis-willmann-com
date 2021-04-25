import React, { ReactNode } from "react";
import styled from "styled-components";

const FullUnderline = styled.span`
  text-decoration-skip-ink: none;
  text-decoration-skip: none;
`;

export default function HeadingHighlight(props: { children: ReactNode }) {
  return (
    <>
      <FullUnderline className="underline underline-yellow underline-offset-h1 underline-thickness-h1">
        {props.children}
      </FullUnderline>
    </>
  );
}
