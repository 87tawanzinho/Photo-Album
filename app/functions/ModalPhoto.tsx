"use client";
import React, { useContext, useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { ModalPhoto, myImgs } from "../interfaces";
import { Button } from "@/components/ui/button";
import { SlLike } from "react-icons/sl";
import { PageContext } from "../context/PageContext";
function ModalPhoto({
  selectedPhoto,
  srcLarge,
  srcLandscape,
  alt,
  setOpen,
}: ModalPhoto) {
  const { favoritesMap, setFavoritesMap } = useContext(PageContext);

  const [imgOriginal, setImgOriginal] = useState(true);
  const [changeColor, setChangeColor] = useState("");
  const [loading, setIsLoading] = useState(true);
  const handleColor = (color: string) => {
    if (color === "") {
      return setChangeColor("");
    }
    if (color === "gray") {
      return setChangeColor("grayscale");
    }

    if (color === "sepia") {
      return setChangeColor("sepia");
    }
    if (color === "rotate") {
      return setChangeColor("hue-rotate-90");
    }
  };

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
      ? "bg-sky-800 hover:bg-sky-600"
      : "bg-red-800 hover:bg-red-600";
  };

  useEffect(() => {
    handleLoading();
  }, [favoritesMap, selectedPhoto.id]);
  return (
    <div className="h-full w-full flex-col bg-opacity-95 bg-black flex justify-center items-center fixed top-0 left-0 p-4 lg:p-20 ">
      {loading ? (
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

          <div className="flex flex-col    lg:space-y-4 ">
            <div className="flex items-center gap-2 justify-between my-4">
              {" "}
              <SlLike
                size="30"
                onClick={() => {
                  newFav();
                }}
                className={`text-white rounded-full ${photoExistToFav()}  cursor-pointer transition-all`}
              />
              <CgClose
                onClick={() => setOpen(false)}
                size="30"
                className=" text-white cursor-pointer hover:bg-red-800 transition-all shadow-2xl hover:rounded-full "
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
          <div className="mt-4 flex gap-2 justify-center items-center">
            <div className="flex gap-2">
              <p
                className={`rounded-full bg-white w-8 h-8 cursor-pointer transition-all`}
                onClick={() => handleColor("")}
              ></p>
              <p
                className={`rounded-full bg-gray-500 w-8 h-8 cursor-pointer hover:bg-gray-700 transition-all`}
                onClick={() => handleColor("gray")}
              ></p>
              <p
                className={`rounded-full bg-yellow-500 w-8 h-8 cursor-pointer hover:bg-yellow-700 transition-all`}
                onClick={() => handleColor("sepia")}
              ></p>

              <p
                className={`rounded-full bg-green-500 w-8 h-8 cursor-pointer hover:bg-green-700 transition-all`}
                onClick={() => handleColor("rotate")}
              ></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalPhoto;
