"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SlLogout } from "react-icons/sl";
import { cn } from "@/lib/utils";
import { Rubik } from "next/font/google";
const fontLogo = Rubik({
  subsets: ["latin"],
});

function NavMain() {
  const [isVisible, setIsVisible] = useState(true);
  const router = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 2) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {router === "/" && isVisible && (
        <nav className=" border-b border-gray-400 p-4 shadow-md flex items-center gap-2 justify-between fixed w-full">
          <div>
            <h2 className={cn(fontLogo.className)}>
              <span className="text-red-800">MyDrop</span> Photos * 2002
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="cursor-pointer text-red-800">Home</span>
          </div>
        </nav>
      )}
    </div>
  );
}

export default NavMain;
