import { useColorMode } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ThemeChangeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      aria-label="Color mode switchers"
      onClick={toggleColorMode}
      variant={'primary'}
    >
      Switch Mode{' '}
    </IconButton>
  );
};

export default ThemeChangeButton;
