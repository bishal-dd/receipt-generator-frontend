"use client";
import React, { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

const key = (str: string) =>
  `src/components/molecules/table/hooks/useCreateDetailRow.tsx/${str}`;

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
    setDetailRowCount(detailRowCount - 1);
  }, [detailRowCount, setDetailRowCount]);

  return {
    detailRowCount,
    removeDetailRow,
    createDetailRow,
  };
};

export default useCreateDetailRow;
