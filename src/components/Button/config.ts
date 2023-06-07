import { defineStyleConfig } from '@chakra-ui/react';
import { ComponentStyleConfig } from '@chakra-ui/react';

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
      my: 4,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
      my: 4,
    },
    lg: {
      fontSize: 'lg',
      px: 8,
      py: 6,
      my: 4,
    },
  },
  variants: {
    primary: {
      bg: 'primary',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
});
