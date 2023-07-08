import { Box, useColorModeValue } from '@chakra-ui/react'

const Hr = () => (
  <Box
    w='full'
    borderBottomStyle='solid'
    borderBottomWidth={1}
    borderBottomColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
  />
)

export default Hr
