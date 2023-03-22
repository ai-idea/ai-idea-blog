import {
  FireworkCanvas,
  Footer,
  Container,
  MarkdownReader,
  NavBar,
  PageSEO
} from "@/components/Common";
import { SiteMetaData } from "@/data/site-meta";
import { loadCustomPage } from "@/services/custom-page";
import { MarkdownData } from "@/types/markdown-data.type";
import { GetStaticProps } from "next";

export default function WorksPage(props: { markdownData: MarkdownData<{}> }) {
  return (
    <>
      <PageSEO title="MY WORKS - AI-IDEA" />
      <FireworkCanvas />
      <h1 className="text-2xl py-3 text-center font-bold my-auto text-sky-500">
        {SiteMetaData.title}
      </h1>
      <NavBar />
      <Container>
        <MarkdownReader
          compiled_content={props.markdownData.compiled_content}
        />
      </Container>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const markdown_data = await loadCustomPage("data/page/works.mdx");
  return {
    props: {
      markdownData: markdown_data,
    },
  };
};
