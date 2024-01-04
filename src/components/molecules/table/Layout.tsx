import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import Row from "./Row";

const Layout: React.FC = () => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Description</Th>
              <Th>Rate</Th>
              <Th>Quantity</Th>
              <Th>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Row />
            <Tr>
              <Td colSpan={2}></Td>
              <Td>Total Amount:</Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td colSpan={2}></Td>
              <Td>Net Amount</Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Layout;
