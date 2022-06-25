import {
  Avatar,
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

import logoImage from '../../images/topsun.png';
import { TUserContext, UserContext } from '../../contexts/UserContext';

export default function Navbar() {
  const router = useRouter();
  const toast = useToast();
  const { isOpen, onToggle } = useDisclosure();

  const { destroySession } = useContext(UserContext) as TUserContext;

  const handleDestroySession = () => {
    destroySession();

    toast({
      title: 'Sucesso!',
      description: 'Sessão encerrada',
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top-right'
    });

    router.push('/');
  };

  return (
    <Box>
      <Flex
        bg="white"
        color="gray.600"
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor="gray.200"
        align="center"
        justifyContent="center"
      >
        <Box width="full" display="flex" maxW="6xl">
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
            alignItems="center"
          >
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant="ghost"
              aria-label="Toggle Navigation"
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Box position="relative" width={110.74} height={62} _hover={{ cursor: 'pointer' }}>
              <Link href="/dashboard">
                <Image src={logoImage} alt="TOPSUN Energia Solar" layout="fill" objectFit="contain" />
              </Link>
            </Box>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10} alignItems="center">
              <DesktopNavbar />
            </Flex>
          </Flex>

          <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row">
            <Menu>
              <MenuButton as={Button} rounded="full" variant="link" cursor="pointer" minW={0}>
                <Avatar
                  size="sm"
                  src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                />
              </MenuButton>
              <MenuList>
                <Link href="/dashboard" passHref>
                  <MenuItem>Configurações</MenuItem>
                </Link>
                <MenuDivider />
                <MenuItem textColor="brand.500" _hover={{ bg: 'brand.50' }} onClick={handleDestroySession}>
                  Encerrar sessão
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNavbar />
      </Collapse>
    </Box>
  );
}
