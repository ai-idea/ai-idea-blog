import {
  FireworkCanvas,
  Footer,
  Container,
  NavBar,
  PageSEO
} from "@/components/Common";
import {
  BlogLatestList,
  BlogPinnedList,
  ProfileCard
} from "@/components/HomePage";
import { SiteMetaData } from "@/data/site-meta";
import { PostListItem } from "@/models/model";
import {
  postDetailsToPostListItem,
  PostIndexInstance,
  PostsDataInstance
} from "@/services/blog";
import _ from "lodash";
import { GetStaticProps } from "next";

export default function HomePage(props: {
  latestBlogListDataSource: PostListItem[];
  pinnedBlogListDataSource: PostListItem[];
}) {
  return (
    <>
      <FireworkCanvas />
      <PageSEO
        title={SiteMetaData.title}
        description={SiteMetaData.sentence}
        imageUrl={SiteMetaData.avatarUrl}
      />
      <h1 className="text-2xl py-3 text-center font-bold my-auto text-sky-500">
        {SiteMetaData.title}
      </h1>
      <NavBar />
      <Container>
        <ProfileCard />
        <BlogPinnedList dataSource={props.pinnedBlogListDataSource} />
        <BlogLatestList dataSource={props.latestBlogListDataSource} />
      </Container>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const latest_blog_list_data = _.take(
    PostsDataInstance,
    SiteMetaData.blogLatestListLength
  ).map((item) => postDetailsToPostListItem(item));
  const pinned_blog_list_data = SiteMetaData.pinnedPostIds.map((id) =>
    postDetailsToPostListItem(PostIndexInstance[id])
  );
  return {
    props: {
      latestBlogListDataSource: latest_blog_list_data,
      pinnedBlogListDataSource: pinned_blog_list_data,
    },
  };
};
