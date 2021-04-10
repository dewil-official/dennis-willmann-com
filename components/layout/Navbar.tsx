import React, { Dispatch, SetStateAction } from "react";
import Hamburger from "../clickable/Hamburger";
import Container from "./Container";

export default function Navbar(props: {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="w-full h-24 bg-white bg-opacity-50 backdrop-filter backdrop-blur-md fixed">
      <Container className="flex flex-row items-center justify-between h-full">
        <div>DennisWillmann.com</div>
        <Hamburger isOpen={props.isOpen} setOpen={props.setOpen} />
      </Container>
    </div>
  );
}
