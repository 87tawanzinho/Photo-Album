import type { Metadata } from "next";
import { Inter, Playfair_Display, Rubik } from "next/font/google";
import "./globals.css";
import NavMain from "@/components/nav-main";
import { PageContextProvider } from "./context/PageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Universal Album",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PageContextProvider>
        <body className={inter.className}>
          <NavMain />
          {children}
        </body>
      </PageContextProvider>
    </html>
  );
}
