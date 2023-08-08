import { useEffect, useState } from 'react'
import { Text, VStack, Grid, GridItem } from '@chakra-ui/react'
import { ChallengeTile } from '../../components/ChallengeTile'
//import ChallengeProps from '../../types/challengeProps'
import supabase from '../../config/supabaseClient'
//import { Database } from '@/schemas/schema'
import ChallengeTable from '../../types/ChallengeTable'

// const challengezData: ChallengeProps[] = [
//   {
//     id: 1,
//     title: 'Fizzbuzz',
//     image: 'https://picsum.photos/id/326/350/200',
//     description:
//       'Print integers one-to-N, but print “Fizz” if an integer is divisible by three, “Buzz” if an integer is divisible by five, and “FizzBuzz” if an integer is divisible by both three and five',
//     level: 'Easy',
//     topics: ['for loops', 'while loops'],
//   },
//   {
//     id: 2,
//     title: 'Deploy to AWS EC2',
//     image: 'https://picsum.photos/id/239/350/200',
//     description: 'How to deploy a full stack application to AWS EC2',
//     level: 'Hard',
//     topics: ['AWS', 'Deployment', 'VM'],
//   },

//   {
//     id: 3,
//     title: 'Fibonacci Sequence',
//     image: 'https://picsum.photos/id/240/350/200',
//     description:
//       'Write a function that returns the nth entry in the Fibonacci sequence, where n is a number you pass in as an argument to the function',
//     level: 'Easy',
//     topics: ['for loops', 'recursion'],
//   },
//   {
//     id: 4,
//     title: 'Remove Duplicates',
//     image: 'https://picsum.photos/id/645/350/200',
//     description:
//       'Write a function that will return an array without duplicate values in the array',
//     level: 'Easy',
//     topics: ['for loops'],
//   },
//   {
//     id: 5,
//     title: 'Tree Traversal',
//     image: 'https://picsum.photos/id/807/350/200',
//     description:
//       'Implement a depth first search algorithm and list all of the nodes in a binary search tree',
//     level: 'Medium',
//     topics: ['BST', 'DFS'],
//   },
//   {
//     id: 6,
//     title: 'Longest Substring',
//     image: 'https://picsum.photos/id/145/350/200',
//     description:
//       'Find the length of the longest substring without repeating characters',
//     level: 'Medium',
//     topics: ['for loops'],
//   },
//   {
//     id: 7,
//     title: 'Palindrome',
//     image: 'https://picsum.photos/id/1076/350/200',
//     description:
//       'Write a function that will check the string is a palindrome or not',
//     level: 'Easy',
//     topics: ['for loops', 'string methods'],
//   },
//   {
//     id: 8,
//     title: 'JWT with Node and React',
//     image: 'https://picsum.photos/id/835/350/200',
//     description:
//       'Pass a JWT from Node server to the React front end and store it securely in a cookie',
//     level: 'Hard',
//     topics: ['JWT', 'Node.js', 'React', 'Cookies'],
//   },
//   {
//     id: 9,
//     title: "Enable API's with Next.js",
//     image: 'https://picsum.photos/id/133/350/200',
//     description:
//       "Enable 3rd party API's via CDN for server side frameworks such as Next.js, Remix, Vite etc.",
//     level: 'Hard',
//     topics: ['APIs', 'Next.js', 'React', 'Remix'],
//   },
//   {
//     id: 10,
//     title: 'Dynamic routes with GitHub pages',
//     image: 'https://picsum.photos/id/944/350/200',
//     description:
//       'Add dynamic routes to your application deployed to GitHub pages',
//     level: 'Medium',
//     topics: ['GitHub', 'React Router'],
//   },
// ]

// interface Challenge {
//   author: string
//   challenge: {
//     CHALLENGE_1: {
//       correct_answers: string[]
//       default: string
//       description: string
//       good_output_examples: {
//         input: string
//         output: string
//       }[]
//       requirements: string
//       tip: string
//     }
//   }
//   created_at: Date
//   description: string
//   difficulty: number
//   image: string
//   markdown: string
//   name: string
//   published: boolean
//   slug: string
// }

//type Challenge = Database['public']['Tables']['Challenges']['Row'][] | null //separate null and put it in useState

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
