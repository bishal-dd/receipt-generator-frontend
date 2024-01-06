"use client";
import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

const key = (str: string) =>
  `src/components/molecules/seal/useSealUpload/${str}`;

const state = atom({
  key: key("uploadSealState"),
  default: "",
});

export const useSealUpload = () => {
  const [seal, setSeal] = useRecoilState(state);

  const createSeal = useCallback(
    (SealURL: string) => {
      setSeal(SealURL);
    },
    [setSeal]
  );

  const clearSeal = useCallback(() => {
    setSeal("");
  }, [setSeal]);

  return {
    seal,
    createSeal,
    clearSeal,
  };
};
