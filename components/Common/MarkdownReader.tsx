import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

export const MarkdownReader = (props: { compiled_content: MDXRemoteProps }) => {
  return (
    <article className="break-words py-8 max-w-full overflow-x-auto prose prose-h1:text-2xl prose-img:mx-auto prose-figure:mx-auto prose-a:text-sky-300 px-0 dark:prose-invert">
      <MDXRemote {...props.compiled_content} />
    </article>
  );
};
