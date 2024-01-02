import React from "react";
import { Box, Divider, SimpleGrid } from "@chakra-ui/react";
import HeaderContainer from "./header/HeaderContainer";
import TransactionContainer from "./transaction/TransactionContainer";

const Layout = () => {
  return (
    <SimpleGrid bg="#ffffff" p={6} columns={1} spacingX="40px" spacingY="20px">
      <Box>
        <HeaderContainer />
      </Box>
      <Divider />
      <Box>
        <TransactionContainer />
      </Box>
      <Divider />
      <Box></Box>
    </SimpleGrid>
  );
};

export default Layout;
