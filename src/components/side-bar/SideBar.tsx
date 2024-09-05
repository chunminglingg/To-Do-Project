import React from "react";
import CustomIcon from "../appIcons/AppIcon";
import MenuSelection from "./MenuSelection";

function SideBar() {
  return (
    <>
      <div className="w-[340px] h-screen fixed max-sm:hidden shadow-md outline-1">
        <div className="flex w-full justify-center pt-10 items-center gap-2">
          <p className="font-semibold">
            To do <span className="text-[#4f46e5]">List</span>
          </p>
          <CustomIcon color="#4f46e5" height="34px" width="34px" />
        </div>
        <div className="h-screen w-full flex flex-row justify-center items-center pb-16">
          <MenuSelection />
        </div>
      </div>
    </>
  );
}

export default SideBar;
