import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link as ChakraLink,
  Button,
  FormErrorMessage
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import logoImage from '../images/topsun.png';

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>();

  const handleLogin = handleSubmit((data) => console.log(data));

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Flex maxW="xl" w="full" gap={8} mx="auto" py={12} px={6} direction="column" align="center">
        <Image src={logoImage} layout="fixed" />
        <Box w="full" rounded="lg" bg="white" p={8}>
          <form onSubmit={handleLogin}>
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
                  {errors.email?.type === 'required' && 'Campo não preenchido'}
                  {errors.email?.type === 'pattern' && 'Formato inválido'}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="senha" isInvalid={errors.password && true}>
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  id="password"
                  placeholder="********"
                  {...register('password', { required: true })}
                />
                <FormErrorMessage>{errors.email?.type === 'required' && 'Campo não preenchido'}</FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Stack direction={{ base: 'column', sm: 'row' }} align="start" justify="space-between">
                  <Checkbox>Manter conectado</Checkbox>
                  <ChakraLink color="blue.400">Esqueceu sua senha?</ChakraLink>
                </Stack>
                <Flex flexDirection="column" align="center" gap={2}>
                  <Button
                    type="submit"
                    bg="blue.400"
                    w="full"
                    color="white"
                    _hover={{
                      bg: 'blue.500'
                    }}
                  >
                    Entrar
                  </Button>
                  <Link href="/register" passHref>
                    <ChakraLink color="blue.400">Registre-se</ChakraLink>
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
