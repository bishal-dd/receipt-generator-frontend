import React from "react";
import { Text } from "@chakra-ui/react";
import TextBox from "@/src/components/atoms/textboxes/TextBox";

const Amount: React.FC = () => {
  return (
    <>
      <Text fontWeight="bold">Amount Received:</Text>
      <TextBox type="number" placeholder="Amount" />
    </>
  );
};

export default Amount;
