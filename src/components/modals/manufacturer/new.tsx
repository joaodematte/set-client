import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack
} from '@chakra-ui/react';

type TNewManufacturerModal = {
  isOpen: boolean;
  onClose: () => void;
};

export default function NewManufacturerModal({ isOpen, onClose }: TNewManufacturerModal) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cadastrar novo fabricante</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <FormControl>
              <FormLabel htmlFor="first-name">Nome do fabricante</FormLabel>
              <Input id="first-name" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="first-name">Tipo(s) de produto(s)</FormLabel>
              <Input id="first-name" />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Finalizar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
