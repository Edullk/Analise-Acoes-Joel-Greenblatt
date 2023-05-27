import * as React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Box,
} from "@chakra-ui/react";

function Valor() {
  return (
    <Box>
       <Stat>
      <StatLabel>Patrimonio</StatLabel>
      <StatNumber>R$13.000,00</StatNumber>
      <StatHelpText>Feb 12 - Feb 28</StatHelpText>
    </Stat>
        <Stat>
        <StatLabel>Valor para cada ação</StatLabel>
        <StatNumber>R$130,00</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat>

    </Box>
   
  );
}

export default Valor;
