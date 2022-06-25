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
  FormErrorMessage,
  FormErrorIcon,
  useToast
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TUserContext, UserContext } from '../contexts/UserContext';

import logoImage from '../images/topsun.png';
import api from '../utils/axios';

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
  const toast = useToast();

  const { saveJWTCookie } = useContext(UserContext) as TUserContext;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = handleSubmit((data) => {
    setIsLoading(true);
    api
      .post('/auth/create', data)
      .then((res) => {
        toast({
          title: 'Sucesso!',
          description: 'Você será redirecionado para o dashboard',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        });

        saveJWTCookie(res.data.user);

        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      })
      .catch((error) => {
        setIsLoading(false);
        toast({
          title: 'Erro!',
          description: error.response.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        });
      });
  });

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Flex maxW="xl" w="full" gap={8} mx="auto" py={12} px={6} direction="column" align="center">
        <Box position="relative" width={110.74} height={62}>
          <Image src={logoImage} alt="TOPSUN Energia Solar" layout="fill" objectFit="contain" />
        </Box>
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
                  <FormErrorIcon />
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
                <FormErrorMessage>
                  <FormErrorIcon />
                  {errors.password?.type === 'required' && 'Campo não preenchido'}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Stack direction={{ base: 'column', sm: 'row' }} align="start" justify="space-between">
                  <Checkbox>Manter conectado</Checkbox>
                  <Link href="/recover-password">
                    <ChakraLink color="brand.400">Esqueceu sua senha?</ChakraLink>
                  </Link>
                </Stack>
                <Flex flexDirection="column" align="center" gap={2}>
                  <Button
                    type="submit"
                    bg="brand.400"
                    w="full"
                    color="white"
                    _hover={{
                      bg: 'brand.500'
                    }}
                    isLoading={isLoading}
                  >
                    Entrar
                  </Button>
                  <Link href="/register?registerCode=80f34bc5e992" passHref>
                    <ChakraLink color="brand.400">Registre-se</ChakraLink>
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
