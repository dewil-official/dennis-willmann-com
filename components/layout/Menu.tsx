import React from "react";

export default function Menu(props: { isOpen: boolean }) {
  return (
    <div
      className={`fixed right-0 h-full w-42 bg-white ${
        props.isOpen ? "" : "hidden"
      }`}
    >
      x
    </div>
  );
}
