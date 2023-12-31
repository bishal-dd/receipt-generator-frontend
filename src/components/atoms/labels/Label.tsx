import { FormLabel, FormLabelProps } from "@chakra-ui/react";
import React from "react";

const Label: React.FC<FormLabelProps> = (props) => {
  return <FormLabel {...props}>First Name</FormLabel>;
};

export default Label;
