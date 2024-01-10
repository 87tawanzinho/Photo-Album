import React, { Dispatch, SetStateAction } from "react";

type ColorButtonProps = {
  setChangeColor: Dispatch<SetStateAction<string>>;
};

function ColorButton({ setChangeColor }: ColorButtonProps) {
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

  return (
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
  );
}

export default ColorButton;
