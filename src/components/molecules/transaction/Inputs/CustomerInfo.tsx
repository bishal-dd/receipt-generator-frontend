import React from "react";
import { Text } from "@chakra-ui/react";
import TextBox from "@/src/components/atoms/textboxes/TextBox";

const CustomerInfo: React.FC = () => {
  return (
    <>
      <Text fontWeight="bold">Received From:</Text>
      <TextBox placeholder="Name" />
      <TextBox type="tel" placeholder="Phone" mt={4} />
    </>
  );
};

export default CustomerInfo;
