import { Box } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

type MenuToggleButtonProps = {
  toggle: () => void;
  isOpen: boolean;
};
const MenuToggleButton = ({ toggle, isOpen }: MenuToggleButtonProps) => {
  return (
    <Box display={{ base: 'block', md: 'none ' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

export default MenuToggleButton;
