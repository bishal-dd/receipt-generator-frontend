import React from "react";
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

type Props = ChakraButtonProps;

const Button: React.FC<Props> = ({ ...rest }) => {
  return <ChakraButton {...rest} />;
};

export default Button;
