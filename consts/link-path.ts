export const LinkTagsIndexPage = () => "/tags";

export const LinkBlogsIndexPage = (pageNum?: number | null) =>
  pageNum ? `/blog/${pageNum}` : "/blog/";

export const LinkPostReaderPage = (id?: string | null) =>
  id ? `/post/${id}` : "/post";

export const LinkTagContentPage = (tag: string) => `/tags/${tag}`;
