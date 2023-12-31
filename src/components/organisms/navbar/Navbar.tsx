import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <Flex
      bg="#fa7946"
      w="100%"
      p={4}
      color="white"
      justifyContent="space-between"
      alignItems="center"
    >
      {/* Logo or Branding */}
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          My Website
        </Text>
      </Box>

      {/* Navigation Links */}
      <Flex alignItems="center">
        <Box mr={4}>
          <Link href="/">Home</Link>
        </Box>
        <Box mr={4}>
          <Link href="/sign-in">Sign In</Link>
        </Box>
        <Box>
          <UserButton afterSignOutUrl="/" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
