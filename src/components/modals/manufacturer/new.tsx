import {
  Button,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useToast,
  VStack
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../utils/axios';

type TNewManufacturerModal = {
  isOpen: boolean;
  onClose: () => void;
};

type TNewManufacturerForm = {
  name: string;
  productsType: string;
};

export default function NewManufacturerModal({ isOpen, onClose }: TNewManufacturerModal) {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<TNewManufacturerForm>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNewManufacturer = handleSubmit((data) => {
    setIsLoading(true);

    api
      .post('/manufacturer/create', data)
      .then(() => {
        toast({
          title: 'Sucesso!',
          description: 'O fabricante foi criado com sucesso',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        });
        setIsLoading(false);
        onClose();
        reset();
      })
      .catch((error) => {
        toast({
          title: 'Erro!',
          description: error.response.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        });
        setIsLoading(false);
      });
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent>
        <form onSubmit={handleNewManufacturer}>
          <ModalHeader>Cadastrar novo fabricante</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <FormControl isInvalid={errors.name && true}>
                <FormLabel htmlFor="first-name">Nome do fabricante</FormLabel>
                <Input
                  id="first-name"
                  {...register('name', {
                    required: true
                  })}
                />
                <FormErrorMessage>
                  <FormErrorIcon />
                  {errors.name?.type === 'required' && 'Campo não preenchido'}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.productsType && true}>
                <FormLabel htmlFor="first-name">Tipo(s) de produto(s)</FormLabel>
                <Select
                  placeholder="Selecione uma opção..."
                  {...register('productsType', {
                    required: true
                  })}
                >
                  <option value="inversores">Inversores</option>
                  <option value="modulos">Módulos</option>
                  <option value="inversores,modulos">Inversores e módulos</option>
                </Select>
                <FormErrorMessage>
                  <FormErrorIcon />
                  {errors.productsType?.type === 'required' && 'Campo não preenchido'}
                </FormErrorMessage>
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3} isLoading={isLoading}>
              Finalizar
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
