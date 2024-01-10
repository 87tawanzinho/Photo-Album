"use client";
import axios from "axios";
import { PageContext } from "../context/PageContext";
import { useContext } from "react";

export default async function GetImg(page: number) {
  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/curated?page=${page}&per_page=20`,
      {
        headers: {
          Authorization:
            "CXW9hZzSn897bmlNjJFOtD7Zn0rDCv5rKpmSFo8ppS87R9eTN1JDGUM0",
        },
      }
    );
    return response;
  } catch (e) {
    console.log(e);
  }
}
