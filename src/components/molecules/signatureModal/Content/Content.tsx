import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@/src/components/organisms/Modal";
import React, { useCallback, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import ReactSignatureCanvas from "react-signature-canvas";
import { useSignatureImageURL } from "./useSignatureImageURL";
import { Box, Divider } from "@chakra-ui/react";
import Button from "@/src/components/atoms/buttons/Button";

const Content = () => {
  const { imageURL, createImageURL, clearImageURL } = useSignatureImageURL();
  const signatureRef = useRef<ReactSignatureCanvas>(null);

  const clearSignature = useCallback(() => {
    signatureRef.current?.clear();
  }, []);

  const saveSignature = useCallback(() => {
    const dataURL = signatureRef.current?.toDataURL();
    if (dataURL) {
      createImageURL(dataURL);
    }
  }, [createImageURL]);

  return (
    <ModalContent>
      <ModalHeader>Signature</ModalHeader>
      <ModalCloseButton />
      <Divider />
      <ModalBody display="flex" justifyContent="center">
        <SignatureCanvas
          ref={signatureRef}
          canvasProps={{
            width: 400,
            height: 300,
            className: "signature-canvas",
            style: { border: "2px solid black" },
          }}
        />
      </ModalBody>
      <Divider />
      <ModalFooter>
        <Button onClick={clearSignature}>Clear Signature</Button>
        <Button onClick={saveSignature}>Save Signature</Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default Content;
