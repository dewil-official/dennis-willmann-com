import React from "react";
import Container from "./Container";

export default function Navbar() {
  return (
    <div className="w-full h-24 bg-gray-200">
      <Container className="flex flex-row items-center justify-between h-full">
        <div>Logo</div>
        <div>Hamburger</div>
      </Container>
    </div>
  );
}
