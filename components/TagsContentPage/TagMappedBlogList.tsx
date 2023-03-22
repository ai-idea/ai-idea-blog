import { LinkPostReaderPage, LinkTagContentPage } from "@/consts/link-path";
import { PostListItem } from "@/models/model";
import { normalizeDate } from "@/utils/date";
import { ListView } from "../Common";

export const TagMappedBlogList = (props: {
  dataSource: PostListItem[];
  tag: string;
}) => {
  return (
    <div className="w-full my-3">
      <div className="my-3 flex flex-col justify-center">
        <div className="text-3xl mx-auto">{"ALL BLOGS UNDER THE TAG"}</div>
        <div className="text-3xl mx-auto font-bold my-2 text-sky-400">
          {props.tag}
        </div>
      </div>
      <ListView
        keyPrefix="tag-mapped-blog-list"
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
    </div>
  );
};
