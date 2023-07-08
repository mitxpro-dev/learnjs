import { Text, VStack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ChallengeBody from '../../components/ChallengeBody'

export default function SingleChallenge() {
  const { id } = useParams()

  return (
    <VStack justify='center' minH='100vh' py={8}>
      <VStack w='full' h='full' bg={'blackAlpha.100'} rounded='lg' p={16}>
        <Text>Single challenge: {id}</Text>
        <ChallengeBody />
      </VStack>
    </VStack>
  )
}
