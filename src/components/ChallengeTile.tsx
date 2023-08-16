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
import DifficultyLevel from '@/types/Difficulty'

export const ChallengeTile = ({
  name,
  image,
  description,
  difficulty,
  slug,
}: ChallengeProps) => {
  const colorForDifficulty: { [key in DifficultyLevel]: string } = {
    [DifficultyLevel.Easy]: 'green.600',
    [DifficultyLevel.Medium]: 'orange.300',
    [DifficultyLevel.Hard]: 'red.400',
  }

  return (
    <Card maxW='sm' h='100%' _hover={{ boxShadow: '4px 4px 7px 0px #718096' }}>
      <CardBody>
        <Image src={image} alt={name} borderRadius='lg' />
        <Stack mt='6' spacing='3'>
          <Flex alignItems='center' justifyContent='space-between'>
            <Heading size='md'>{name}</Heading>
            {difficulty !== undefined && (
              <Text color={colorForDifficulty[difficulty]} fontSize='2xl'>
                {DifficultyLevel[difficulty]}
              </Text>
            )}
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
