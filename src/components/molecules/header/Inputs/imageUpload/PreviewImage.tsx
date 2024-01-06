"use client";
import React from "react";
import { Image } from "@chakra-ui/react";
import Label from "@/src/components/atoms/labels/Label";
import TextBox from "@/src/components/atoms/textboxes/TextBox";

type Props = {
  image: string;
  id: string;
};
const PreviewImage: React.FC<Props> = ({ image, id }) => {
  return (
    <>
      <Image src={image} alt="Preview" />
      <Label htmlFor={id}>Edit Photo</Label>
      <TextBox type="hidden" value={image} />
    </>
  );
};

export default PreviewImage;
