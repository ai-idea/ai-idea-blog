import { SiteMetaData } from "@/data/site-meta";
import Giscus from "@giscus/react";

export const Comment = () => {
  return SiteMetaData.giscus && SiteMetaData.giscus.enabled ? (
    <div className="my-5">
      <Giscus
        id="comments"
        repo={SiteMetaData.giscus.repo as `${string}/${string}`}
        repoId={SiteMetaData.giscus.repoId}
        category={SiteMetaData.giscus.category}
        categoryId={SiteMetaData.giscus.categoryId}
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </div>
  ) : null;
};
