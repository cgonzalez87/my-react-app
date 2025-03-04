import {
  Button,
  Center,
  Heading,
  VStack,
  IconButton,
  HStack,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const MotionHeading = motion(Heading);
const MotionButton = motion(Button);
const MotionBox = motion(Box);

// ✅ Floating Dots Component
const FloatingDots = () => {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          width="15px"
          height="15px"
          bg="whiteAlpha.500"
          borderRadius="50%"
          initial={{ opacity: 0, y: Math.random() * 50 }}
          animate={{ opacity: 1, y: Math.random() * -50 }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Center
      height="100vh"
      flexDirection="column"
      position="relative"
      overflow="hidden"
    >
      {/* Floating Dots Background */}
      <FloatingDots />

      {/* Main Content */}
      <VStack spacing={6} textAlign="center" color="white">
        <MotionHeading
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Hi, Welcome to My App
        </MotionHeading>
        <MotionHeading
          padding={1}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          I'm Carlos, and I am a Software Engineer.
        </MotionHeading>
        <MotionButton
          size="lg"
          colorScheme="teal"
          onClick={() => navigate("/app")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Check out my GameHub App
        </MotionButton>
        {/* <Box>
          <Alert
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            status="warning"
          >
            <AlertIcon />
            <AlertTitle>Testing Enviroment</AlertTitle>
          </Alert>
        </Box> */}

        {/* Social Links */}
        <HStack spacing={4} mt={4} alignItems="center" justifyContent="center">
          <IconButton
            borderRadius={50}
            as="a"
            href="https://www.linkedin.com/in/carlos-gonzalez-38828153"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            size="lg"
            colorScheme="blue"
          />
          <IconButton
            borderRadius={50}
            as="a"
            href="https://github.com/cgonzalez87/my-react-app"
            target="_blank"
            aria-label="GitHub"
            icon={<FaGithub />}
            size="lg"
            colorScheme="gray"
          />
          <IconButton
            borderRadius={50}
            as="a"
            href="mailto:carlos@onedevlift.com"
            aria-label="Email"
            icon={<FaEnvelope />}
            size="lg"
            colorScheme="red"
          />
        </HStack>
      </VStack>
    </Center>
  );
};

export default LandingPage;
