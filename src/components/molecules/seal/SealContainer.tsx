"use client";
import React from "react";
import { useSealUpload } from "./useSealUpload";
import ImageUpload from "../header/Inputs/imageUpload/ImageUpload";
import PreviewImage from "../header/Inputs/imageUpload/PreviewImage";

const SealContainer = () => {
  const { seal } = useSealUpload();
  return seal ? (
    <PreviewImage image={seal} id="company_seal" />
  ) : (
    <ImageUpload label="Upload Company Seal" id="company_seal" />
  );
};

export default SealContainer;
