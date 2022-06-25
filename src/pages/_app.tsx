/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import myTheme from '../styles/theme';
import DashboardLayout from '../layouts/Dashboard';
import { UserProvider } from '../contexts/UserContext';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.includes('dashboard')) {
    return (
      <ChakraProvider theme={myTheme}>
        <UserProvider>
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        </UserProvider>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider theme={myTheme}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
