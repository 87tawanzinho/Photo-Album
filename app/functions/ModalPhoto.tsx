"use client";
import React, { useContext, useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { ModalPhoto, myImgs } from "../interfaces";
import { Button } from "@/components/ui/button";
import { SlLike } from "react-icons/sl";
import { PageContext } from "../context/PageContext";
import ColorButton from "../components/colors-button";
function ModalPhoto({
  selectedPhoto,
  srcLarge,
  srcLandscape,
  alt,
  setOpen,
}: ModalPhoto) {
  const { favoritesMap, setFavoritesMap } = useContext(PageContext);

  const [imgOriginal, setImgOriginal] = useState(true);
  const [changeColor, setChangeColor] = useState<string>("");
  const [loading, setIsLoading] = useState(true);

  const handleLoading = async () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };

  const newFav = () => {
    const alreadyExist = favoritesMap?.some(
      (photo) => photo.id === selectedPhoto.id
    );
    if (alreadyExist) {
      const updatedFav = favoritesMap!.filter(
        (photo) => photo.id !== selectedPhoto.id
      );
      return setFavoritesMap(updatedFav);
    }
    setFavoritesMap((prev: myImgs[]) => [...prev, selectedPhoto]);
    const updatedFavoritesMap = [...favoritesMap!, selectedPhoto];
    localStorage.setItem("favorites", JSON.stringify(updatedFavoritesMap));
  };
  const photoExistToFav = () => {
    return favoritesMap?.some((photo) => photo.id === selectedPhoto.id)
      ? "text-sky-800 hover:text-sky-600 "
      : "text-red-800 hover:text-red-600";
  };

  useEffect(() => {
    handleLoading();
  }, [favoritesMap, selectedPhoto.id]);
  return (
    <div className="h-full w-full flex-col bg-opacity-95 bg-black flex justify-center items-center fixed top-0 left-0 p-4 lg:p-20 ">
      {loading ? (
        <LoadingPhoto />
      ) : (
        <div>
          <div>
            <div className="flex justify-center gap-4 ">
              <Button
                variant={"secondary"}
                onClick={() => setImgOriginal(false)}
                disabled={!imgOriginal}
              >
                Landscape
              </Button>
              <Button
                variant={"secondary"}
                onClick={() => setImgOriginal(true)}
                disabled={imgOriginal}
              >
                Original
              </Button>
            </div>
          </div>

          <div className="flex flex-col     lg:space-y-4 ">
            <div className="flex items-center gap-2 justify-between my-4">
              {" "}
              <div className="bg-black rounded-full p-1 opacity-75">
                <SlLike
                  size="30"
                  onClick={() => {
                    newFav();
                  }}
                  className={` ${photoExistToFav()}  cursor-pointer transition-all`}
                />
              </div>
              <CgClose
                onClick={() => setOpen(false)}
                size="30"
                className=" text-white  cursor-pointer hover:bg-red-800 transition-all shadow-2xl hover:rounded-full "
              />{" "}
            </div>
            {imgOriginal ? (
              <img
                src={srcLarge}
                alt={alt}
                className={`rounded-lg border border-gray-800 ${changeColor} transition-all w-auto h-auto max-h-96 lg:max-h-[600px]  object-contain`}
              />
            ) : (
              <img
                src={srcLandscape}
                alt={alt}
                className={`rounded-lg border object-center border-gray-800 ${changeColor} transition-all`}
              />
            )}
          </div>
          <ColorButton setChangeColor={setChangeColor} />
        </div>
      )}
    </div>
  );
}

const LoadingPhoto = () => {
  return (
    <div className="loading">
      <svg width="64px" height="48px">
        <polyline
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          id="back"
        ></polyline>
        <polyline
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          id="front"
        ></polyline>
      </svg>
    </div>
  );
};
export default ModalPhoto;
