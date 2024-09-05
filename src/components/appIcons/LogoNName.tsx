import React from "react";
import CustomIcon from "./AppIcon";

const LogoNName = () => {
  return (
    <div className="flex w-full justify-center pt-10 items-center gap-2 pb-20">
      <p className="font-semibold">
        To do <span className="text-[#4f46e5]">List</span>
      </p>
      <CustomIcon color="#4f46e5" height="34px" width="34px" />
    </div>
  );
};

export default LogoNName;
