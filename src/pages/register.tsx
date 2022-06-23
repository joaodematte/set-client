import { Flex, Box, FormControl, FormLabel, Input, Stack, Link as ChakraLink, Button } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import logoImage from '../images/topsun.png';

export default function RegisterPage() {
  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Flex maxW="xl" w="full" gap={8} mx="auto" py={12} px={6} direction="column" align="center">
        <Image src={logoImage} layout="fixed" />
        <Box w="full" rounded="lg" bg="white" p={8}>
          <Stack spacing={4}>
            <Flex gap={4} flexDir={{ base: 'column', md: 'row' }}>
              <FormControl id="nome">
                <FormLabel>Nome</FormLabel>
                <Input type="nome" name="nome" />
              </FormControl>
              <FormControl id="sobrenome">
                <FormLabel>Sobrenome</FormLabel>
                <Input type="sobrenome" name="sobrenome" />
              </FormControl>
            </Flex>
            <FormControl id="email">
              <FormLabel>Endereço de email</FormLabel>
              <Input type="email" name="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input type="password" name="password" />
            </FormControl>
            <FormControl id="passwordConfirm">
              <FormLabel>Confirmação de senha</FormLabel>
              <Input type="passwordConfirm" name="passwordConfirm" />
            </FormControl>
            <FormControl id="codigoDeRegistro" isDisabled>
              <FormLabel>Código de registro</FormLabel>
              <Input type="codigoDeRegistro" name="codigoDeRegistro" />
            </FormControl>
            <Flex flexDirection="column" align="center" gap={2}>
              <Button
                bg="blue.400"
                w="full"
                color="white"
                _hover={{
                  bg: 'blue.500'
                }}
              >
                Registrar
              </Button>
              <Link href="/" passHref>
                <ChakraLink color="blue.400">Voltar ao login</ChakraLink>
              </Link>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
