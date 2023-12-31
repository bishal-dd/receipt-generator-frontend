import React from "react";
import { Box, Divider, SimpleGrid } from "@chakra-ui/react";
import HeaderContainer from "./header/HeaderContainer";
import TransactionContainer from "./transaction/TransactionContainer";
import DetailTableContainer from "./detailTable/DetailTableContainer";
import SignatureButton from "./signature/SignatureButton";
import SignatureImageContainer from "./signature/SignatureImageContainer";
import Title from "./titleofSign/Title";
import SealUploadContainer from "./sealUpload/SealUploadContainer";

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
      <Box>
        <DetailTableContainer />
      </Box>
      <Box>
        <SignatureButton />
      </Box>
      <Box>
        <SignatureImageContainer />
      </Box>
      <Box>
        <Title />
      </Box>
      <Box>
        <SealUploadContainer />
      </Box>
    </SimpleGrid>
  );
};

export default Layout;
