import React, { useContext } from "react";
import { PageContext } from "../context/PageContext";

function Pagination() {
  const { page, setPage } = useContext(PageContext);
  console.log(page);

  const handlePrev = () => {
    if (page == 1) {
      return;
    }

    setPage((prev) => (prev -= 1));
  };

  const handleNext = () => {
    if (page == 80) {
      return;
    }

    setPage((prev) => (prev += 1));
  };

  return (
    <div className="flex gap-4 fixed bottom-0  bg-black text-gray-400 w-full p-2 ">
      <p onClick={handlePrev} className="cursor-pointer">
        {" "}
        {"< "}Pagina Anterior
      </p>
      <p className="cursor-progress font-bold text-white">[{page}]</p>
      <p onClick={handleNext} className="cursor-pointer">
        Proxima Pagina {" >"}
      </p>
    </div>
  );
}

export default Pagination;
