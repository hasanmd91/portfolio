import { extendTheme } from '@chakra-ui/react';
import { Button } from '../components/Button/config';

export const theme = extendTheme({
  colors: {
    primary: '#285E61',
    secondary: '#FF6F91',
    highlight: '00c9A7',
  },

  components: {
    Button,
  },
});
