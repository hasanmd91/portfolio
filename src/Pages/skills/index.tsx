import {
  Container,
  Stack,
  Image,
  Box,
  Card,
  CardBody,
  Progress,
  Heading,
  Flex,
  Text,
  Divider,
  VStack,
} from '@chakra-ui/react';
import ProfileContext from '../../context';
import { useContext } from 'react';
import Profile from '../../type';

const Skills = () => {
  const { skills, experience } = useContext(ProfileContext) as Profile;

  return (
    <Container
      maxWidth="container.xl"
      className="animate__animated animate__fadeIn  animate__slower"
    >
      <Stack direction={['column', 'row', 'row', 'row']} spacing={10} p={3}>
        <Box>
          {' '}
          <Flex wrap="wrap" maxW="lg">
            {skills.map((skill) => (
              <Card m={2}>
                <CardBody alignSelf="baseline">
                  <Image src={skill.icon} boxSize="100px" objectFit="cover" />
                  <Stack mt={2} spacing={3}>
                    <Heading size="sm">{skill.name}</Heading>
                    <Progress value={skill.level} />
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </Flex>
        </Box>
        <Box>
          <Heading as="h1"> Experience</Heading>
          {experience.map((exp) => (
            <Box my={3} key={exp.id}>
              <Divider />
              <VStack spacing={2} align="baseline">
                <Heading as="h3" size="lg">
                  {exp.companyname}
                </Heading>
                <Text as="b">Employment Type: {exp.employmenttype}</Text>
                <Text>
                  {exp.jobdescripetion
                    .split('-')
                    .map((j) => j.trim())
                    .filter((f) => f.length > 0)
                    .map((d, index) => (
                      <li key={index}>{d}</li>
                    ))}
                </Text>
                <Text>Start Date: {exp.startdate}</Text>
                <Text>
                  {exp.present ? 'Present' : `End Date: ${exp.enddate}`}
                </Text>
              </VStack>
            </Box>
          ))}
        </Box>
      </Stack>
    </Container>
  );
};

export default Skills;
