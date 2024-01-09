import { cn } from "@/lib/utils";
import { Libre_Franklin, Open_Sans, Roboto_Slab } from "next/font/google";
import React from "react";

const font = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400"],
});
function CardImgs() {
  return (
    <div className="mt-10 flex gap-4 flex-wrap">
      <div className="flex flex-col gap-2 text-gray-700">
        <p className={cn("", font.className)}>24/08/2002</p>
        <div className="h-40 w-40 lg:h-60 lg:w-60 bg-black rounded-lg"></div>
      </div>

      <div className="flex flex-col gap-2 text-gray-700">
        <p className={cn("", font.className)}>24/08/2002</p>
        <div className="h-40 w-40 lg:h-60 lg:w-60 bg-black rounded-lg"></div>
      </div>
    </div>
  );
}

export default CardImgs;
