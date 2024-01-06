"use client";
import React from "react";
import { Image } from "@chakra-ui/react";

type Props = {
  ImageURL: string;
};
const SignatureImage: React.FC<Props> = ({ ImageURL }) => {
  return <Image src={ImageURL} alt="Signature" />;
};

export default SignatureImage;
