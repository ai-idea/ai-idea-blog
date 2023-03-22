export const TagIndexList = (props: {
  dataSource?: { tag: string; count: number }[];
}) => {
  if (!props.dataSource || props.dataSource.length === 0) {
    return (
      <div className="flex flex-col justify-center mx-auto my-auto min-h-[70vh]">
        <div className="p-5 flex flex-wrap justify-center">
          <h2 className="text-3xl text-center">{"Empty List"}</h2>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center mx-auto my-auto min-h-[70vh]">
      <div className="p-5 flex flex-wrap justify-center">
        {props.dataSource?.map((item, index) => (
          <a
            key={`tag-${index}`}
            href={`/tags/${item.tag}`}
            className="text-sky-500 hover:text-sky-300 text-xl p-3"
          >
            {`${item.tag}(${item.count})`}
          </a>
        ))}
      </div>
    </div>
  );
};
