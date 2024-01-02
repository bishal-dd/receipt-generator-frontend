import React from "react";
import { Text } from "@chakra-ui/react";
import TextBox from "@/src/components/atoms/textboxes/TextBox";
import { Select } from "@chakra-ui/react";
const PaymentMode: React.FC = () => {
  return (
    <>
      <Text fontWeight="bold">Payment:</Text>
      <Select>
        <option value="option1" defaultChecked>
          Bank Transfer
        </option>
        <option value="option2">Cash</option>
      </Select>
      <TextBox type="number" placeholder="Jrnl" mt={4} />
    </>
  );
};

export default PaymentMode;
