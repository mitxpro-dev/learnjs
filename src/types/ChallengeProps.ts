import DifficultyLevel from './Difficulty'

export default interface ChallengeProps {
  id: number
  name: string | undefined
  image: string | undefined
  description: string | null
  difficulty: DifficultyLevel | undefined
  slug: string | null
}
