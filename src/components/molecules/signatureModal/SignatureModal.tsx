import React from "react";
import { Modal, ModalOverlay } from "../../organisms/Modal";
import { useSignatureModal } from "./useSignatureModal";
import Content from "./Content/Content";

const SignatureModal = () => {
  const { isOpen, onClose } = useSignatureModal();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      {isOpen && <Content />}
    </Modal>
  );
};

export default SignatureModal;
