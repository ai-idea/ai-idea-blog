import { LinkBlogsIndexPage, LinkTagsIndexPage } from "@/consts/link-path";
export const NavBar = () => {
  return (
    <nav className="flex flex-wrap justify-center p-2 nav-blur z-50">
      <a
        className={
          "text-base px-3 py-1 text-gray-800 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500"
        }
        href="/"
      >
        {"Home"}
      </a>
      <a
        className={
          "text-base px-3 py-1 text-gray-800 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500"
        }
        href={LinkBlogsIndexPage()}
      >
        {"Blog"}
      </a>
      <a
        className={
          "text-base px-3 py-1 text-gray-800 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500"
        }
        href={LinkTagsIndexPage()}
      >
        {"Tags"}
      </a>
      <a
        className={
          "text-base px-3 py-1 text-gray-800 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500"
        }
        href="/works"
      >
        {"Works"}
      </a>
      <a
        className={
          "text-base px-3 py-1 text-gray-800 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-500"
        }
        href="/about"
      >
        {"About"}
      </a>
    </nav>
  );
};
