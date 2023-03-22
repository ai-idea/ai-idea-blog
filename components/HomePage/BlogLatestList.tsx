import {
  LinkBlogsIndexPage,
  LinkPostReaderPage,
  LinkTagContentPage,
} from "@/consts/link-path";
import { PostListItem } from "@/models/model";
import { ListView } from "@/components/Common";
import { normalizeDate } from "@/utils/date";
export const BlogLatestList = (props: { dataSource: PostListItem[] }) => {
  if (props.dataSource == null || props.dataSource.length === 0) return null;
  return (
    <div className="w-full my-10">
      <div className="my-3 font-bold text-center text-3xl flex justify-center">
        <div className="mx-5">{"LATEST BLOG"}</div>
      </div>
      <ListView
        keyPrefix="latest-blog-list"
        dataSource={props.dataSource}
        render={(postListItem) => (
          <>
            <a
              href={LinkPostReaderPage(postListItem.post_id)}
              className="w-full hover:text-sky-400 cursor-pointer"
            >
              <div className="flex flex-col justify-center my-2">
                <h2 className="text-lg my-1 mx-auto font-bold">
                  {postListItem.title}
                </h2>
                <div className="my-auto text-center text-gray-900 dark:text-gray-400">
                  {normalizeDate(postListItem.date)}
                </div>
                {postListItem.summary && (
                  <div className="my-2 mx-auto text-gray-900 dark:text-gray-400">
                    {postListItem.summary}
                  </div>
                )}
              </div>
            </a>
            <div className="my-2 space-x-3 flex flex-wrap justify-center text-xs">
              {postListItem.tags?.map((tagItem, index) => (
                <a
                  href={LinkTagContentPage(tagItem)}
                  className="px-2 py-1 text-sky-500 bg-transparent border-sky-500 hover:bg-sky-500 hover:text-white border-2 rounded-2xl"
                  key={`latest-post-${index}`}
                >
                  {tagItem}
                </a>
              ))}
            </div>
          </>
        )}
      />
      <div className="my-5 text-right">
        <a className="hover:text-sky-500 text-xl" href={LinkBlogsIndexPage()}>
          {"MORE BLOGS"}
        </a>
      </div>
    </div>
  );
};
