import { defineStyleConfig } from '@chakra-ui/react';
import { ComponentStyleConfig } from '@chakra-ui/react';
import { darken, mode, whiten } from '@chakra-ui/theme-tools';

export const Button: ComponentStyleConfig = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
  },
  variants: {
    primary: (props) => ({
      bg: 'primary',
      color: 'white',
      _hover: mode(darken('primary', 20), whiten('primary', 20))(props),
      boxShadow: 'md',
    }),
    secondary: {},
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
});
