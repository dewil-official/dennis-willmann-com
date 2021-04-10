import React, { Dispatch, SetStateAction } from "react";
import { Cross as HamburgerButton } from "hamburger-react";

export default function Hamburger(props: {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className="h-16 w-16 hover:bg-gray-200 cursor-pointer flex flex-row justify-center items-center rounded"
      onClick={toggle}
    >
      <HamburgerButton
        size={20}
        toggled={props.isOpen}
        toggle={props.setOpen}
        direction="left"
        label="Show menu"
      />
    </div>
  );

  function toggle() {
    props.setOpen(!props.isOpen);
  }
}
