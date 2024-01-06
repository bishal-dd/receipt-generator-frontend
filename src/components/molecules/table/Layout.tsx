import React from "react";
import { Table, Thead, Tbody, TableContainer } from "@chakra-ui/react";
import DetailRow from "./rows/detailRow/DetailRow";
import TotalAmountRow from "./rows/TotalAmountRow";
import NetAmountRow from "./rows/NetAmountRow";
import HeaderRow from "./rows/HeaderRow";

const Layout: React.FC = () => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <HeaderRow />
          </Thead>
          <Tbody>
            <DetailRow />
            <TotalAmountRow />
            <NetAmountRow />
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Layout;
