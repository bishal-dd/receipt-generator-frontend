"use client";
import React from "react";
import TextBox from "../../../atoms/textboxes/TextBox";
import Label from "../../../atoms/labels/Label";
import { Box, Flex, SimpleGrid, Text, Center } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const ImageUpload = () => {
  return (
    <Box>
      <Label
        htmlFor="company_image"
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
            <Text>Upload Logo</Text>
          </Box>
        </SimpleGrid>
      </Label>
      <TextBox type="file" sx={{ visibility: "hidden" }} id="company_image" />
    </Box>
  );
};

export default ImageUpload;
