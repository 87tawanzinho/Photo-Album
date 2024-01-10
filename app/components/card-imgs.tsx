"use client";
import { cn } from "@/lib/utils";
import { Libre_Franklin, Open_Sans, Roboto_Slab } from "next/font/google";
import React, { useContext, useEffect, useState } from "react";
import GetImg from "../functions/GetImg";
import Loading from "@/components/loading";
import { myImgs } from "../interfaces";
import Pagination from "./pagination";
import { PageContext } from "../context/PageContext";
import ModalPhoto from "../functions/ModalPhoto";

const font = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400"],
});

function CardImgs({ isGoFavorite }: any) {
  const { favoritesMap, setFavoritesMap } = useContext(PageContext);
  const [modalPhoto, setModalPhoto] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<myImgs>();
  const { page, setPage } = useContext(PageContext);
  const [data, setData] = useState<myImgs[]>();
  let response;

  useEffect(() => {
    const fetch = async () => {
      response = await GetImg(page);
      setData(response?.data.photos);
      console.log(response?.data.photos);
    };

    const favoritesMapExist = localStorage.getItem("favorites");
    if (favoritesMapExist) {
      setFavoritesMap(JSON.parse(favoritesMapExist));
    }
    fetch();
  }, [page]);

  if (!data) {
    return <Loading />;
  }

  const handleImageClick = (img: myImgs) => {
    setSelectedPhoto(img);
    setModalPhoto(true);
  };

  if (isGoFavorite) {
    return (
      <div className="mt-10 flex gap-2 flex-wrap pb-20 p-4 ">
        {favoritesMap &&
          favoritesMap.map((img) => (
            <div key={img.id}>
              <div className="flex flex-col gap-2 text-gray-700   ">
                <p className={cn("", font.className)}>{img.photographer}</p>

                <img
                  onClick={() => handleImageClick(img)}
                  src={img.src.large}
                  alt={img.alt}
                  className=" w-48 h-52 object-cover  lg:h-80 lg:w-[400px]  rounded-lg drop-shadow-2xl border-[12px] border-black hover:saturate-200 transition-all"
                />
              </div>
            </div>
          ))}
        {modalPhoto && (
          <ModalPhoto
            selectedPhoto={selectedPhoto!}
            srcLandscape={selectedPhoto!!.src.landscape}
            srcLarge={selectedPhoto!!.src.original}
            alt={selectedPhoto!!.alt}
            setOpen={setModalPhoto}
          />
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="mt-10 flex gap-2 flex-wrap pb-20 p-4 ">
        {data &&
          data.map((img) => (
            <div key={img.id}>
              <div className="flex flex-col gap-2 text-gray-700   ">
                <p className={cn("", font.className)}>{img.photographer}</p>

                <img
                  onClick={() => handleImageClick(img)}
                  src={img.src.large}
                  alt={img.alt}
                  className=" w-48 h-52 object-cover  lg:h-80 lg:w-[400px]  rounded-lg drop-shadow-2xl border-[12px] border-black hover:saturate-200 transition-all"
                />
              </div>
            </div>
          ))}
      </div>

      {modalPhoto && (
        <ModalPhoto
          selectedPhoto={selectedPhoto!}
          srcLandscape={selectedPhoto!!.src.landscape}
          srcLarge={selectedPhoto!!.src.original}
          alt={selectedPhoto!!.alt}
          setOpen={setModalPhoto}
        />
      )}

      <Pagination />
    </div>
  );
}

export default CardImgs;
