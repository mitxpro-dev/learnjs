import { Box, useColorModeValue } from '@chakra-ui/react'

const Blockquote = ({ children }: { children: string }) => (
  <Box
    borderLeftStyle='solid'
    borderLeftWidth={4}
    borderLeftColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
    color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
    pl={4}
  >
    {children}
  </Box>
)

export default Blockquote
