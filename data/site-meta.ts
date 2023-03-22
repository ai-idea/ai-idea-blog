import { SiteMeta } from "@/types/site-meta.type";

export const SiteMetaData: SiteMeta = {
  title: "AI-IDEA BLOG",
  nickname: "AI IDEA",
  sentence: "THE REVOLUTION FOR AI-CREATIVE",
  websiteUrl: "https://blog.ai-idea.cc",
  copyright: "AI IDEA-妙想AI",
  yearStart: 2023,
  blogIndexListLengthPerPage: 10,
  blogLatestListLength: 10,
  avatarUrl:
    "https://avatars.githubusercontent.com/u/128275921?s=200&v=4",
  homeBackgroundImage:
    "https://cdn.pixabay.com/photo/2016/12/15/20/17/color-1909977__340.jpg",
  socialLinks: {
    github: "https://github.com/ai-idea",
  },
  pinnedPostIds: [],
  friendLinks: [
    {
      title: "XBMU-CVLAB",
      url: "https://cvlab.terminels.com",
    },
    {
      title: "Yuteng Zhang's Blog",
      url: "https://blog.terminels.com/",
    },
  ],
  giscus: {
    enabled: true,
    repo: 'PrinOrange/ai-idea-blog',
    repoId: "R_kgDOJMeLPg",
    category: "Blog Comments",
    categoryId: "DIC_kwDOJMeLPs4CVB-M",
  },
};
