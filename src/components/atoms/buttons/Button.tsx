import React from "react";
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

interface AdditionalProps {
  buttonLabel: string;
}

type Props = ChakraButtonProps & AdditionalProps;

const Button: React.FC<Props> = ({ buttonLabel, ...rest }) => {
  return <ChakraButton {...rest}>{buttonLabel}</ChakraButton>;
};

export default Button;
