import { Dispatch, SetStateAction } from "react";
import { menuItemType } from "./MenuItemType";

export type GlobalContextTypes = {
    menuItemsObject: {
        menuItems: menuItemType[],
        setMenuItems: Dispatch<SetStateAction<menuItemType[]>>
    }
};