"use client";

import { GlobalContextTypes } from "@/types/GlobalContextType";
import { menuItemType } from "@/types/MenuItemType";
import {
  faChartSimple,
  faLayerGroup,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import { ReactNode, createContext, useState, useContext } from "react";

const GlobalContext = createContext<GlobalContextTypes>({
  menuItemsObject: {
    menuItems: [],
    setMenuItems: () => {},
  },
});

function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [menuItems, setMenuItems] = useState<menuItemType[]>([
    { name: "All Habits", isSelected: true, icon: faRectangleList },
    { name: "Statistics", isSelected: false, icon: faChartSimple },
    { name: "Areas", isSelected: false, icon: faLayerGroup },
  ]);

  return (
    <GlobalContext.Provider
      value={{ menuItemsObject: { menuItems, setMenuItems } }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContextProvider() {
  return useContext(GlobalContext);
}

export default GlobalContextProvider;
