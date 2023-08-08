import { useEffect, useState } from 'react'
import { Text, VStack, Grid, GridItem } from '@chakra-ui/react'
import { ChallengeTile } from '../../components/ChallengeTile'
import supabase from '../../config/supabaseClient'
import ChallengeTable from '../../types/ChallengeTable'

export default function Challenges() {
  const [error, setError] = useState<string | null>(null)

  const [challengesData, setChallengesData] = useState<ChallengeTable | null>(
    null
  )

  useEffect(() => {
    const fetchChallenges = async () => {
      const { data, error } = await supabase.from('Challenges').select()
      if (error) {
        setError('Could not fetch challenges')
        setChallengesData(null)
        console.log(error)
      }
      if (data) {
        setChallengesData(data)
        setError(null)
      }
    }
    fetchChallenges()
  }, [])

  return (
    <VStack justify='center'>
      <Text fontSize='3xl' my={10}>
        Challenges
      </Text>
      <Grid
        templateColumns={{
          md: 'repeat(3, 1fr)',
          sm: 'repeat(2, 1fr)',
          base: '1fr',
        }}
        gap={6}
        mb={6}
      >
        {error && <p>error</p>}
        {challengesData &&
          challengesData.map((challenge, idx) => {
            return (
              <GridItem key={idx}>
                <ChallengeTile
                  id={idx}
                  name={challenge.name}
                  image={challenge.image}
                  description={challenge.description}
                  difficulty={challenge.difficulty}
                  slug={challenge.slug}
                />
              </GridItem>
            )
          })}
      </Grid>
    </VStack>
  )
}
