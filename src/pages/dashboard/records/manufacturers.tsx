import { AddIcon, ChevronDownIcon } from '@chakra-ui/icons';
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
  Tr,
  useDisclosure
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import NewManufacturerModal from '../../../components/modals/manufacturer/new';

export default function ManufacturersPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Heading fontSize="xl">Fabricantes</Heading>
        <Text>Cadastre fabricantes para poder cadastrar módulos e ou inversores</Text>

        <Button mt={8} leftIcon={<AddIcon />} onClick={onOpen}>
          Cadastrar novo
        </Button>

        <TableContainer mt={4}>
          <Table variant="simple" size="sm">
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

      <NewManufacturerModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'set-jwt': token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
  return {
    props: {}
  };
};
