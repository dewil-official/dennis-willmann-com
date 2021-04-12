import React, { Dispatch, SetStateAction } from "react";
import Hamburger from "../clickable/Hamburger";
import Container from "./Container";
import { useRouter } from "next/router";

export default function Navbar(props: {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();

  const logoClick = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="fixed w-full h-24 bg-white bg-opacity-50 backdrop-filter backdrop-blur-md">
      <Container className="flex flex-row items-center justify-between h-full">
        <div
          className="font-semibold cursor-pointer select-none"
          onClick={logoClick}
        >
          Dennis Willmann
        </div>
        <Hamburger isOpen={props.isOpen} setOpen={props.setOpen} />
      </Container>
    </div>
  );
}
