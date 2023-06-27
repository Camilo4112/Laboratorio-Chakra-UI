import { Box, Heading, Button } from "@chakra-ui/react";
import bgImage from "./resources/Bicycle.jpg";

const Banner = () => {
  return (
    <>
      {/* Banner 1 */}
      <Box
        h="40vh"
        w="100vw"
        bg="gray"
        backgroundImage={`url(${bgImage})`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        position="relative"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.5)"
        />

        <Heading color="white" textTransform="uppercase" zIndex={1}>
          Domina el terreno
        </Heading>
        <Button variant="outline" mt={4} zIndex={1} color="gray.300">
          Ver detalles
        </Button>
        <Button variant="outline" mt={2} zIndex={1} color="gray.300">
          Ver video
        </Button>
      </Box>

      {/* Banner 2 */}
      <Box
        h="50vh"
        w="50vh"
        bg="gray"
        backgroundImage={`url(${bgImage})`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        position="relative"
        mt={8}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.5)"
        />

        <Heading color="white" textTransform="uppercase" zIndex={1}>
        Domina el terreno
        </Heading>
        <Button variant="outline" mt={4} zIndex={1} color="gray.300">
        Ver detalles
        </Button>
        <Button variant="outline" mt={2} zIndex={1} color="gray.300">
        Ver video
        </Button>
      </Box>
    </>
  );
};

export default Banner;

