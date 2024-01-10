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
    if (page == 30) {
      return;
    }

    setPage((prev) => (prev += 1));
  };

  return (
    <div className="flex gap-4 fixed bottom-0 cursor-pointer bg-black text-white w-full p-2">
      <p onClick={handlePrev}>Pagina Anterior</p>
      <p>{page}</p>
      <p onClick={handleNext}>Proxima Pagina</p>
    </div>
  );
}

export default Pagination;
