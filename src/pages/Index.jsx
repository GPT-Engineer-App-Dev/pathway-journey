import { Container, Text, VStack, Heading, Box, Button, Image, Flex } from "@chakra-ui/react";
import { FaRoad } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Road Explorer
        </Heading>
        <Box boxSize="sm">
          <Image src="/images/road.jpg" alt="Road Image" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Discover the most scenic and adventurous roads around the world. Join us on a journey to explore the beauty of road trips.
        </Text>
        <Button colorScheme="teal" size="lg" leftIcon={<FaRoad />}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;