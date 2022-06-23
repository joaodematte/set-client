import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, Icon, Link as ChakraLink, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { NavItem } from './content';

export default function DesktopSubNavigation({ label, href, subLabel }: NavItem) {
  return (
    <ChakraLink href={href} role="group" display="block" p={2} rounded="md" _hover={{ bg: 'brand.50' }}>
      <Link href={href} passHref>
        <Stack direction="row" align="center">
          <Box>
            <Text transition="all .3s ease" _groupHover={{ color: 'brand.400' }} fontWeight={500}>
              {label}
            </Text>
            <Text fontSize="sm">{subLabel}</Text>
          </Box>
          <Flex
            transition="all .3s ease"
            transform="translateX(-10px)"
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify="flex-end"
            align="center"
            flex={1}
          >
            <Icon color="brand.400" w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </ChakraLink>
  );
}
