import { Box, Container, Heading, Link } from '@chakra-ui/react';
import Button from '../../components/Button/index';
import ProfileContext from '../../context';
import { useContext } from 'react';
import 'animate.css';

const Home = () => {
  const { herotitle, githubLink } = useContext(ProfileContext);

  return (
    <Container
      className="animate__animated animate__fadeIn  animate__slower"
      maxW="container.md"
      minHeight="container.sm"
      centerContent
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Heading fontSize={['2xl', '6xl', '6xl', '6xl']}>{herotitle}</Heading>
        <Link href={githubLink} target="blank">
          <Button text="Check My GitHub" />
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
