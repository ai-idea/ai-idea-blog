import externalLinks from "remark-external-links";
import matter from "gray-matter";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkPrism from "remark-prism";
import { MarkdownData } from "@/types/markdown-data.type";
import { serialize } from "next-mdx-remote/serialize";

export async function loadMDXData<FrontMatterSchema = any>(
  raw_data: string
): Promise<MarkdownData> {
  const file_matter = matter(raw_data);
  const front_matter = file_matter.data as FrontMatterSchema;
  return {
    front_matter: front_matter,
    compiled_content: await serialize(file_matter.content, {
      mdxOptions: {
        remarkPlugins: [remarkPrism, externalLinks, remarkMath, remarkGfm],
        rehypePlugins: [rehypeKatex, rehypeAutolinkHeadings, rehypeSlug],
      },
    }),
  };
}
