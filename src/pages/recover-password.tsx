import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link as ChakraLink,
  Button,
  FormErrorMessage,
  FormErrorIcon
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import logoImage from '../images/topsun.png';

type RecoverPasswordForm = {
  email: string;
};

export default function LostPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RecoverPasswordForm>();

  const handleRecoverPassword = handleSubmit((data) => console.log(data));

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Flex maxW="xl" w="full" gap={8} mx="auto" py={12} px={6} direction="column" align="center">
        <Box position="relative" width={110.74} height={62}>
          <Image src={logoImage} alt="TOPSUN Energia Solar" layout="fill" objectFit="contain" />
        </Box>
        <Box w="full" rounded="lg" bg="white" p={8}>
          <form onSubmit={handleRecoverPassword}>
            <Stack spacing={4}>
              <FormControl id="email" isInvalid={errors.email && true}>
                <FormLabel>Endereço de email</FormLabel>
                <Input
                  type="email"
                  id="email"
                  placeholder="engenhariaxx@topsun.com.br"
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Formato inválido'
                    }
                  })}
                />
                <FormErrorMessage>
                  <FormErrorIcon />
                  {errors.email?.type === 'required' && 'Campo não preenchido'}
                  {errors.email?.type === 'pattern' && 'Formato inválido'}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Flex flexDirection="column" align="center" gap={2}>
                  <Link href="/dashboard" passHref>
                    <Button
                      type="submit"
                      bg="brand.400"
                      w="full"
                      color="white"
                      _hover={{
                        bg: 'brand.500'
                      }}
                    >
                      Enviar email
                    </Button>
                  </Link>
                  <Link href="/" passHref>
                    <ChakraLink color="brand.400">Voltar ao login</ChakraLink>
                  </Link>
                </Flex>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
}
