import { Box, Popover, PopoverContent, PopoverTrigger, Stack, Link as ChakraLink } from '@chakra-ui/react';
import { navbarContent } from './content';
import DesktopSubNavigation from './DesktopSubNavigation';

export default function DesktopNavbar() {
  const linkColor = 'gray.600';
  const linkHoverColor = 'gray.800';
  const popoverContentBgColor = 'white';

  return (
    <Stack direction="row" spacing={4}>
      {navbarContent.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <ChakraLink
                p={2}
                fontSize="sm"
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor
                }}
              >
                {navItem.label}
              </ChakraLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent border={0} boxShadow="xl" bg={popoverContentBgColor} p={4} rounded="xl" minW="sm">
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNavigation key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
}
