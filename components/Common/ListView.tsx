import React from "react";

export function ListView<T = any>(props: {
  children?: React.ReactNode;
  dataSource?: T[];
  keyPrefix: string;
  render?: (item: T, index: number) => React.ReactNode | any;
}) {
  if (!props.dataSource || props.dataSource.length === 0) {
    return (
      <div className="w-full my-3 ">
        <div className="min-h-[60vh] flex flex-col justify-center">
          <h2 className="text-3xl text-center">{"Empty List"}</h2>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      {props.dataSource?.map((item, index) => (
        <div
          className="justify-around border-b border-dashed border-gray-300 dark:border-gray-700 py-3"
          key={`listview-${props.keyPrefix}-${index}`}
        >
          {props.render && props.render(item, index)}
        </div>
      ))}
    </div>
  );
}
