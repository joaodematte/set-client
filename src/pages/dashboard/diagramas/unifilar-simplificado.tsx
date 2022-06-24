import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link as ChakraLink,
  Select,
  Stack,
  Text
} from '@chakra-ui/react';

export default function UnifilarSimplificadoPage() {
  return (
    <Box>
      <Heading fontSize="xl">Gerar diagrama unifilar simplificado</Heading>
      <Text>Preencha todos os dados corretamente e clique em gerar</Text>
      <ChakraLink color="blue.500">Clique aqui para acessar os logs</ChakraLink>

      <Stack mt={8}>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <FormControl>
            <FormLabel>Número do medidor</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl>
            <FormLabel>Capacidade do disjuntor</FormLabel>
            <Input type="text" />
          </FormControl>
        </Stack>

        <FormControl>
          <FormLabel>Tipo de ligação</FormLabel>
          <Select placeholder="Selecione uma opção...">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>

        <Stack direction={{ base: 'column', md: 'row' }}>
          <FormControl>
            <FormLabel>Quantidade de módulos</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl>
            <FormLabel>Fabricante dos módulos</FormLabel>
            <Select placeholder="Selecione uma opção...">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
        </Stack>

        <Stack direction={{ base: 'column', md: 'row' }}>
          <FormControl>
            <FormLabel>Modelo do módulo</FormLabel>
            <Select placeholder="Selecione uma opção...">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Potência do módulo</FormLabel>
            <Select placeholder="Selecione uma opção...">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
        </Stack>

        <FormControl>
          <FormLabel>Quantidade de inversores</FormLabel>
          <Select placeholder="Selecione uma opção...">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Modelo do inversor 1</FormLabel>
          <Select placeholder="Selecione uma opção...">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>

        <Button colorScheme="brand">Gerar PDF</Button>
      </Stack>
    </Box>
  );
}
