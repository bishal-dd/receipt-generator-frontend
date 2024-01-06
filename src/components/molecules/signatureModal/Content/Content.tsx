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
import { useSignatureImageURL } from "../signatureImage/useSignatureImageURL";
import { Box, Divider } from "@chakra-ui/react";
import Button from "@/src/components/atoms/buttons/Button";
import { useSignatureModal } from "../useSignatureModal";

const Content = () => {
  const { createImageURL } = useSignatureImageURL();
  const { onClose } = useSignatureModal();
  const signatureRef = useRef<ReactSignatureCanvas>(null);

  const clearSignature = useCallback(() => {
    signatureRef.current?.clear();
  }, []);

  const saveSignature = useCallback(() => {
    const drawingData = signatureRef.current?.toData();
    if (drawingData && drawingData.length > 0) {
      const dataURL = signatureRef.current?.toDataURL();
      if (dataURL) {
        createImageURL(dataURL);
        onClose();
      }
    }
  }, [createImageURL, onClose]);

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
