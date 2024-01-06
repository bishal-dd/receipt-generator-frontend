"use client";
import Button from "@/src/components/atoms/buttons/Button";
import React from "react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import useCreateDetailRow from "../../hooks/useCreateDetailRow";

const AddDetailRowButton = () => {
  const { createDetailRow } = useCreateDetailRow();

  return (
    <Button leftIcon={<PlusSquareIcon />} onClick={createDetailRow}></Button>
  );
};

export default AddDetailRowButton;
