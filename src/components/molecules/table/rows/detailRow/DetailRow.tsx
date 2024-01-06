"use client";
import React from "react";

import useCreateDetailRow from "../../hooks/useCreateDetailRow";
import DetailRowItem from "./DetailRowItem";
const DetailRow = () => {
  const { createDetailRow, detailRowCount } = useCreateDetailRow();
  const rows = Array.from({ length: detailRowCount }, (_, index) => (
    <DetailRowItem key={index} />
  ));
  return <>{rows}</>;
};

export default DetailRow;
