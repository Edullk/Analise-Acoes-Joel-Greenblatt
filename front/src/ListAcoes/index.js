import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

function ListAcoes() {
  return (
    <div className="containerListAcoes">
      <TableContainer>
        <Table size="lg">
          <Thead>
            <Tr>
              <Th>Lista de ações</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>inches</Td>
            </Tr>
          </Tbody>

        </Table>
      </TableContainer>
    </div>
  );
}

export default ListAcoes;
