import { Box } from "@chakra-ui/react";
import * as React from "react";
import List from "./List";

function Containers() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <Box bg="white" w="100%" h="100%" color="black">
      <Box bg="white" w="50%" h="100%">
        <List/>
      </Box>
    </Box>
  );
}

export default Containers;
