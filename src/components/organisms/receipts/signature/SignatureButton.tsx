"use client";
import Button from "@/src/components/atoms/buttons/Button";
import React, { useCallback } from "react";
import { useSignatureModal } from "@/src/components/molecules/signatureModal/useSignatureModal";

const SignatureButton = () => {
  const { onOpen } = useSignatureModal();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      e.preventDefault();
      onOpen();
    },
    [onOpen]
  );
  return <Button onClick={handleClick}>Sign Here</Button>;
};

export default SignatureButton;
