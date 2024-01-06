"use client";
import React, { useCallback } from "react";
import TextBox from "../../../../atoms/textboxes/TextBox";
import { useImageUpload } from "./useImageUpload";

const UploadTextBox = () => {
  const { createImage } = useImageUpload();

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile) {
        const imageUrl = URL.createObjectURL(selectedFile);
        createImage(imageUrl);
      }
    },
    [createImage]
  );
  return (
    <TextBox
      type="file"
      sx={{ visibility: "hidden" }}
      id="company_image"
      onChange={handleImageChange}
    />
  );
};

export default UploadTextBox;
