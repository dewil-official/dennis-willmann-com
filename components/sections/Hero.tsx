import React from "react";
import Button from "../clickable/Button";
import Container from "../layout/Container";
import Image from "next/image";

interface HeroProps {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
}

export default function Hero(props: HeroProps) {
  const titleParts = props.title?.split("\n") ?? ["", ""];

  return (
    <div className="z-10 -mb-8 bg-white">
      <Container className="grid-cols-2 gap-8 pb-20 lg:grid">
        <div className="flex flex-row lg:order-3 lg:justify-end">
          <img
            className="w-full max-w-2xl pt-10"
            src={props.imageSrc}
            alt="Banner Image 🖼 Loading..."
          />
        </div>
        <div className="flex flex-col justify-center lg:order-2">
          <div className="pt-8">
            <h1 className="text-4xl">
              <span className="font-normal text-black">{titleParts[0]}</span>
              <span>&#32;</span>
              <span className="font-bold text-blue">{titleParts[1]}</span>
            </h1>
          </div>
          <div className="pt-4">
            <span className="text-lg">{props.subtitle}</span>
          </div>
          <div className="flex flex-row pt-6">
            <Button label="Blog" classes="bg-blue text-white mr-4" />
            <Button label="About Me" classes="border-blue border-2 text-blue" />
          </div>
        </div>
      </Container>
      <img
        src="/svg/scrollHint.svg"
        alt=""
        className="relative"
        style={{
          zIndex: 11,
          bottom: "12px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}
