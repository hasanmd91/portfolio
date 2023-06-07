import { Container, Stack, Image, Text } from '@chakra-ui/react';
import ProfileContext from '../../context';
import { useContext } from 'react';

const About = () => {
  const { image, aboutMe } = useContext(ProfileContext);

  return (
    <Container
      maxWidth="container.xl"
      className="animate__animated animate__fadeIn  animate__slower"
    >
      <Stack direction={['column', 'row', 'row', 'row']} spacing={10} p={3}>
        <Image src={image} alt="Dan Abramov" />
        <Text>{aboutMe}</Text>
      </Stack>
    </Container>
  );
};

export default About;
