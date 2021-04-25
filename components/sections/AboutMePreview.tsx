import React from "react";
import Container from "../layout/Container";
import HeadingHighlight from "../typography/HeadingHighlight";

export default function AboutMePreview() {
  return (
    <div className="w-full bg-gray-100">
      <Container className="pt-16 pb-16 mx-auto">
        <h1 className="pb-3 text-4xl font-black">
          <HeadingHighlight>Creating</HeadingHighlight> awesome products, as a
          student
        </h1>
      </Container>
    </div>
  );
}
