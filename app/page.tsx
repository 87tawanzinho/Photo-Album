"use client";
import { cn } from "@/lib/utils";
import { Lato, Libre_Franklin, Open_Sans, Poppins } from "next/font/google";
import CardImgs from "./components/card-imgs";
import { PiGooglePhotosLogoFill } from "react-icons/pi";

const font = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300"],
});
export default function Home() {
  return (
    <main className="flex flex-col pt-24  h-full  ">
      <h2
        className={cn(
          "drop-shadow-lg text-3xl  flex gap-4 items-center text-zinc-800 p-4",
          font.className
        )}
      >
        Meu album de fotos{" "}
        <span className="">
          {" "}
          <PiGooglePhotosLogoFill />
        </span>
      </h2>

      <CardImgs />
    </main>
  );
}
