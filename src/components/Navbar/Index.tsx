import { Flex } from '@chakra-ui/react';
import Logo from './Logo/Index';
import MenuToggle from './MenuToggle';
import MenuLinks from './MenuLinks/Index';
import { useState } from 'react';
import IconButton from '../IconButton/index';

const Navabr = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['primary', 'primary', 'primary', 'primary']}
      color={['', '', '', '']}
    >
      <IconButton />
      <Logo />
      <MenuToggle isOpen={isOpen} toggle={toggle} />
      <MenuLinks isOpen={isOpen} />
    </Flex>
  );
};

export default Navabr;
