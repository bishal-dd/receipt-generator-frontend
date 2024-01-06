import React from "react";
import { Tr, Td } from "@chakra-ui/react";

const TotalAmountRow = () => {
  return (
    <Tr>
      <Td colSpan={2}></Td>
      <Td>Total Amount:</Td>
      <Td></Td>
    </Tr>
  );
};

export default TotalAmountRow;
