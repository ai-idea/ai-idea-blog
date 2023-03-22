import { PostDetails } from "@/models/model";
import { normalizeDate } from "@/utils/date";

export const PostHead = (props: { postDetails: PostDetails }) => {
  return (
    <div>
      {props.postDetails.front_matter.bgimg && (
        <div
          className="rounded-lg w-full h-72"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${props.postDetails.front_matter.bgimg})`,
          }}
        />
      )}
      <div className="flex flex-col py-5 justify-center border-b border-gray-600">
        <h1 className="text-2xl mx-auto font-bold my-2">
          {props.postDetails.front_matter.title}
        </h1>
        <div className="flex justify-center text-sm">
          {normalizeDate(props.postDetails.front_matter.date)}
        </div>
        {props.postDetails.front_matter.summary && (
          <p className="my-3">{props.postDetails.front_matter.summary}</p>
        )}
      </div>
    </div>
  );
};
