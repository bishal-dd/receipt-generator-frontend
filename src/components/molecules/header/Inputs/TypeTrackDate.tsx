import React from "react";
import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import TextBox from "@/src/components/atoms/textboxes/TextBox";

interface Props {
  type: string;
}

const TypeTrackDate: React.FC<Props> = ({ type }) => {
  return (
    <>
      <Box p={2}>
        <Center>
          <TextBox value={type} textAlign={"center"} />
        </Center>
      </Box>
      <Box p={2}>
        <Center>
          <TextBox
            value={type ? "Receipt" : "Invoice"}
            isDisabled
            textAlign={"center"}
          />
        </Center>
      </Box>
      <Box p={2}>
        <Center>
          <TextBox type="date" textAlign={"center"} />
        </Center>
      </Box>
    </>
  );
};

export default TypeTrackDate;
