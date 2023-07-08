import { Table as ChakraTable, useColorModeValue } from '@chakra-ui/react'

const Table = ({ children }: { children: string }) => (
  <ChakraTable
    rounded='sm'
    bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
  >
    {children}
  </ChakraTable>
)

export default Table
