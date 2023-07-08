import { Box, Heading, Text, VStack } from '@chakra-ui/react'

interface AboutSection {
  title: string
  text: string | string[]
}

const aboutContent: AboutSection[] = [
  {
    title: 'The Project',
    text: [
      `This application, using NextJS, provides users the ability to complete coding challenges and learn more about specific, common problems that arise in software development.`,
      `The main goal of this project is to assist new developers in preparing for common challenges they will encounter when entering the software development industry and building production-level software.`,
    ],
  },
  {
    title: 'The Team',
    text: `We are full stack developers who graduated from the MIT xPRO Professional Certificate in Coding program.`,
  },
  {
    title: 'How to Contribute',
    text: `This project is for alumni of the MIT xPRO Professional Certification in Coding program. Reach out to @Pete or @Spencer in the "MIT xPRO Coding" Slack channel.`,
  },
]

export default function About() {
  return (
    <VStack px='4' py='16' gap='6' maxW='1440px' m='auto'>
      <Heading display='flex' justifyContent='center'>
        About Learn JS
      </Heading>
      {aboutContent.map(({ title, text }) => (
        <Box
          key={`about-section-${title}`}
          display='flex'
          flexDir='column'
          gap='2'
          w='full'
        >
          <Heading as='h3' size='lg'>
            {title}
          </Heading>
          {Array.isArray(text) ? (
            text.map((textElement, i) => (
              <Text key={`about-subsection-${title}#${i}`}>{textElement}</Text>
            ))
          ) : (
            <Text>{text}</Text>
          )}
        </Box>
      ))}
    </VStack>
  )
}
