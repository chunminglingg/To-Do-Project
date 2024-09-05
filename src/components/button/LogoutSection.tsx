import { SignOutButton } from "@clerk/nextjs";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LogoutSection = () => {
  const logOutObject = { name: "logout", icon: faRightFromBracket };

  return (
    <div className="flex gap-2 items-center p-2 ml-8 mt-28 hover:text-[#4f46e5] transition-all">
      <FontAwesomeIcon icon={logOutObject.icon} width={20} height={20} />
      <div>
        <SignOutButton />
      </div>
    </div>
  );
};

export default LogoutSection;
