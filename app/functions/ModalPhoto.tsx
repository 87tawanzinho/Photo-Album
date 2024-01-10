"use client";
import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { ModalPhoto } from "../interfaces";
import { Button } from "@/components/ui/button";
import Loading from "@/components/loading";
function ModalPhoto({ srcLarge, srcLandscape, alt, setOpen }: ModalPhoto) {
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

  useEffect(() => {
    handleLoading();
  }, []);
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
          <div className="flex flex-col justify-center items-end">
            <CgClose
              onClick={() => setOpen(false)}
              size="30"
              className=" text-white cursor-pointer hover:bg-red-800 transition-all shadow-2xl hover:rounded-full mb-2"
            />{" "}
            {imgOriginal ? (
              <img
                src={srcLarge}
                alt={alt}
                className={`rounded-lg border border-gray-800 ${changeColor} transition-all w-auto h-auto max-h-full lg:max-h-[600px]  object-contain`}
              />
            ) : (
              <img
                src={srcLandscape}
                alt={alt}
                className={`rounded-lg border object-center border-gray-800 ${changeColor} transition-all`}
              />
            )}
          </div>
          <div className="mt-4 flex gap-2 justify-center">
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
      )}
    </div>
  );
}

export default ModalPhoto;
