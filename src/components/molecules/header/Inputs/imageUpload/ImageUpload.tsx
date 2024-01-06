"use client";
import React from "react";
import Label from "../../../../atoms/labels/Label";
import { Box, SimpleGrid, Text, Center } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

type Props = {
  label: string;
  id: string;
};
const ImageUpload: React.FC<Props> = ({ label, id }) => {
  return (
    <Box>
      <Label
        htmlFor={id}
        bg="#e2e6e6"
        minH="150px"
        maxWidth="300px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="10px"
      >
        <SimpleGrid columns={1} spacingY="20px">
          <Box>
            <Center>
              <AddIcon boxSize={6} />
            </Center>
          </Box>
          <Box>
            <Text>{label}</Text>
          </Box>
        </SimpleGrid>
      </Label>
    </Box>
  );
};

export default ImageUpload;
