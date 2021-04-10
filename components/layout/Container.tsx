import React, { ReactNode } from "react";

export default function Container(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`container mx-auto px-6 ${props.className}`}>
      {props.children}
    </div>
  );
}
