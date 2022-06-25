import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';

export default function ManufacturersPage() {
  return (
    <Box>
      <Heading fontSize="xl">Fabricantes</Heading>
      <Text>Cadastre fabricantes para poder cadastrar módulos e ou inversores</Text>

      <TableContainer mt={8}>
        <Table variant="simple">
          <TableCaption>Listagem de fabricantes</TableCaption>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Tipo(s) de produto(s)</Th>
              <Th isNumeric />
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Astra Solar</Td>
              <Td>
                <HStack>
                  <Badge variant="subtle" colorScheme="yellow">
                    Inversores
                  </Badge>
                  <Badge variant="subtle" colorScheme="purple">
                    Módulos
                  </Badge>
                </HStack>
              </Td>
              <Td isNumeric>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Ações
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Editar</MenuItem>
                    <MenuItem>Excluir</MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
