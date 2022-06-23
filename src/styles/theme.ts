import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    50: '#FEE7E9',
    100: '#FBBBC1',
    200: '#F99098',
    300: '#F66570',
    400: '#F43948',
    500: '#F10E20',
    600: '#C10B19',
    700: '#910813',
    800: '#61050D',
    900: '#300306'
  }
};

const myTheme = extendTheme({ colors });

export default myTheme;
