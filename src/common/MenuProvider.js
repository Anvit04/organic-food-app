"use client";

import { useState, useEffect, createContext, useContext } from "react";

// Context API for managing menu state globally
const MenuContext = createContext();

export function useMenu() {
  return useContext(MenuContext);
}

export default function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isOpen]);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
}
