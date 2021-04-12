import React from "react";
import Container from "../layout/Container";

export default function BlogPreview() {
  return (
    <div
      className="z-0 w-full bg-gray-100"
      style={{ boxShadow: "inset 0px 20px 18px -21px #A0ABBA" }}
    >
      <Container className="pt-20 pb-8 mx-auto">
        <h2 className="text-2xl font-black">Blogging Area 📰</h2>
        <p>Tags here</p>
        <p>Blog Article here</p>
      </Container>
    </div>
  );
}
