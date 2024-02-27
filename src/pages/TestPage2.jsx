import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const TestPage2 = () => {
  return (
    <>
      <Box p={5}>
        <Text fontSize="xl">This is Test Page 2</Text>
      </Box>
      <Button colorScheme="red" mt={4}>
        Mock Button
      </Button>
    </>
  );
};

export default TestPage2;
