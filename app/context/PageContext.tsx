"use client";
import { createContext, useState } from "react";
import { PageContextType, myImgs } from "../interfaces";

export const PageContext = createContext<PageContextType>({
  page: 0,
  setPage: () => {},
  favoritesMap: [],
  setFavoritesMap: () => {},
});

export function PageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [page, setPage] = useState(1);
  const [favoritesMap, setFavoritesMap] = useState<myImgs[]>([]);
  return (
    <PageContext.Provider
      value={{ page, setPage, favoritesMap, setFavoritesMap }}
    >
      {children}
    </PageContext.Provider>
  );
}
