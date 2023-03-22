import { SiteMetaData } from "@/data/site-meta";
import { FaGithub, FaTwitter, FaWeibo } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SiZhihu } from "react-icons/si";

export const ProfileCard = () => {
  return (
    <div className="my-2">
      {SiteMetaData.homeBackgroundImage ? (
        <div
          className="rounded-lg w-full h-72 mt-10 mb-20"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${SiteMetaData.homeBackgroundImage})`,
          }}
        >
          {SiteMetaData.avatarUrl && (
            <div className="justify-center flex flex-col">
              <img
                src={SiteMetaData.avatarUrl}
                className="rounded-full h-32 w-32 top-28 mt-56 mx-auto"
                alt="avatar"
              />
            </div>
          )}
        </div>
      ) : (
        SiteMetaData.avatarUrl && (
          <div className="justify-center flex my-20">
            <img
              src={SiteMetaData.avatarUrl}
              className="rounded-full h-32 w-32"
              alt="avatar"
            />
          </div>
        )
      )}
      <div className="mt-24 flex flex-col justify-center">
        <h2 className="my-1 mx-auto text-2xl">{SiteMetaData.nickname}</h2>
        {SiteMetaData.sentence && (
          <p className="mx-auto text-lg my-5">{SiteMetaData.sentence}</p>
        )}
        <div className="flex justify-center space-x-5 my-4 text-gray-900 dark:text-gray-200">
          {SiteMetaData.socialLinks.github && (
            <a
              className="hover:text-gray-500"
              href={SiteMetaData.socialLinks.github}
              target={"_blank"}
              rel="noreferrer"
            >
              <FaGithub size="2em" />
            </a>
          )}
          {SiteMetaData.socialLinks.zhihu && (
            <a
              className="hover:text-sky-300"
              href={SiteMetaData.socialLinks.zhihu}
              target={"_blank"}
              rel="noreferrer"
            >
              <SiZhihu size="2em" />
            </a>
          )}
          {SiteMetaData.socialLinks.twitter && (
            <a
              className="hover:text-sky-500"
              href={SiteMetaData.socialLinks.twitter}
              target={"_blank"}
              rel="noreferrer"
            >
              <FaTwitter size="2em" />
            </a>
          )}
          {SiteMetaData.socialLinks.weibo && (
            <a
              className="hover:text-red-500"
              href={SiteMetaData.socialLinks.weibo}
              target={"_blank"}
              rel="noreferrer"
            >
              <FaWeibo size="2em" />
            </a>
          )}
          {SiteMetaData.socialLinks.instagram && (
            <a
              className="hover:text-amber-600"
              href={SiteMetaData.socialLinks.instagram}
              target={"_blank"}
              rel="noreferrer"
            >
              <FiInstagram size="2em" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
