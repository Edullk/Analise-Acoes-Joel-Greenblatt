import * as React from 'react'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react';

interface Actions { 
  "ACAO" : string;
  "COTACAO" : string;
  "RANKING": string;
}

function List() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/get_actions');
      if (response.status === 200) {
        const json = await response.json();
        setData(json);
      } else {
        console.log('Erro ao obter os dados:', response.status);
      }
      return response;
    } catch (error) {
      console.log('Erro na requisição:', error);
    }
  };

  useEffect(() => {
      fetchData();
  }, []);

  return (
    <TableContainer>
    <Table size='sm'>
      <Thead>
        <Tr>
          <Th>ACAO</Th>
          <Th>COTACAO</Th>
          <Th>RANKING</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((action:Actions)=> (
           <Tr>
           <Td>{action.ACAO}</Td>
           <Td>{action.COTACAO}</Td>
           <Td>{action.RANKING}</Td>
         </Tr>
        ))}
      </Tbody>

    </Table>
  </TableContainer>
  )
}

export default List;
