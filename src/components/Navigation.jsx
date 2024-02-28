import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Flex as="nav" bg="gray.100" padding="4" justifyContent="space-around">
      <Box>
        <Link to="/">
          <Text>Home</Text>
        </Link>
      </Box>
      <Box>
        <Link to="/test-page-1">
          <Text>Test Page 1</Text>
        </Link>
      </Box>
      <Box>
        <Link to="/about">
          <Text>About</Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
