import Tag from "./tags";

export default interface ArticlePreviewProps {
  title: string;
  readTime: number;
  tags: Tag[];
  imageUrl: string;
  articleUrl: string;
}
