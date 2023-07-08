import { Flex, Text } from '@chakra-ui/react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Flex justify='center'>
      <Text fontSize='xs'>
        Copyright &copy; {currentYear} MIT xPRO Development Group
      </Text>
    </Flex>
  )
}
