import Head from "next/head";
import Error from "next/error";
import { useRouter } from "next/router";
import Hero from "../components/sections/Hero";
import { getClient, urlFor, usePreviewSubscription } from "../utils/sanity";
import BlogPreview from "../components/sections/BlogPreview";
import AboutMePreview from "../components/sections/AboutMePreview";

function IndexPage(props: { preview: any; landingData: any }) {
  // const router = useRouter();
  const heroProps = {
    imageSrc: urlFor(props.landingData.heroImage).url() ?? "",
    title: props.landingData.title,
    subtitle: props.landingData.subtitle,
  };

  // if (!router.isFallback /*&& !productsData*/) {
  //   return <Error statusCode={404} />;
  // }

  return (
    <>
      <Head>
        <title>Dennis Willmann 💡 Blog & Inspiration</title>
      </Head>
      <Hero {...heroProps} />
      <BlogPreview />
      <AboutMePreview />
    </>
  );
}
const query = `//groq
  *[_type == "landing" && _id == "landing"]
`;

export async function getStaticProps({ params = {}, preview = false }) {
  const landingDataResults = await getClient(preview).fetch(query);
  const landingData = landingDataResults[0];

  return {
    props: {
      preview,
      landingData,
    },
  };
}

export default IndexPage;
