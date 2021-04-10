import React from "react";
import Button from "../clickable/Button";
import Container from "../layout/Container";

interface HeroProps {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
}

export default function Hero(props: HeroProps) {
  const titleParts = props.title?.split("\n") ?? ["", ""];

  return (
    <Container>
      <img
        className="pt-10"
        src={props.imageSrc}
        alt="Banner Image 🖼 Loading..."
      />
      <div className="pt-8">
        <h1 className="text-4xl">
          <span className="text-black font-normal">{titleParts[0]}</span>
          <span>&#32;</span>
          <span className="text-blue font-bold">{titleParts[1]}</span>
        </h1>
      </div>
      <div className="pt-4">
        <span className="text-lg">{props.subtitle}</span>
      </div>
      <div className="flex flex-row pt-6">
        <Button label="Blog" classes="bg-blue text-white mr-4" />
        <Button label="About Me" classes="border-blue border-2 text-blue" />
      </div>
    </Container>
  );
}
