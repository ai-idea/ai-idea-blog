import { SiteMetaData } from "@/data/site-meta";
import { NextSeo } from "next-seo";

export const PageSEO = (props: {
  title: string;
  description?: string;
  imageUrl?: string;
  url?: string;
}) => {
  return (
    <NextSeo
      title={props.title}
      description={props.description}
      openGraph={{
        url: props.url,
        title: props.title,
        description: props.description,
        images: props.imageUrl
          ? [
              {
                url: props.imageUrl,
                alt: props.title,
                type: "image/jpeg",
              },
            ]
          : [
              {
                url: SiteMetaData.avatarUrl,
                alt: SiteMetaData.sentence,
                type: "image/jpeg",
              },
            ],
        siteName: SiteMetaData.title,
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
};
