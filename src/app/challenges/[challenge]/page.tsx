'use client'
import { Text, VStack } from '@chakra-ui/react'

export default function SingleChallenge({ params }: { params: { challenge: string } }) {
  return (
    <VStack justify='center' h='100vh'>
      <Text>Single challenge: {params.challenge}</Text>
    </VStack>
  )
}
