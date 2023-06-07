import { Button as ChakraButton } from '@chakra-ui/react';

type ButtonProps = {
  text?: string;
};
const Button = ({ text }: ButtonProps) => {
  return <ChakraButton size={['sm', 'lg', 'lg', 'lg']}>{text}</ChakraButton>;
};

export default Button;
