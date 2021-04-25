import React from "react";
import FeaturedArticle from "../blog/FeaturedArticle";
import Container from "../layout/Container";
import HeadingHighlight from "../typography/HeadingHighlight";

// Awesome inset shadow: style={{ boxShadow: "inset 0px 20px 18px -21px #A0ABBA" }}

export default function BlogPreview() {
  return (
    <div className="z-0 w-full">
      <Container className="pt-8 pb-8 mx-auto">
        <h1 className="pb-8 text-4xl font-black">
          <HeadingHighlight>Articles</HeadingHighlight>
        </h1>
        <FeaturedArticle
          title="Featured Article"
          readTime={5}
          tags={[{ name: "Productivity", id: "p" }]}
          imageUrl="https://unsplash.com/photos/H_jlYt29FCo/download?force=true&w=640"
          articleUrl="/article/p1"
        ></FeaturedArticle>
      </Container>
    </div>
  );
}
