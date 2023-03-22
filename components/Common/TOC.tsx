import { TOCList } from "@/types/toc-tree.type";
import Link from "next/link";

export const TOC = (props: { list?: TOCList }) => {
  return (
    <div className="py-3">
      <div className="py-2 font-bold text-sky-500 text-center border-b border-gray-700 border-dotted">
        <h3 className="text-center">{"TABLE OF CONTENTS"}</h3>
      </div>
      <div className="my-3 h-96 overflow-y-auto flat-scrollbar">
        {props.list?.map((item) => (
          <Link
            className="hover:text-sky-500"
            href={`#${item.id}`}
            key={`toc-${item.id}`}
          >
            <li
              className="target:text-blue-500 text-sm my-2"
              style={{ paddingLeft: `${item.level}em` }}
            >{`${item.title}`}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};
