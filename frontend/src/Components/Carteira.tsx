import * as React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Progress,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Actions {
  ACAO: string;
  COTACAO: string;
  RANKING: string;
}

function Carteira() {
  return (
    <TableContainer paddingLeft={20} paddingRight={20} bg={"#2D3748"} w={"100%"}>
      <Table size="sm" colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th>POSIÇÃO</Th>
            <Th>ACAO</Th>
            <Th>COTACAO</Th>
            <Th>RANKING</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>sdfsdfs</Td>
            <Td>234234</Td>
            <Td>23432</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default Carteira;
