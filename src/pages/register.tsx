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
  FormErrorIcon,
  useToast
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import logoImage from '../images/topsun.png';
import api from '../utils/axios';

type RegisterForm = {
  name: string;
  surname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  registerCode: string;
};

export default function RegisterPage() {
  const router = useRouter();
  const toast = useToast();
  const { registerCode } = router.query;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<RegisterForm>();

  const handleRegister = handleSubmit((data) => {
    setIsLoading(true);

    api
      .post('/user/create', data)
      .then(() => {
        toast({
          title: 'Sucesso!',
          description: 'Você será redirecionado para a página de login.',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        });

        setTimeout(() => {
          setIsLoading(false);

          router.push('/');
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

  useEffect(() => {
    setValue('registerCode', registerCode as string);
  }, [registerCode]);

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Flex maxW="xl" w="full" gap={8} mx="auto" py={12} px={6} direction="column" align="center">
        <Box position="relative" width={110.74} height={62}>
          <Image src={logoImage} alt="TOPSUN Energia Solar" layout="fill" objectFit="contain" />
        </Box>
        <Box w="full" rounded="lg" bg="white" p={8}>
          <form onSubmit={handleRegister}>
            <Stack spacing={4}>
              <Flex gap={4} flexDir={{ base: 'column', md: 'row' }}>
                <FormControl id="name" isInvalid={errors.name && true}>
                  <FormLabel>Nome</FormLabel>
                  <Input type="name" {...register('name', { required: true })} />
                  <FormErrorMessage>
                    <FormErrorIcon />
                    {errors.name?.type === 'required' && 'Campo não preenchido'}
                  </FormErrorMessage>
                </FormControl>
                <FormControl id="surname" isInvalid={errors.surname && true}>
                  <FormLabel>Sobrenome</FormLabel>
                  <Input type="surname" {...register('surname', { required: true })} />
                  <FormErrorMessage>
                    <FormErrorIcon />
                    {errors.surname?.type === 'required' && 'Campo não preenchido'}
                  </FormErrorMessage>
                </FormControl>
              </Flex>
              <FormControl id="email" isInvalid={errors.email && true}>
                <FormLabel>Endereço de email</FormLabel>
                <Input
                  type="email"
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
              <FormControl id="password" isInvalid={errors.password && true}>
                <FormLabel>Senha</FormLabel>
                <Input type="password" {...register('password', { required: true })} />
                <FormErrorMessage>
                  <FormErrorIcon />
                  {errors.password?.type === 'required' && 'Campo não preenchido'}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="passwordConfirm" isInvalid={errors.passwordConfirm && true}>
                <FormLabel>Confirmação de senha</FormLabel>
                <Input type="password" {...register('passwordConfirm', { required: true })} />
                <FormErrorMessage>
                  <FormErrorIcon />
                  {errors.passwordConfirm?.type === 'required' && 'Campo não preenchido'}
                </FormErrorMessage>
              </FormControl>
              <FormControl id="registerCode" isInvalid={errors.registerCode && true} isDisabled>
                <FormLabel>Código de registro</FormLabel>
                <Input type="registerCode" {...register('registerCode', { required: true })} />
                <FormErrorMessage>
                  <FormErrorIcon />
                  {errors.registerCode?.type === 'required' && 'Campo não preenchido'}
                </FormErrorMessage>
              </FormControl>
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
                  Registrar
                </Button>
                <Link href="/" passHref>
                  <ChakraLink color="brand.400">Voltar ao login</ChakraLink>
                </Link>
              </Flex>
            </Stack>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'set-jwt': token } = parseCookies(ctx);

  if (token) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    };
  }
  return {
    props: {}
  };
};
