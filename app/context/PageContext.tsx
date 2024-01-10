"use client";
import { createContext, useState } from "react";
import { PageContextType } from "../interfaces";

export const PageContext = createContext<PageContextType>({
  page: 0,
  setPage: () => {},
});

export function PageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [page, setPage] = useState(1);
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
}
