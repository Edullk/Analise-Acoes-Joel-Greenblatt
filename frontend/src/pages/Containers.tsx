import { Box, Flex } from "@chakra-ui/react";
import * as React from "react";
import List from "./List";
import Valor from "../Components/Valor";
import Carteira from "../Components/Carteira";

function Containers() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <Flex bg="#2D3748" w="100%" h="100%" padding={5} color="whiteAlpha.700">
      <Box>
        <List />
      </Box>
      <Box>
        <Carteira />
      </Box>
      <Box>
        <Valor />
      </Box>
    </Flex>
  );
}

export default Containers;
