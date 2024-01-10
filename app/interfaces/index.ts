import { Dispatch, SetStateAction } from "react";

export interface myImgs {
  id: string;
  photographer: string;
  width: number;
  height: number;
  alt: string;
  src: any;
}

export interface PageContextType {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  favoritesMap: myImgs[] | undefined;
  setFavoritesMap: any;
}

export interface ModalPhoto {
  selectedPhoto: myImgs;
  alt: string;
  srcLarge: string;
  srcLandscape: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
