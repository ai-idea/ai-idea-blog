import {
  FireworkCanvas,
  Footer,
  Container,
  NavBar,
  PageSEO
} from "@/components/Common";
import { TagMappedBlogList } from "@/components/TagsContentPage";
import { SiteMetaData } from "@/data/site-meta";
import { PostListItem } from "@/models/model";
import { PostsDataInstance, TagIndexInstance } from "@/services/blog";
import { GetStaticPaths, GetStaticProps } from "next";

export default function TagContentPage(props: {
  tag: string;
  dataSource: PostListItem[];
}) {
  return (
    <>
      <FireworkCanvas />
      <PageSEO
        title={`TAGS | ${props.tag}`}
        description={`Here are all blogs under the tag "${props.tag}"`}
      />
      <h1 className="text-2xl py-3 text-center font-bold my-auto text-sky-500">
        {SiteMetaData.title}
      </h1>
      <NavBar />
      <Container>
        <TagMappedBlogList dataSource={props.dataSource} tag={props.tag} />
      </Container>
      <Footer />
    </>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(TagIndexInstance).map((key) => ({
    params: {
      tag: key,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const current_tag = context.params?.tag as string;
  const data: PostListItem[] = [];
  PostsDataInstance.forEach((item) => {
    if (TagIndexInstance[current_tag].post_ids.includes(item.post_id)) {
      data.push({
        date: item.front_matter.date,
        title: item.front_matter.title,
        summary: item.front_matter.summary ?? null,
        tags: item.front_matter.tags ?? null,
        post_id: item.post_id,
      });
    }
  });
  return {
    props: {
      tag: current_tag,
      dataSource: data,
    },
  };
};
