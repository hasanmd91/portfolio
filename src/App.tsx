import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/index';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/AboutMe';
import Skills from './Pages/skills';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Navabr from './components/Navbar/Index';
import Footer from './Pages/Footer';

const App = () => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <BrowserRouter>
        <Navabr />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
