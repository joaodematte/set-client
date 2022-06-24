import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

type TDashboardLayout = {
  children: JSX.Element;
};

export default function DashboardLayout({ children }: TDashboardLayout) {
  return (
    <>
      <Navbar />
      <Box width="full" maxW="3xl" mx="auto" py={8} px={4}>
        {children}
      </Box>
    </>
  );
}
