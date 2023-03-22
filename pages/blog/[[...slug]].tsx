import { BlogIndexList } from "@/components/BlogIndexPage";
import {
  FireworkCanvas,
  Footer,
  Container,
  NavBar,
  PageSEO,
} from "@/components/Common";
import { SiteMetaData } from "@/data/site-meta";
import { PostListItem } from "@/models/model";
import { PaginatedPostListInstance } from "@/services/blog";
import _ from "lodash";
import { GetStaticPaths, GetStaticProps } from "next";
import Nullify from "nullify-undefined";

export default function BlogIndexPage(props: {
  pageAmount: string;
  currentPage: string;
  blogListDataSource: PostListItem[];
}) {
  return (
    <>
      <FireworkCanvas />
      <PageSEO
        title={"BLOGS INDEX"}
        description={"Index page for all my blogs."}
      />
      <h1 className="text-2xl py-3 text-center font-bold my-auto text-sky-500">
        {SiteMetaData.title}
      </h1>
      <NavBar />
      <Container>
        <BlogIndexList
          pageAmount={props.pageAmount}
          currentPage={props.currentPage}
          dataSource={props.blogListDataSource}
        />
      </Container>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const page_paths = _.range(1, PaginatedPostListInstance.length + 1).map(
    (pageNum) => ({
      params: {
        slug: [pageNum.toString()],
      },
    })
  );
  page_paths.push({ params: { slug: [] } });
  return {
    paths: page_paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const page_amount =
    PaginatedPostListInstance.length === 0
      ? 1
      : PaginatedPostListInstance.length;
  const current_page = context.params?.slug?.at(0)
    ? parseInt(context.params?.slug?.at(0)!)
    : 1;
  console.log(current_page);
  const post_list =
    page_amount === 0
      ? []
      : current_page <= page_amount
      ? PaginatedPostListInstance[current_page - 1]
      : PaginatedPostListInstance[0];

  return {
    props: Nullify({
      pageAmount: page_amount,
      currentPage: current_page ?? 1,
      blogListDataSource: post_list,
    }),
  };
};
