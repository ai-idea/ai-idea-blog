export type SiteMeta = {
  title: string;
  websiteUrl: string;
  nickname: string;
  copyright: string;
  yearStart: number;
  sentence?: string;
  avatarUrl: string;
  giscus?: {
    enabled: boolean;
    repo: string;
    repoId: string;
    category: string;
    categoryId: string;
  };
  blogIndexListLengthPerPage: number;
  blogLatestListLength: number;
  pinnedPostIds: string[];
  homeBackgroundImage?: string;
  socialLinks: {
    github?: string;
    weibo?: string;
    zhihu?: string;
    twitter?: string;
    instagram?: string;
  };
  friendLinks: {
    title: string;
    url: string;
  }[];
};
