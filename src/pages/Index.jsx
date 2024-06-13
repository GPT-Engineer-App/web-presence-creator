import { Container, VStack, Box, Heading, Text, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Introduction Section */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h1" size="xl" mb={4}>Welcome to My Personal Website</Heading>
          <Text fontSize="lg">Hi, I'm [Your Name], a passionate web developer with expertise in creating stunning and functional websites. Explore my portfolio and feel free to get in touch!</Text>
        </Box>

        {/* Portfolio Section */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>Portfolio</Heading>
          <Text fontSize="md">Here are some of my recent projects:</Text>
          <VStack spacing={4} mt={4}>
            <Box p={4} shadow="sm" borderWidth="1px" borderRadius="md" w="100%">
              <Heading as="h3" size="md">Project 1</Heading>
              <Text>Description of project 1.</Text>
            </Box>
            <Box p={4} shadow="sm" borderWidth="1px" borderRadius="md" w="100%">
              <Heading as="h3" size="md">Project 2</Heading>
              <Text>Description of project 2.</Text>
            </Box>
            <Box p={4} shadow="sm" borderWidth="1px" borderRadius="md" w="100%">
              <Heading as="h3" size="md">Project 3</Heading>
              <Text>Description of project 3.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>Contact</Heading>
          <Text fontSize="md">Feel free to reach out to me through any of the following platforms:</Text>
          <HStack spacing={4} mt={4}>
            <IconButton as="a" href="https://github.com" aria-label="GitHub" icon={<FaGithub />} size="lg" />
            <IconButton as="a" href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            <IconButton as="a" href="mailto:your.email@example.com" aria-label="Email" icon={<FaEnvelope />} size="lg" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;