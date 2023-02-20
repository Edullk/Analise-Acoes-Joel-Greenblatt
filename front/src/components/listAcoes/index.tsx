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

const ListAcoes: React.FC = () => {
  return (
    <TableContainer
      w="10%"
      h="100%"
      borderRadius="10"
      border="1px"
      borderColor="whiteAlpha.500"
      color="gray.200"
    >
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th
              color="gray.200"
              borderBottom="1px"
              borderColor="whiteAlpha.500"
            >
              Ações
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td borderBottom="0px" borderColor="whiteAlpha.500">
              inches
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ListAcoes;
