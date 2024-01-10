"use client";
import { cn } from "@/lib/utils";
import { Libre_Franklin, Open_Sans, Roboto_Slab } from "next/font/google";
import React, { useContext, useEffect, useState } from "react";
import GetImg from "../functions/GetImg";
import Loading from "@/components/loading";
import { myImgs } from "../interfaces";
import Pagination from "./pagination";
import { PageContext } from "../context/PageContext";

const font = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400"],
});

function CardImgs() {
  const { page, setPage } = useContext(PageContext);
  const [data, setData] = useState<myImgs[]>();
  let response;
  useEffect(() => {
    const fetch = async () => {
      response = await GetImg(page);
      setData(response?.data.photos);
      console.log(response?.data.photos);
    };
    fetch();
  }, [page]);

  if (!data) {
    return <Loading />;
  }

  return (
    <div>
      <div className="mt-10 flex gap-2 flex-wrap pb-20 p-4 ">
        {data &&
          data.map((img) => (
            <div key={img.id}>
              <div className="flex flex-col gap-2 text-gray-700">
                <p className={cn("", font.className)}>{img.photographer}</p>

                <img
                  src={img.src.landscape}
                  alt={img.alt}
                  className=" w-48 h-52 object-cover  lg:h-80 lg:w-[400px]  rounded-lg drop-shadow-2xl"
                />
              </div>
            </div>
          ))}
      </div>
      <Pagination />
    </div>
  );
}

export default CardImgs;
