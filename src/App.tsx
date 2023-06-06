import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/index';
import Navabr from './components/Navbar/Index';

const App = () => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Navabr />
    </ChakraProvider>
  );
};

export default App;
