/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import myTheme from '../styles/theme';
import DashboardLayout from '../layout/Dashboard';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.includes('dashboard')) {
    return (
      <ChakraProvider theme={myTheme}>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
