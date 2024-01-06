"use client";
import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

const key = (str: string) =>
  `src/components/molecules/signatureModal/useSignatureModal/${str}`;

const state = atom({
  key: key("modalState"),
  default: false,
});

export const useSignatureModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(state);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  return {
    isOpen,
    onOpen,
    onClose,
  };
};
