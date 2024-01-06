import React, { useCallback } from "react";
import { useSignatureImageURL } from "./useSignatureImageURL";
import Button from "@/src/components/atoms/buttons/Button";

const ClearSignatureImageButton = () => {
  const { clearImageURL } = useSignatureImageURL();

  const handleClick = useCallback(() => {
    clearImageURL();
  }, [clearImageURL]);
  return <Button onClick={handleClick}>Clear Sign</Button>;
};

export default ClearSignatureImageButton;
