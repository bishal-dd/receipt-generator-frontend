import React from "react";
import { FormErrorMessage, FormErrorMessageProps } from "@chakra-ui/react";

const ErrorText: React.FC<FormErrorMessageProps> = (props) => {
  return <FormErrorMessage fontSize="sm" {...props} />;
};

export default ErrorText;
