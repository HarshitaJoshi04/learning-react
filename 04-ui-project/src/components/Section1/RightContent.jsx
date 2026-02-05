import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full rounded-4 p-6 w-2/3 flex flex-nowrap gap-10 overflow-x-auto"
    >
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            color={elem.color}
            key={idx}
            id={idx}
            img={elem.img}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
