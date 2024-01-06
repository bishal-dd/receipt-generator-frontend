import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ImageUpload from "./Inputs/imageUpload/ImageUpload";
import TextBox from "../../atoms/textboxes/TextBox";
import CompanyDetail from "./Inputs/CompanyDetail";
import TypeTrackDate from "./Inputs/TypeTrackDate";
import PreviewImage from "./Inputs/imageUpload/PreviewImage";
import UploadTextBox from "./Inputs/imageUpload/UploadTextBox";
import ImageContainer from "./Inputs/imageUpload/ImageContainer";

interface Props {
  type: string;
}
const Layout: React.FC<Props> = ({ type }) => {
  return (
    <SimpleGrid columns={3} spacingX="40px">
      <Box>
        <UploadTextBox />
        <ImageContainer />
      </Box>
      <Box>
        <CompanyDetail />
      </Box>
      <Box>
        <TypeTrackDate type={type} />
      </Box>
    </SimpleGrid>
  );
};

export default Layout;
