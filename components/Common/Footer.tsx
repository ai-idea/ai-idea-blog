import { SiteMetaData } from "@/data/site-meta";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center text-black dark:text-gray-400 my-5">
      <ThemeSwitcher />
      <div className="flex justify-center flex-wrap my-3 text-sm">
        {SiteMetaData.friendLinks.map((item, index) => (
          <a
            key={`friends-link-${index}`}
            className="hover:text-sky-500 my-1 mx-2"
            href={item.url}
            target={"_blank"}
            rel="noreferrer"
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className="mx-auto font-bold">{`${SiteMetaData.copyright} © ${SiteMetaData.yearStart}-${new Date().getFullYear()}`}</div>
    </footer>
  );
};
