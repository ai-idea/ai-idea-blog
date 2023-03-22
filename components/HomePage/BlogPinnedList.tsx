import { PostListItem } from "@/models/model";
import { normalizeDate } from "@/utils/date";
import { BsStarFill } from "react-icons/bs";
import { ListView } from "../Common";

export const BlogPinnedList = (props: { dataSource?: PostListItem[] }) => {
  if (props.dataSource == null || props.dataSource.length === 0) return null;
  return (
    <div className="w-full py-10">
      <div className="my-3 font-bold text-center text-3xl flex justify-center">
        <BsStarFill className="text-sky-500" />
        <div className="mx-5">{"PINNED BLOG"}</div>
      </div>
      <ListView
        keyPrefix="pinned-blog-list"
        dataSource={props.dataSource}
        render={(postListItem) => (
          <a
            href={`/post/${postListItem.post_id}`}
            className="hover:text-sky-400 cursor-pointer"
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
        )}
      />
    </div>
  );
};
