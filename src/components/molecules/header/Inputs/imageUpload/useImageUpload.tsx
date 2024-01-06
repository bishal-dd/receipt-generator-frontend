"use client";
import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

const key = (str: string) =>
  `src/components/molecules/header/Inputs/imageUpload/useImageUpload/${str}`;

const state = atom({
  key: key("uploadImageState"),
  default: "",
});

export const useImageUpload = () => {
  const [image, setImage] = useRecoilState(state);

  const createImage = useCallback(
    (ImageURL: string) => {
      setImage(ImageURL);
    },
    [setImage]
  );

  const clearImage = useCallback(() => {
    setImage("");
  }, [setImage]);

  return {
    image,
    createImage,
    clearImage,
  };
};
