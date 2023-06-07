import { Box, Container, Heading, Link } from '@chakra-ui/react';
import Button from '../../components/Button/index';
import profile from '../../../index.json';
import 'animate.css';

const Home = () => {
  return (
    <Container
      className="animate__animated animate__fadeIn  animate__slower"
      maxW="3xl"
      minHeight="container.sm"
      centerContent
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Heading fontSize={['2xl', '6xl', '6xl', '6xl']}>
          {profile.herotitle}
        </Heading>
        <Link href={profile.github} target="blank">
          <Button text="Check My GitHub" />
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
