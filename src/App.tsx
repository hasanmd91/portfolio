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
import ProfileContext from './context';
import Profile from '../index.json';

const App = () => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <BrowserRouter>
        <Navabr />
        <ProfileContext.Provider value={Profile}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </ProfileContext.Provider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
