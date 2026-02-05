import React from "react";
import { ArrowUpRight } from "lucide-react";
import Herotext from "./Herotext";

const LeftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between  ">
      <Herotext />

      <ArrowUpRight />
    </div>
  );
};

export default LeftContent;
