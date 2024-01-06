"use client";
import Button from "@/src/components/atoms/buttons/Button";
import React, { useCallback } from "react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import useCreateDetailRow from "../../hooks/useCreateDetailRow";

const AddDetailRowButton = () => {
  const { createDetailRow } = useCreateDetailRow();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      e.preventDefault();
      createDetailRow();
    },
    [createDetailRow]
  );
  return <Button leftIcon={<PlusSquareIcon />} onClick={handleClick}></Button>;
};

export default AddDetailRowButton;
