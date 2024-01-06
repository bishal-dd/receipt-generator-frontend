"use client";
import React, { useCallback } from "react";
import { useSealUpload } from "./useSealUpload";
import TextBox from "../../atoms/textboxes/TextBox";

const UploadSealTextBox = () => {
  const { createSeal } = useSealUpload();

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile) {
        const imageUrl = URL.createObjectURL(selectedFile);
        createSeal(imageUrl);
      }
    },
    [createSeal]
  );
  return (
    <TextBox
      type="file"
      sx={{ visibility: "hidden" }}
      id="company_seal"
      onChange={handleImageChange}
    />
  );
};

export default UploadSealTextBox;
