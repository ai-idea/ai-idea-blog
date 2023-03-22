import { MDXRemoteProps } from "next-mdx-remote";

export type MarkdownData<FrontMatterSchema = any> = {
  front_matter: FrontMatterSchema;
  compiled_content: MDXRemoteProps;
};