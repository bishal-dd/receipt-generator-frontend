"use client";
import React from "react";
import { useSignatureImageURL } from "./useSignatureImageURL";
import { Box, Image } from "@chakra-ui/react";
import ClearSignatureImageButton from "./ClearSignatureImageButton";
import SignatureImage from "./SignatureImage";

const SignatureImageLayout = () => {
  const { imageURL } = useSignatureImageURL();
  return imageURL ? (
    <Box>
      <SignatureImage ImageURL={imageURL} />
      <ClearSignatureImageButton />
    </Box>
  ) : null;
};

export default SignatureImageLayout;
