import { Button } from "@/components/ui/button";
import React from "react";

function MyFavorites({ isGoFavorite, setIsGoFavorite }: any) {
  return (
    <Button variant={"default"} onClick={() => setIsGoFavorite(!isGoFavorite)}>
      {isGoFavorite ? "All Photos" : "MyFavorites"}
    </Button>
  );
}

export default MyFavorites;
