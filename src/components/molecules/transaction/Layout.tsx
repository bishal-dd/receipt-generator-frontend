import React from "react";
import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import TextBox from "../../atoms/textboxes/TextBox";
import CustomerInfo from "./Inputs/CustomerInfo";
import Amount from "./Inputs/Amount";
import PaymentMode from "./Inputs/PaymentMode";

interface Props {
  type: string;
}
const Layout: React.FC<Props> = ({ type }) => {
  return (
    <SimpleGrid columns={3} spacingX="40px" spacingY="20px">
      <Box p={4}>
        <CustomerInfo />
      </Box>
      <Box p={4}>
        <Amount />
      </Box>
      <Box p={4}>
        <PaymentMode />
      </Box>
    </SimpleGrid>
  );
};

export default Layout;
