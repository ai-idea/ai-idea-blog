import { MDXRemoteProps } from "next-mdx-remote";

type PostID = string;

export type PostDetails = {
  front_matter: PostFrontMatterSchema;
  compiled_content: MDXRemoteProps;
  post_id: PostID;
};

export type PostFrontMatterSchema = {
  title: string;
  summary?: string;
  tags?: string[];
  bgimg?: string;
  date: string;
};

export type PostIndex = {
  [post_id: PostID]: PostDetails;
};

export type PostListItem = {
  date: string;
  title: string;
  summary: string | null;
  tags: string[] | null;
  post_id: string;
};

export type TagIndex = {
  [tag_name: string]: {
    count: number;
    post_ids: PostID[];
  };
};
