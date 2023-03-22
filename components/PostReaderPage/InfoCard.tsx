import { LinkPostReaderPage } from "@/consts/link-path";
import { PostDetails, PostListItem } from "@/models/model";
import Link from "next/link";

export const InfoCard = (props: {
  postDetails: PostDetails;
  nextPost?: PostListItem | null;
  prevPost?: PostListItem | null;
}) => {
  return (
    <div className="my-5">
      {props.postDetails.front_matter.tags && (
        <div>
          <h3 className="font-bold my-2">{"TAGS"}</h3>
          {props.postDetails.front_matter.tags.map((tagItem, index) => (
            <Link
              href={`/tags/${tagItem}`}
              className="text-sky-500 bg-transparent mx-2 hover:text-white"
              key={`latest-post-${index}`}
            >
              {tagItem}
            </Link>
          ))}
        </div>
      )}
      <div className="my-3 border-t border-gray-700">
        {props.prevPost && (
          <Link
            target={"_blank"}
            href={LinkPostReaderPage(props.prevPost.post_id)}
          >
            <div className="my-5">
              <div className="font-bold">{"PREV"}</div>
              <div className="text-sm my-1 hover:text-sky-400">{props.prevPost.title}</div>
            </div>
          </Link>
        )}
        {props.nextPost && (
          <Link
            target={"_blank"}
            href={LinkPostReaderPage(props.nextPost.post_id)}
          >
            <div className="my-5">
              <div className="font-bold">{"NEXT"}</div>
              <div className="text-sm my-1 hover:text-sky-400">{props.nextPost.title}</div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
