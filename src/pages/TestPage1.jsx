import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const TestPage1 = () => {
  return (
    <>
      <Box p={5}>
        <Text fontSize="xl">This is Test Page 1</Text>
      </Box>
      <Button colorScheme="blue" mt={4}>
        Mock Button
      </Button>
    </>
  );
};

export default TestPage1;
