import { useRouter } from "next/router";
import React from "react";
import ArticlePreviewProps from "./types/article-props";

export default function FeaturedArticle(props: ArticlePreviewProps) {
  const router = useRouter();

  function openArticle() {
    router.push(props.articleUrl);
  }

  return (
    <div
      className="grid grid-cols-12 gap-8 p-4 -m-4 transition-transform duration-100 rounded-lg cursor-pointer select-none hover:scale-105 transform-gpu"
      onClick={openArticle}
    >
      <div className="col-span-6 sm:col-span-7">
        <img
          className="rounded"
          draggable="false"
          src={props.imageUrl}
          alt="Article Preview Image"
        />
      </div>
      <div className="flex flex-col justify-center col-span-6 sm:col-span-5">
        <h2 className="py-2 text-3xl font-black">{props.title}</h2>
        <p className="text-sm font-medium">
          {props.readTime}min read | {props.tags[0].name}
        </p>
      </div>
    </div>
  );
}
