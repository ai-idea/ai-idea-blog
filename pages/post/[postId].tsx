import {
  Comment,
  FireworkCanvas,
  Footer, Container,
  MarkdownReader,
  NavBar,
  PageSEO,
  TOC,
  Row,
  Col
} from "@/components/Common";
import { InfoCard, PostHead } from "@/components/PostReaderPage";
import { SiteMetaData } from "@/data/site-meta";
import { PostDetails, PostListItem } from "@/models/model";
import {
  postDetailsToPostListItem,
  PostIndexInstance,
  PostsDataInstance
} from "@/services/blog";
import { getTOCTree } from "@/services/toc";
import { TOCList } from "@/types/toc-tree.type";
import { GetStaticPaths, GetStaticProps } from "next";
import Nullify from "nullify-undefined";
import { renderToString } from "react-dom/server";

export default function PostReaderPage(props: {
  postData: PostDetails;
  tocList?: TOCList;
  next?: PostListItem | null;
  prev?: PostListItem | null;
}) {
  return (
    <>
      <FireworkCanvas />
      <PageSEO
        title={props.postData.front_matter.title}
        description={
          props.postData.front_matter.summary ??
          props.postData.front_matter.title
        }
      />
      <h1 className="text-2xl py-3 text-center font-bold my-auto text-sky-500">
        {SiteMetaData.title}
      </h1>
      <NavBar />
      <Container>
        <div className="my-10 select-text">
          <PostHead postDetails={props.postData} />
          <Row className="lg:flex">
            <Col className="lg:w-3/4">
              <div className="border-b border-dotted border-gray-600 px-2 py-5">
                <MarkdownReader
                  compiled_content={props.postData.compiled_content}
                />
              </div>
              <div className="block lg:hidden">
                <InfoCard
                  postDetails={props.postData}
                  nextPost={props.next}
                  prevPost={props.prev}
                />
              </div>
              <Comment />
            </Col>
            <Col className="px-3 py-5 lg:w-1/4 lg:block hidden">
              <InfoCard
                postDetails={props.postData}
                nextPost={props.next}
                prevPost={props.prev}
              />
              <div className="sticky top-5">
                <TOC list={props.tocList} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const post_paths = PostsDataInstance.map((item) => ({
    params: {
      postId: item.post_id,
    },
  }));
  return {
    paths: post_paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post_id = params!.postId as string;
  const toc_list = getTOCTree(
    renderToString(
      <MarkdownReader
        compiled_content={PostIndexInstance[post_id].compiled_content}
      />
    )
  );
  const post_position = PostsDataInstance.findIndex(
    (item) => item.post_id === post_id
  );
  const next_post_item =
    PostsDataInstance[post_position + 1] &&
    postDetailsToPostListItem(PostsDataInstance[post_position + 1]);
  const prev_post_item =
    PostsDataInstance[post_position - 1] &&
    postDetailsToPostListItem(PostsDataInstance[post_position - 1]);

  return {
    props: Nullify({
      postData: PostIndexInstance[post_id],
      tocList: toc_list,
      next: next_post_item,
      prev: prev_post_item,
    }),
  };
};
