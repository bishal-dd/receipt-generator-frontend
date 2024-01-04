import React from "react";
import { Tr, Td } from "@chakra-ui/react";
import TextBox from "../../atoms/textboxes/TextBox";
const Row = () => {
  return (
    <Tr>
      <Td>
        <TextBox />
      </Td>
      <Td>
        <TextBox />
      </Td>
      <Td>
        <TextBox />
      </Td>
      <Td>
        <TextBox />
      </Td>
    </Tr>
  );
};

export default Row;
