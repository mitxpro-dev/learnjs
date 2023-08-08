import {
  Flex,
  Button,
  Text,
  Stack,
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
} from '@chakra-ui/react'
import { NavLink } from '@/components/NavLink'
import ChallengeProps from '@/types/ChallengeProps'

export const ChallengeTile = ({
  name,
  image,
  description,
  difficulty,
  slug,
}: ChallengeProps) => {
  return (
    <Card maxW='sm' h='100%' _hover={{ boxShadow: '4px 4px 7px 0px #718096' }}>
      <CardBody>
        <Image src={image} alt={name} borderRadius='lg' />
        <Stack mt='6' spacing='3'>
          <Flex alignItems='center' justifyContent='space-between'>
            <Heading size='md'>{name}</Heading>
            <Text
              color={
                difficulty === 1
                  ? 'green.600'
                  : difficulty === 2
                  ? 'orange.300'
                  : 'red.400'
              }
              fontSize='2xl'
            >
              {difficulty == 1 ? 'Easy' : difficulty == 2 ? 'Medium' : 'Hard'}
            </Text>
          </Flex>

          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <NavLink href={`/challenges/${slug}`}>
          <Button>VIEW</Button>
        </NavLink>
      </CardFooter>
    </Card>
  )
}
