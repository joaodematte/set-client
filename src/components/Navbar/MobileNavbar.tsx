import { Stack } from '@chakra-ui/react';
import { navbarContent } from './content';
import MobileNavbarItem from './MobileNavbarItem';

export default function MobileNavbar() {
  return (
    <Stack bg="white" p={4} display={{ md: 'none' }}>
      {navbarContent.map((navItem) => (
        <MobileNavbarItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}
