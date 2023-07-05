import { Text, VStack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

export default function SingleChallenge() {
  const { id } = useParams()

  return (
    <VStack justify='center' h='100vh'>
      <Text>Single challenge: {id}</Text>
    </VStack>
  )
}
