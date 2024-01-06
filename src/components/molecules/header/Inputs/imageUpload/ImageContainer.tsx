"use client";
import React from "react";
import { useImageUpload } from "./useImageUpload";
import PreviewImage from "./PreviewImage";
import ImageUpload from "./ImageUpload";

const ImageContainer = () => {
  const { image } = useImageUpload();
  return image ? (
    <PreviewImage image={image} id="company_image" />
  ) : (
    <ImageUpload label="Upload Company Logo" id="company_image" />
  );
};

export default ImageContainer;
