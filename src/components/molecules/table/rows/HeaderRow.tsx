import React from "react";
import { Tr, Th } from "@chakra-ui/react";
import AddDetailRowButton from "./detailRow/AddDetailRowButton";
import RemoveDetailRowButton from "./detailRow/RemoveDetailRowButton";
const HeaderRow = () => {
  return (
    <Tr>
      <Th>
        Description
        <AddDetailRowButton />
        <RemoveDetailRowButton />
      </Th>
      <Th>Rate</Th>
      <Th>Quantity</Th>
      <Th>Amount</Th>
    </Tr>
  );
};

export default HeaderRow;
