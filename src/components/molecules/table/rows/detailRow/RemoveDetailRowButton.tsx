"use client";
import React from "react";
import { MinusIcon } from "@chakra-ui/icons";
import useCreateDetailRow from "../../hooks/useCreateDetailRow";
import Button from "@/src/components/atoms/buttons/Button";

const RemoveDetailRowButton = () => {
  const { removeDetailRow } = useCreateDetailRow();
  return <Button leftIcon={<MinusIcon />} onClick={removeDetailRow}></Button>;
};

export default RemoveDetailRowButton;
