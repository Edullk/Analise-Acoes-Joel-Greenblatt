import { Box, Flex } from "@chakra-ui/react";
import * as React from "react";
import List from "./List";
import Valor from "../Components/Valor";

function Containers() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <Flex bg="#2D3748" w="100%" h="100%" color="whiteAlpha.700">
      <Box bg="white" w="30%" h="100%">
        <List />
      </Box>
      <Box w="50%" h="70%">
        <Valor />
      </Box>
    </Flex>
  );
}

export default Containers;
