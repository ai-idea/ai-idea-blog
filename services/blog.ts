import {
  PostDetails,
  PostFrontMatterSchema,
  PostIndex,
  PostListItem,
  TagIndex,
} from "@/models/model";
import { loadMDXData } from "@/utils/markdown";
import fs from "fs";
import _ from "lodash";
import path from "path";

// The path of posts.
const PostsRootDirectory = path.join(process.cwd(), "data/posts");
const PaginateStep = 10;

export const postDetailsToPostListItem = (
  post_item: PostDetails
): PostListItem => {
  return {
    date: post_item.front_matter.date,
    title: post_item.front_matter.title,
    summary: post_item.front_matter.summary ?? null,
    tags: post_item.front_matter.tags ?? null,
    post_id: post_item.post_id,
  };
};

const loadPostsData = async (): Promise<PostDetails[]> => {
  if(!fs.existsSync(PostsRootDirectory)){
    return Promise.resolve([]);
  }
  const all_posts = (
    await Promise.all(
      fs
        .readdirSync(PostsRootDirectory)
        .map<Promise<PostDetails>>(async (filename) => {
          const post_id = filename.replace(/\.md$/, "");
          const post_file_path = path.join(PostsRootDirectory, filename);
          const raw_contents = fs.readFileSync(post_file_path, "utf8");
          const markdown_data =
            loadMDXData<PostFrontMatterSchema>(raw_contents);
          return {
            post_id: post_id,
            front_matter: (await markdown_data).front_matter,
            compiled_content: (await markdown_data).compiled_content,
          } as PostDetails;
        })
    )
  ).sort((a, b) => (a.front_matter.date > b.front_matter.date ? -1 : 1));
  return all_posts;
};
export const PostsDataInstance = await loadPostsData();

const makePaginatedPostList = (): PostListItem[][] => {
  return _.chunk(
    PostsDataInstance.map((post_item) => postDetailsToPostListItem(post_item)),
    PaginateStep
  );
};
export const PaginatedPostListInstance = makePaginatedPostList();

const makeTagIndex = (): TagIndex => {
  const result: TagIndex = {};
  PostsDataInstance.forEach((post_item) => {
    post_item.front_matter.tags?.forEach((tag_item) => {
      if (result[tag_item] == null) {
        result[tag_item] = {
          count: 0,
          post_ids: [],
        };
      }
      result[tag_item].count++;
      result[tag_item].post_ids.push(post_item.post_id);
    });
  });
  return result;
};
export const TagIndexInstance = makeTagIndex();

const makePostIndex = (): PostIndex => {
  const result: PostIndex = {};
  PostsDataInstance.forEach((post_item) => {
    result[post_item.post_id] = post_item;
  });
  return result;
};
export const PostIndexInstance = makePostIndex();
