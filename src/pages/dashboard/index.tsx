import { Heading } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

export default function DashboarPage() {
  return <Heading>Dashboard</Heading>;
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
