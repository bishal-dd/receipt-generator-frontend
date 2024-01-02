import React from "react";
import { Input, InputProps } from "@chakra-ui/react";

const TextBox: React.FC<InputProps> = (props) => {
  return <Input {...props} _placeholder={{ color: "gray.600" }} />;
};

export default TextBox;
