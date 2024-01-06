"use client";
import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

const key = (str: string) =>
  `src/components/molecules/signatureModal/Content/useSignatureImageURL/${str}`;

const state = atom({
  key: key("signatureImageState"),
  default: "",
});

export const useSignatureImageURL = () => {
  const [imageURL, setImageURL] = useRecoilState(state);

  const createImageURL = useCallback(
    (ImageURL: string) => {
      setImageURL(ImageURL);
    },
    [setImageURL]
  );

  const clearImageURL = useCallback(() => {
    setImageURL("");
  }, [, setImageURL]);

  return {
    imageURL,
    createImageURL,
    clearImageURL,
  };
};
