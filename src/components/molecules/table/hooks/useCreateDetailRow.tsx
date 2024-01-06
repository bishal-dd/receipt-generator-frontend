"use client";
import React, { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

const key = (str: string) =>
  `src/components/molecules/table/hooks/useCreateDetailRow/${str}`;

const state = atom({
  key: key("detailRowState"),
  default: 1,
});

const useCreateDetailRow = () => {
  const [detailRowCount, setDetailRowCount] = useRecoilState(state);

  const createDetailRow = useCallback(() => {
    setDetailRowCount(detailRowCount + 1);
  }, [detailRowCount, setDetailRowCount]);

  const removeDetailRow = useCallback(() => {
    setDetailRowCount((prevCount) => Math.max(prevCount - 1, 1));
  }, [setDetailRowCount]);

  return {
    detailRowCount,
    removeDetailRow,
    createDetailRow,
  };
};

export default useCreateDetailRow;
