import React from "react";
import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import TextBox from "@/src/components/atoms/textboxes/TextBox";

const CompanyDetail: React.FC = () => {
  return (
    <>
      <Box p={2}>
        <Center>
          <TextBox placeholder="Company Name" />
        </Center>
      </Box>

      <Box p={2}>
        <Center>
          <TextBox type="Email" placeholder="Email" />
        </Center>
      </Box>
      <Box p={2}>
        <Center>
          <TextBox type="tel" placeholder="Phone Number" />
        </Center>
      </Box>
      <Box p={2}>
        <Center>
          <TextBox placeholder="Address" />
        </Center>
      </Box>
      <Box p={2}>
        <Center>
          <TextBox placeholder="City, State" />
        </Center>
      </Box>
    </>
  );
};

export default CompanyDetail;
