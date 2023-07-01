'use client'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'

export default function About() {
  return (
    <VStack px='4' py='16' gap='6'>
      <Heading display='flex' justifyContent='center'>About Learn JS</Heading>
      <Box display='flex' flexDir='column' gap='2' w='100%'>
        <Heading as="h3" size='l'>The Project</Heading>
        <Text>This application, using NextJS, provides users the ability to complete coding challenges and learn more about specific, common problems that arise in software development.</Text>
        <Text>The main goal of this project is to assist new developers in preparing for common challenges they will encounter when entering the software development industry and building production-level software.</Text>
      </Box>
      <Box display='flex' flexDir='column' gap='2' w='100%'>
        <Heading as="h3" size='l'>The Team</Heading>
        <Text>We are full stack developers who graduated from the MIT xPRO Professional Certificate in Coding program.</Text>
      </Box>
      <Box display='flex' flexDir='column' gap='2' w='100%'>
        <Heading as="h3" size='l'>How to Contribute</Heading>
        <Text>This project is for alumni of the MIT xPRO Professional Certification in Coding program. Reach out to @Pete or @Spencer in the &quot;MIT xPRO Coding&quot; Slack channel.</Text>
      </Box>
    </VStack>
  )
}