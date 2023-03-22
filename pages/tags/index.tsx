import {
  FireworkCanvas,
  Footer,
  Container,
  NavBar,
  PageSEO,
} from "@/components/Common";
import { TagIndexList } from "@/components/TagsIndexPage";
import { SiteMetaData } from "@/data/site-meta";
import { TagIndexInstance } from "@/services/blog";
import { GetStaticProps } from "next";

export default function TagIndexPage(props: {
  tagsListDataSource: { tag: string; count: number }[];
}) {
  return (
    <>
      <FireworkCanvas />
      <PageSEO title={"TAGS"} />
      <h1 className="text-2xl py-3 text-center font-bold my-auto text-sky-500">
        {SiteMetaData.title}
      </h1>
      <NavBar />
      <Container>
        <TagIndexList dataSource={props.tagsListDataSource} />
      </Container>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = Object.keys(TagIndexInstance).map((key) => ({
    tag: key,
    count: TagIndexInstance[key].count,
  }));
  return {
    props: {
      tagsListDataSource: data,
    },
  };
};
