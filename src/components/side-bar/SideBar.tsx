import React from "react";
import CustomIcon from "../appIcons/AppIcon";
import MenuSelection from "./MenuSelection";
import LogoutSection from "../button/LogoutSection";
import LogoNName from "../appIcons/LogoNName";

function SideBar() {
  return (
    <>
      <div className="flex-grow p-10 flex flex-col border bg-white min-h-screen">
          <LogoNName/>
          <MenuSelection />
          <LogoutSection/>
      </div>
    </>
  );
}

export default SideBar;
