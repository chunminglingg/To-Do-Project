"use client";

import { GlobalContextTypes } from "@/types/GlobalContextType";
import { menuItemType } from "@/types/MenuItemType";
import { ReactNode, createContext, useState, useContext } from "react";

const GlobalContext = createContext<GlobalContextTypes>({
  menuItemsObject: {
    menuItems: [],
    setMenuItems: () => {},
  },
});

function GlobalContextProvide({ children }: { children: ReactNode }) {
  const [menuItems, setMenuItems] = useState<menuItemType[]>([
    { name: "All Habits", isSelected: true },
    { name: "Statistics", isSelected: false },
    { name: "Areas", isSelected: false },
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

export default GlobalContextProvide;
