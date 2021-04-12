import React from "react";

interface ButtonProps {
  label: string;
  classes: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`rounded px-8 py-2 font-medium select-none ${props.classes}`}
    >
      {props.label}
    </button>
  );
}
