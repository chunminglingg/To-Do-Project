import { menuItemType } from "@/types/MenuItemType";
import { useGlobalContextProvider } from "@/utils/contextApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LogoutSection from "../button/LogoutSection";

const MenuSelection = () => {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems } = menuItemsObject;
  return (
    <div className="">
      {menuItems.map((menuItems: menuItemType, menuItemsIndex: number) => (
        <div key={menuItemsIndex}>
          <SignleMenuItem menuItemsProps={menuItems}/>
        </div>
      ))}
      <LogoutSection/>
    </div>
  );
};

function SignleMenuItem({ menuItemsProps }: { menuItemsProps: menuItemType }) {
  const { menuItemsObject } = useGlobalContextProvider();
  const { menuItems, setMenuItems } = menuItemsObject;

  const handleClickItem = () => {
    const copyMenuItems = menuItems.map((menuItems) => {
      if (menuItemsProps.name === menuItems.name) {
        return { ...menuItems, isSelected: true };
      }

      return { ...menuItems, isSelected: false };
    });

    setMenuItems(copyMenuItems);
  };

  return (
    <div
      onClick={handleClickItem}
      className={`flex gap-2 items-center p-2 mb-3 ml-8 cursor-pointer rounded-md w-36 ${
        menuItemsProps.isSelected ? "bg-[#4f46e5] text-white" : "hover:text-[#4f46e5]"
      }`}
    >
      <FontAwesomeIcon
        className=""
        icon={menuItemsProps.icon}
        width={20}
        height={20}
      />
      <div>{menuItemsProps.name}</div>
    </div>
  );
}

export default MenuSelection;
