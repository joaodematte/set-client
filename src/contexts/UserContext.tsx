import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import React, { createContext, useEffect, useMemo, useState } from 'react';
import api from '../utils/axios';

type User = {
  name: string;
  surname: string;
  email: string;
  profile_pic: string;
  jwt: string;
};

export type TUserContext = {
  loggedUser: User | null;
  saveJWTCookie: (user: User) => void;
};

export const UserContext = createContext<TUserContext | null>(null);

export function UserProvider({ children }: { children: JSX.Element }) {
  const router = useRouter();
  const toast = useToast();
  const [loggedUser, setLoggedUser] = useState<User | null>(null);

  const saveJWTCookie = (user: User) => {
    setCookie(null, 'set-jwt', user.jwt, {
      path: '/'
    });

    setLoggedUser(user);

    api.defaults.headers.common.Authorization = `Bearer ${user.jwt}`;
  };

  const verifyJWT = async (jwt: string) => {
    api
      .get(`/auth/by-jwt?jwt=${jwt}`)
      .then((res) => {
        setLoggedUser(res.data.user);
      })
      .catch((error) => {
        destroyCookie(null, 'set-jwt');

        router.push('/');

        toast({
          title: 'Erro!',
          description: error.response.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        });
      });
  };

  useEffect(() => {
    const { 'set-jwt': token } = parseCookies();

    if (token) {
      verifyJWT(token);
    }
  }, []);

  const providerValues = useMemo(() => ({ saveJWTCookie, loggedUser }), []);

  return <UserContext.Provider value={providerValues}>{children}</UserContext.Provider>;
}
