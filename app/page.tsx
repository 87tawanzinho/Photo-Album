import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import CardImgs from "./components/card-imgs";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 to-gray-800">
      <h2
        className={cn("drop-shadow-lg text-3xl text-gray-100", font.className)}
      >
        Meu album de fotos
      </h2>
      <CardImgs />
    </main>
  );
}
