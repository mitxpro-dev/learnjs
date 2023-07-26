import {
  Flex,
  Box,
  Button,
  Text,
  Stack,
  Card,
  CardBody,
  CardFooter,
  Image,
  HStack,
  Heading,
} from '@chakra-ui/react'
import { NavLink } from '@/components/NavLink'
import ChallengeProps from '@/pages/challenges/challengeProps'

export const ChallengeTile = ({
  title,
  image,
  description,
  level,
  topics,
}: ChallengeProps) => {
  return (
    <Card maxW='sm' h='100%' _hover={{ boxShadow: '4px 4px 7px 0px #718096' }}>
      <CardBody>
        <Image src={image} alt={title} borderRadius='lg' />
        <Stack mt='6' spacing='3'>
          <Flex alignItems='center' justifyContent='space-between'>
            <Heading size='md'>{title}</Heading>
            <Text
              color={
                level === 'Easy'
                  ? 'green.600'
                  : level === 'Medium'
                  ? 'orange.300'
                  : 'red.400'
              }
              fontSize='2xl'
            >
              {level}
            </Text>
          </Flex>

          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <HStack spacing='5px' ml='24px'>
        {topics?.map((top, id) => {
          return (
            <Box
              key={id}
              as='button'
              height='24px'
              lineHeight='1.2'
              transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
              border='1px'
              px='8px'
              borderRadius='2px'
              fontSize='14px'
              fontWeight='semibold'
              bg='#f5f6f7'
              borderColor='#ccd0d5'
              marginRight='4px'
              color='#4b4f56'
              _hover={{ bg: '#ebedf0' }}
              _active={{
                bg: '#dddfe2',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9',
              }}
              _focus={{
                boxShadow:
                  '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
              }}
            >
              {top}
            </Box>
          )
        })}
      </HStack>

      <CardFooter>
        <NavLink href={`/${title.replace(/\s/g, '%20')}`}>
          <Button>VIEW</Button>
        </NavLink>
      </CardFooter>
    </Card>
  )
}
