import { string } from "prop-types";
import { MdAllInclusive } from "react-icons/md";

export default {
  name: "landing",
  type: "document",
  title: "Landing Page",
  icon: MdAllInclusive,
  fields: [
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      validation: (Rule) => [
        Rule.required().error("You need to select a Hero Banner image."),
      ],
    },
    {
      name: "title",
      title: "Title",
      type: "text",
      description: "1st line: Black text \n2nd line: Blue text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "blogTitle",
      title: "Blog Section Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "aboutMeTitle",
      title: "About Me Section Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "aboutMeText",
      title: "About Me Short Text",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
};
