import React from "react";
import { ChakraProvider, FormControl } from "@chakra-ui/react";

export function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
